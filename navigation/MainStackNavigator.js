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
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {navigationRef} from "./RootNavigation";
import NewPostScreen from "../screens/NewPostScreen";


const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LinkStack = createStackNavigator();
const NewsFeedStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const LogOut = async () =>{
    await AsyncStorage.removeItem('auth_token');
    await AsyncStorage.removeItem('id');
}


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

const ProfileStackScreen = ({navigation}) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerRight: () => (
                        <Button
                            onPress={() => LogOut()}
                            title="LogOut"
                            color="#000"
                            buttonStyle={{height: 30, marginRight: 10}}
                            titleStyle={{fontSize: 12}}
                        />
                    ),
                }}
            />
            <ProfileStack.Screen name="News feed"
                              component={NewsFeedScreen} />
            <ProfileStack.Screen name="Links" component={LinksScreen}/>
            <ProfileStack.Screen name="New Post" component={NewPostScreen}/>

        </ProfileStack.Navigator>
    );
}

const LinkStackScreen = () => (
    <LinkStack.Navigator>
        <LinkStack.Screen name="Links" component={LinksScreen}/>
        <LinkStack.Screen name="News feed" component={NewsFeedScreen} />
        <LinkStack.Screen name="Profile" component={ProfileScreen} />
    </LinkStack.Navigator>
);

const NewsFeedStackScreen = ({navigation}) => (
    <NewsFeedStack.Navigator>
        <NewsFeedStack.Screen name="News feed"
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
        <NewsFeedStack.Screen name="Profile" component={ProfileScreen} />
        <NewsFeedStack.Screen name="New Post" component={NewPostScreen} />
        <NewsFeedStack.Screen name="Links" component={LinksScreen}/>
    </NewsFeedStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="News feed" component={NewsFeedStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
        <Tabs.Screen name="Chat" component={LinkStackScreen} />
    </Tabs.Navigator>
);

export default function RootStackNavigator() {
    const { state } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(true);

    const GetFromAsyncStorage = async () =>{
        await AsyncStorage.getItem('auth_token').then((token) => {
            state.isAuth = !!token;
        });
        await AsyncStorage.getItem('id').then((id) => {
            state.user = id;
        });
    }

    useEffect(async () => {
         await GetFromAsyncStorage();
         setLoading(false);
         console.log(state.user);

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
