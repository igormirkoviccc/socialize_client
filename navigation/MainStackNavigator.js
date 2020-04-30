import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "../screens/LogInScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";
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
        <HomeStack.Screen name="Profile" component={HomeScreen} />
        <HomeStack.Screen name="News feed" component={NewsFeedScreen} />
        <HomeStack.Screen name="Links" component={LinksScreen}/>
    </HomeStack.Navigator>
);

const LinkStackScreen = () => (
    <LinkStack.Navigator>
        <LinkStack.Screen name="Links" component={LinksScreen}/>
        <LinkStack.Screen name="News feed" component={NewsFeedScreen} />
        <LinkStack.Screen name="Profile" component={HomeScreen} />
    </LinkStack.Navigator>
);

const NewsFeedStackScreen = () => (
    <UserStack.Navigator>
        <UserStack.Screen name="News feed" component={NewsFeedScreen} />
        <UserStack.Screen name="Profile" component={HomeScreen} />
        <UserStack.Screen name="Links" component={LinksScreen}/>
    </UserStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Link" component={LinkStackScreen} />
        <Tabs.Screen name="News feed" component={NewsFeedStackScreen} />
    </Tabs.Navigator>
);

export default function RootStackNavigator() {
    const {state} = useContext(AuthContext)
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                {!state.token &&
                <RootStack.Screen name='Login' component={AuthStackScreen} />
                }
                <RootStack.Screen name='News feed' component={TabsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
