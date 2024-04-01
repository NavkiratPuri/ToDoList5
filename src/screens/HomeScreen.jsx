import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import { useState } from 'react';
import { Button } from 'react-native';


const HomeScreen = ({navigation}) => {
    
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
    
    const addTask = (taskText) => {
    
        setTasks([...tasks, taskText]);
      };
    
    return (
        <MainLayout>
            <SafeAreaView>
                
                <ToDoList tasks={tasks}/>
                
                <ToDoForm addTask={addTask}/>

                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
                />

            </SafeAreaView>
        </MainLayout>
    );
};

export default HomeScreen;