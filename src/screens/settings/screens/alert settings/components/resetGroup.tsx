import { useState } from "react";
import Group from "../../../../../components/settings/group";
import SwitchButton from "../../../../../components/switch/switch";
import theme from "../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetGroup = () => {

    const [alertsEnabled, setAlertsEnabled] = useState(false)

    const options = [
        {
            title : "Reset alert settings",
            icon : <MaterialCommunityIcons
                color={theme.colors.main.text.light}
                name="lock-reset"
                size={18}
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
export default ResetGroup