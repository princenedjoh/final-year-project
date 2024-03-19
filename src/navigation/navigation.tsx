import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/home';
import Article from '../screens/article/article';
import Alert from '../screens/alert/alert';
import Notification from '../screens/notification/notification';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '../styles/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor : theme.colors.main.primary,
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
              tabBarIcon : ({color})=> <Entypo name='bell' size={27} color={color} />
            }}
          />
      </Tab.Navigator>
  );
};

export default Navigation