import Group from "../../../components/settings/group"
import theme from "../../../styles/theme"
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { NavigationProp } from "@react-navigation/native";
import { screenNames } from "../../../constants/screennames";

const NotifGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const options = [
        {
            title : "Alerts",
            icon : <Ionicons
                name="alert-circle"
                size={18}
                color={theme.colors.dark[4]}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.alertSettings)
        },
        {
            title : "Notification",
            icon : <Ionicons
                name="notifications"
                size={18}
                color={theme.colors.dark[4]}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.notificationSettings)
        },
    ]

    return (
        <Group 
            options={options}
        />
    )
}
export default NotifGroup