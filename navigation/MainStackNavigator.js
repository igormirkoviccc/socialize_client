import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "../screens/LogInScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import {useContext, useState, useEffect} from "react";
import {AsyncStorage, Text, View} from "react-native";
import { Button } from 'react-native-elements';

import {Context as AuthContext} from "../context/AuthContext";
import LinksScreen from "../screens/LinksScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {navigationRef} from "./RootNavigation";
import NewPostScreen from "../screens/NewPostScreen";


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
        <AuthStack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ title: "Sign up" }}
        />
    </AuthStack.Navigator>
);

const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Profile"
                component={HomeScreen}
            />
            <HomeStack.Screen name="News feed"
                              options={{
                                  headerRight: () => (
                                      <Button
                                          onPress={() => navigation.navigate('New Post')}
                                          title="Info"
                                          color="#fff"
                                      />
                                  ),
                              }}
                              component={NewsFeedScreen} />
            <HomeStack.Screen name="Links" component={LinksScreen}/>
            <HomeStack.Screen name="New Post" component={NewPostScreen}/>

        </HomeStack.Navigator>
    );
}

const LinkStackScreen = () => (
    <LinkStack.Navigator>
        <LinkStack.Screen name="Links" component={LinksScreen}/>
        <LinkStack.Screen name="News feed" component={NewsFeedScreen} />
        <LinkStack.Screen name="Profile" component={HomeScreen} />
    </LinkStack.Navigator>
);

const NewsFeedStackScreen = ({navigation}) => (
    <UserStack.Navigator>
        <UserStack.Screen name="News feed"
                          options={{
                              headerRight: () => (
                                  <Button
                                      onPress={() => navigation.navigate('New Post')}
                                      type='outline'
                                      title="Add post"
                                      color="#000"
                                      buttonStyle={{height: 30, marginRight: 10}}
                                      titleStyle={{fontSize: 12}}
                                  />
                              ),
                          }} component={NewsFeedScreen} />
        <UserStack.Screen name="Profile" component={HomeScreen} />
        <UserStack.Screen name="New Post" component={NewPostScreen} />
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
    const { state } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('auth_token').then((token) => {
            state.isAuth = !!token;
            setLoading(false);
        });
    }, [])

    if(isLoading){
        return <View>
            <Text>Loading...</Text>
        </View>
    }


    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator headerMode="none">
                {!state.isAuth &&
                <RootStack.Screen name='Auth' component={AuthStackScreen} />
                }
                <RootStack.Screen name='News feed' component={TabsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
