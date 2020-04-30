import React from 'react';


import { Provider as AuthProvider } from './context/AuthContext'

import MainStackNavigator from './navigation/MainStackNavigator'


export default function App(){
    return (
        <AuthProvider>
            <MainStackNavigator/>
        </AuthProvider>
    )
}