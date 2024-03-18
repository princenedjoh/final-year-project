import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../constants/screens';
import Home from '../screens/home/home';
import Article from '../screens/article/article';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={screens.home} component={Home} /> */}
        <Stack.Screen name={screens.article} component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation