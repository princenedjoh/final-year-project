import { useState } from "react";
import Group from "../../../components/settings/group";
import SwitchButton from "../../../components/switch/switch";
import theme from "../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Confirmation from "../../../components/modal/confirmation";

const ResetGroup = ({
    title,
    onPress
} : {
    title? : string
    onPress? : ()=>void
}) => {

    const [alertsEnabled, setAlertsEnabled] = useState(false)
    const [confirmationVisibility, setConfirmationVisibility] = useState(false)

    const options = [
        {
            title : title ?? "Reset alert settings",
            icon : <MaterialCommunityIcons
                color={theme.colors.main.text.light}
                name="lock-reset"
                size={18}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
            />,
            onPress : ()=>setConfirmationVisibility(true)
        },
    ]

    return (
        <>
            <Group 
                options={options}
            />
            <Confirmation 
                isVisible={confirmationVisibility}
                setIsVisible={setConfirmationVisibility}
                onConfirm={onPress}
                description="Are you sure you want to reset this settings"
            />
        </>
    )
}
export default ResetGroup