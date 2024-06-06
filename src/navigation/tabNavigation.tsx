import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import theme from '../styles/theme';
import screens from '../constants/screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor : theme.colors.main.primary,
        tabBarInactiveTintColor : theme.colors.dark[7]
      }}
    >
          <Tab.Screen 
            name={screens.home.name}
            component={screens.home.component} 
            options={{
              headerShown: false,
              tabBarIcon : ({color})=> <Foundation name='home' size={27} color={color}/>
            }}
          />
          <Tab.Screen 
            name={screens.article.name}
            component={screens.article.component}
            options={{
              headerShown: false,
              tabBarIcon : ({color})=> <MaterialIcons name='article' size={27} color={color} />
            }}
          />
          <Tab.Screen 
            name={screens.alert.name} 
            component={screens.alert.component}
            options={{
              headerShown: false,
              tabBarIcon : ({color})=> <Ionicons name='alert-circle' size={27} color={color} />
            }}
          />
          <Tab.Screen 
            name={screens.notification.name} 
            component={screens.notification.component} 
            options={{
              headerShown: false,
              tabBarIcon : ({color})=> <FontAwesome name='bell' size={27} color={color} />
            }}
          />
      </Tab.Navigator>
  );
};

export default TabNavigation