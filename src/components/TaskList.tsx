import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {Task} from '../types/Task';
import {loadTasks, saveTasks} from '../utils/storage';
import TaskItem from './TaskItem';

interface TaskListProps {
  onTasksChange?: (tasks: Task[]) => void;
}

const TaskList: React.FC<TaskListProps> = ({onTasksChange}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // BUG #1: Memory leak - missing dependency array causes infinite re-renders
  useEffect(() => {
    loadTasksFromStorage();
  }); // Missing dependency array - this is the bug!

  const loadTasksFromStorage = async () => {
    try {
      const loadedTasks = await loadTasks();
      setTasks(loadedTasks);
      onTasksChange?.(loadedTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleToggleComplete = async (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task,
    );
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
    onTasksChange?.(updatedTasks);
  };

  const handleDeleteTask = async (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
    onTasksChange?.(updatedTasks);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTasksFromStorage();
    setRefreshing(false);
  };

  const renderTask = ({item}: {item: Task}) => (
    <TaskItem
      task={item}
      onToggleComplete={handleToggleComplete}
      onDelete={handleDeleteTask}
    />
  );

  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks yet!</Text>
        <Text style={styles.emptySubtext}>
          Tap the + button to add your first task
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={item => item.id}
      style={styles.list}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default TaskList; 