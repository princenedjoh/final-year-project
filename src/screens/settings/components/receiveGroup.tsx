import { useState } from "react";
import Group from "../../../components/settings/group";
import SwitchButton from "../../../components/switch/switch";

const ReceiveGroup = ({
    enabled,
    setEnabled,
    title
} : {
    enabled : boolean
    setEnabled : React.Dispatch<React.SetStateAction<boolean>>,
    title? : string
}) => {

    const options = [
        {
            title : title ?? "Receive Alerts",
            right : <SwitchButton 
                isEnabled={enabled}
                setIsEnabled={setEnabled}
            />
        },
    ]

    return (
        <Group 
            options={options}
        />
    )
}
export default ReceiveGroup