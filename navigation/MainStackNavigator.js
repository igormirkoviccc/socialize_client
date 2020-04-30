import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import LogInScreen from "../screens/LogInScreen";
import UsersScreen from "../screens/UsersScreen";

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LogInScreen} />
                <Stack.Screen name='Users' component={UsersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator