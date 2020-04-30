import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import LogInScreen from "../screens/LogInScreen";

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LogInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator