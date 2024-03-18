import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home';
const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}

export default BottomNav