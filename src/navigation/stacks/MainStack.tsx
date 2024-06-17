import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "../tabNavigation";
import { subScreens } from "../../constants/screens";
import OnBoarding from "../../screens/onboarding/onboarding";
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={"tabs"} component={TabNavigation} />
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
  );
};

export default MainStack;