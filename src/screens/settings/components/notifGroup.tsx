import Group from "../../../components/settings/group"
import theme from "../../../styles/theme"
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const NotifGroup = () => {
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
                />
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
                />
        },
    ]

    return (
        <Group 
            options={options}
        />
    )
}
export default NotifGroup