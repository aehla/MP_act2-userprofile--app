import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  Modal, 
  FlatList, 
  Alert, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [goals, setGoals] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newGoal, setNewGoal] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editGoal, setEditGoal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isGoalModal, setIsGoalModal] = useState(false);

  // Add or Edit Task
  const handleTaskSubmit = () => {
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id
            ? { ...task, title: newTask, deadline: newDeadline }
            : task
        )
      );
    } else {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, deadline: newDeadline, completed: false }]);
    }
    resetForm();
  };

  // Add or Edit Goal
  const handleGoalSubmit = () => {
    if (editGoal) {
      setGoals(
        goals.map((goal) =>
          goal.id === editGoal.id ? { ...goal, title: newGoal } : goal
        )
      );
    } else {
      setGoals([...goals, { id: goals.length + 1, title: newGoal }]);
    }
    resetForm();
  };

  // Reset form fields
  const resetForm = () => {
    setNewTask('');
    setNewGoal('');
    setNewDeadline('');
    setEditTask(null);
    setEditGoal(null);
    setModalVisible(false);
    setIsGoalModal(false);
  };

  // Open the edit task modal
  const openEditTask = (task) => {
    setEditTask(task);
    setNewTask(task.title);
    setNewDeadline(task.deadline || '');
    setModalVisible(true);
    setIsGoalModal(false);
  };

  // Open the edit goal modal
  const openEditGoal = (goal) => {
    setEditGoal(goal);
    setNewGoal(goal.title);
    setModalVisible(true);
    setIsGoalModal(true);
  };

  // Delete a task with improved confirmation pop-up
  const deleteTask = (taskId) => {
    Alert.alert(
      'Confirm Deletion', 
      'Are you sure you want to permanently delete this task?', 
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setTasks(tasks.filter((task) => task.id !== taskId));
            Alert.alert('Task Deleted', 'The task has been successfully deleted.');
          }
        }
      ],
      { cancelable: false }
    );
  };

  // Delete a goal with improved confirmation pop-up
  const deleteGoal = (goalId) => {
    Alert.alert(
      'Confirm Deletion', 
      'Are you sure you want to permanently delete this goal?', 
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setGoals(goals.filter((goal) => goal.id !== goalId));
            Alert.alert('Goal Deleted', 'The goal has been successfully deleted.');
          }
        }
      ],
      { cancelable: false }
    );
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
        if (task.completed) {
          setCompletedTasks([...completedTasks, task]);
        } else {
          setCompletedTasks(completedTasks.filter((t) => t.id !== taskId));
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Show DatePicker for deadline selection
  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (event, selectedDate) => {
        if (selectedDate) {
          setNewDeadline(selectedDate.toLocaleDateString());
        }
      },
      mode: 'date',
      is24Hour: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, Ella!</Text>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Your Progress</Text>
          <Text style={styles.cardContent}>{tasks.length} Tasks Created</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Trending Feature</Text>
          <Text style={styles.cardContent}>Try the new Dark Mode!</Text>
        </Card>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => { setIsGoalModal(false); setModalVisible(true); }}>
          <MaterialCommunityIcons name="plus-circle" size={24} color="#fff" />
          <Text style={styles.actionText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => { setIsGoalModal(true); setModalVisible(true); }}>
          <MaterialCommunityIcons name="bullseye-arrow" size={24} color="#fff" />
          <Text style={styles.actionText}>Add Goals</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tipsHeader}>Your Tasks</Text>
      <FlatList
        data={tasks.filter((task) => !task.completed)} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItemContainer}>
            <Text style={styles.taskItem}>{item.title}</Text>
            {item.deadline ? <Text style={styles.deadlineText}>{item.deadline}</Text> : null}
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => openEditTask(item)}>
                <MaterialCommunityIcons name="pencil" size={20} color="#201B51" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <MaterialCommunityIcons name="delete" size={20} color="#FF0000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
                <MaterialCommunityIcons 
                  name={item.completed ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} 
                  size={20} 
                  color={item.completed ? 'blue' : 'gray'} 
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.tipsHeader}>Finished Tasks</Text>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItemContainer}>
            <Text style={styles.taskItem}>{item.title}</Text>
            {item.deadline ? <Text style={styles.deadlineText}>{item.deadline}</Text> : null}
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
                <MaterialCommunityIcons name="check-circle" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.tipsHeader}>Your Goals</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItemContainer}>
            <Text style={styles.taskItem}>{item.title}</Text>
            <View style={styles.taskActions}>
              <TouchableOpacity onPress={() => openEditGoal(item)}>
                <MaterialCommunityIcons name="pencil" size={20} color="#201B51" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteGoal(item.id)}>
                <MaterialCommunityIcons name="delete" size={20} color="#FF0000" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{isGoalModal ? 'Add Goal' : 'Add Task'}</Text>
            <TextInput
              style={styles.input}
              placeholder={isGoalModal ? 'Enter Goal Title' : 'Enter Task Title'}
              value={isGoalModal ? newGoal : newTask}
              onChangeText={isGoalModal ? setNewGoal : setNewTask}
            />
            {!isGoalModal && (
              <TouchableOpacity onPress={showDatePicker} style={styles.input}>
                <Text>{newDeadline || 'Set Deadline'}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.submitButton} onPress={isGoalModal ? handleGoalSubmit : handleTaskSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#201B51',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 15,
    backgroundColor: '#F6B01A',
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardContent: {
    fontSize: 14,
    marginTop: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#201B51',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginLeft: 8,
  },
  tipsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  taskItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskItem: {
    flex: 1,
    fontSize: 16,
  },
  deadlineText: {
    fontSize: 14,
    color: '#999',
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#201B51',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  closeButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default Home;
