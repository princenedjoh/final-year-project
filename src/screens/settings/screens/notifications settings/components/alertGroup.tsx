import { useState } from "react";
import Group from "../../../../../components/settings/group";
import SwitchButton from "../../../../../components/switch/switch";
import AntIcon from 'react-native-vector-icons/AntDesign';
import theme from "../../../../../styles/theme";

const AlertNotifications = () => {

    const [showNotifications, setShowNotifications] = useState(true)

    const options = [
        {
            title : "Show Notifications",
            right : <SwitchButton 
                isEnabled={showNotifications}
                setIsEnabled={setShowNotifications}
            />
        },
        {
            title : "Sound",
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
            title="Alert Notifications"
        />
    )
}
export default AlertNotifications