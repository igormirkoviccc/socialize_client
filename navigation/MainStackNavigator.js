import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import LogInScreen from "../screens/LogInScreen";
import UsersScreen from "../screens/UsersScreen";
import {useContext} from "react";
import {Context as AuthContext} from "../context/AuthContext";

function MainStackNavigator() {
    const {state, LogIn} = useContext(AuthContext)



    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!state.token &&
                <Stack.Screen name='Login' component={LogInScreen} />
                }
                <Stack.Screen name='Users' component={UsersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator