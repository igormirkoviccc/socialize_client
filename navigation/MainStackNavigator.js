import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "../screens/LogInScreen";
import UsersScreen from "../screens/UsersScreen";
import {useContext} from "react";
import {Context as AuthContext} from "../context/AuthContext";
import LinksScreen from "../screens/LinksScreen";
import HomeScreen from "../screens/HomeScreen";

const RootStack = createStackNavigator();

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LinkStack = createStackNavigator();
const UserStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="LogIn"
            component={LogInScreen}
            options={{ title: "Log in" }}
        />
    </AuthStack.Navigator>
);

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Users" component={UsersScreen} />
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Links" component={LinksScreen}/>
    </HomeStack.Navigator>
);

const LinkStackScreen = () => (
    <LinkStack.Navigator>
        <LinkStack.Screen name="Users" component={UsersScreen} />
        <LinkStack.Screen name="Home" component={HomeScreen} />
        <LinkStack.Screen name="Links" component={LinksScreen}/>
    </LinkStack.Navigator>
);

const UserStackScreen = () => (
    <UserStack.Navigator>
        <UserStack.Screen name="Users" component={UsersScreen} />
        <UserStack.Screen name="Home" component={HomeScreen} />
        <UserStack.Screen name="Links" component={LinksScreen}/>
    </UserStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Link" component={LinkStackScreen} />
        <Tabs.Screen name="User" component={UserStackScreen} />
    </Tabs.Navigator>
);


export const RootStackScreen = ({ login }) => (
    <RootStack.Navigator headerMode="none">
        {login ? (
            <RootStack.Screen
                name="App"
                component={TabsScreen}
                options={{
                    animationEnabled: false,
                }}
            />
        ) : (
            <RootStack.Screen
                name="Auth"
                component={AuthStackScreen}
                options={{
                    animationEnabled: false,
                }}
            />
        )}
    </RootStack.Navigator>
);


export default function RootStackNavigator() {
    const {state, LogIn} = useContext(AuthContext)

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                {!state.token &&
                <RootStack.Screen name='Login' component={AuthStackScreen} />
                }
                <RootStack.Screen name='Users' component={TabsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
