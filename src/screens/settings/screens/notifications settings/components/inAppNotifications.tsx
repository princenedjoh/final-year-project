import { useState } from "react";
import Group from "../../../../../components/settings/group";
import SwitchButton from "../../../../../components/switch/switch";
import AntIcon from 'react-native-vector-icons/AntDesign';
import theme from "../../../../../styles/theme";

const InAppNotifications = () => {

    const [showNotifications, setShowNotifications] = useState(true)

    const options = [
        {
            title : "In-App Notifications",
            right : <SwitchButton 
                isEnabled={showNotifications}
                setIsEnabled={setShowNotifications}
            />
        },
    ]

    return (
        <Group 
            options={options}
        />
    )
}
export default InAppNotifications