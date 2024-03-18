import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../constants/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home';
import Article from '../screens/article/article';
import Alert from '../screens/alert/alert';
import Notification from '../screens/notification/notification';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor : theme.colors.dark[1],
          tabBarInactiveTintColor : theme.colors.dark[7]
        }}
      >
            <Tab.Screen 
              name="Home" 
              component={Home} 
              options={{
                headerShown: false,
                tabBarIcon : ({color})=> <Foundation name='home' size={27} color={color}/>
              }}
            />
            <Tab.Screen 
              name="Artilce" 
              component={Article}
              options={{
                headerShown: false,
                tabBarIcon : ({color})=> <MaterialIcons name='article' size={27} color={color} />
              }}
            />
            <Tab.Screen 
              name="Alert" 
              component={Alert}
              options={{
                headerShown: false,
                tabBarIcon : ({color})=> <Ionicons name='alert-circle' size={27} color={color} />
              }}
            />
            <Tab.Screen 
              name="Notification" 
              component={Notification} 
              options={{
                headerShown: false,
                tabBarIcon : ({color})=> <MaterialIcons name='article' size={27} color={color} />
              }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation