import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../types/Task';

const TASKS_KEY = 'tasks';

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const tasksJson = await AsyncStorage.getItem(TASKS_KEY);
    if (tasksJson) {
      const tasks = JSON.parse(tasksJson);
      return tasks.map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }));
    }
    return [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
};

// BUG #3: Async/Promise handling issue - not properly awaited
export const saveTasks = (tasks: Task[]) => {
  try {
    const tasksJson = JSON.stringify(tasks.map(task => ({
      ...task,
      createdAt: task.createdAt.toISOString(),
    })));
    AsyncStorage.setItem(TASKS_KEY, tasksJson); // Missing await - this is the bug!
    return true;
  } catch (error) {
    console.error('Error saving tasks:', error);
    return false;
  }
};

export const clearAllTasks = async (): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(TASKS_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing tasks:', error);
    return false;
  }
};

// NOTE: The JSON.stringify performance could be optimized with a custom serializer
// This is not a bug - just a potential optimization for large datasets 