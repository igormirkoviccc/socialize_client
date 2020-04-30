import React from 'react';
import { NavigationContainer } from '@react-navigation/native';



import { Provider as AuthProvider } from './context/AuthContext'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import MainStackNavigator from './navigation/MainStackNavigator'



export default function App(){
    return (
        <AuthProvider>
            <MainStackNavigator/>
        </AuthProvider>
    )
}