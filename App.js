import React from 'react';
import { Provider as AuthProvider } from './context/AuthContext'
import RootStackNavigator from "./navigation/MainStackNavigator";



export default function App(){
    return (
        <AuthProvider>
            <RootStackNavigator/>
        </AuthProvider>
    )
}