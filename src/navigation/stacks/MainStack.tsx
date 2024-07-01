import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "../tabNavigation";
import { subScreens } from "../../constants/screens";
import OnBoarding from "../../screens/onboarding/onboarding";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Profile from "../../components/header/components/profile";
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          // headerTransparent : true,
          // headerBlurEffect : 'regular',
          // headerLargeTitle : true,
          // headerLargeTitleStyle : {
          //   fontSize : 22
          // },
          // headerSearchBarOptions : {
          //   hideWhenScrolling : false
          // },
          // presentation : 'card'
          // headerRight : (e)=> <Profile />
          headerShown : false
        }}>
          <Stack.Screen name={"Tabs"} component={TabNavigation} />
          <Stack.Screen name="onBoarding" component={OnBoarding} />
          {
            subScreens.map((item, index : number) => {
              return (
                <Stack.Screen 
                  name={item.name} 
                  component={item.component}
                  key={index}
                />
              )
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default MainStack;
