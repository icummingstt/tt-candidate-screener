import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TaskItem from '../src/components/TaskItem';
import {Task} from '../src/types/Task';

const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  createdAt: new Date('2023-01-01'),
};

const mockOnToggleComplete = jest.fn();
const mockOnDelete = jest.fn();

describe('TaskItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders task information correctly', () => {
    const {getByText} = render(
      <TaskItem
        task={mockTask}
        onToggleComplete={mockOnToggleComplete}
        onDelete={mockOnDelete}
      />,
    );

    expect(getByText('Test Task')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
    expect(getByText('Created: 1/1/2023')).toBeTruthy();
  });

  it('calls onToggleComplete when task is pressed', () => {
    const {getByText} = render(
      <TaskItem
        task={mockTask}
        onToggleComplete={mockOnToggleComplete}
        onDelete={mockOnDelete}
      />,
    );

    fireEvent.press(getByText('Test Task'));
    expect(mockOnToggleComplete).toHaveBeenCalledWith('1');
  });

  it('shows completed styling when task is completed', () => {
    const completedTask = {...mockTask, completed: true};
    const {getByText} = render(
      <TaskItem
        task={completedTask}
        onToggleComplete={mockOnToggleComplete}
        onDelete={mockOnDelete}
      />,
    );

    const titleElement = getByText('Test Task');
    expect(titleElement.props.style).toContainEqual(
      expect.objectContaining({
        textDecorationLine: 'line-through',
      }),
    );
  });
}); 