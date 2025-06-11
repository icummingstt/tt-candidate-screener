import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Task} from '../types/Task';
import AddTaskForm from '../components/AddTaskForm';

type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
};

type AddTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddTask'
>;
type AddTaskScreenRouteProp = RouteProp<RootStackParamList, 'AddTask'>;

interface AddTaskScreenProps {
  navigation: AddTaskScreenNavigationProp;
  route: AddTaskScreenRouteProp;
}

const AddTaskScreen: React.FC<AddTaskScreenProps> = ({navigation}) => {
  const handleAddTask = (task: Task) => {
    // In a real app, this would be passed down from the parent
    // For this screener, we'll simulate the buggy behavior
    console.log('Adding task:', task);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddTaskForm onAddTask={handleAddTask} onCancel={handleCancel} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default AddTaskScreen; 