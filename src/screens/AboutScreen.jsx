import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';


const AboutScreen = () => {
    return (
        <MainLayout> 
            <SafeAreaView>
                <Text>To Do List</Text>
                <Text>Navkirat Puri</Text>
                <Text>31 March, 2024</Text>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />

            </SafeAreaView>
        </MainLayout>
    );
};

export default AboutScreen;