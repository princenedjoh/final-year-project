import { useState } from "react";
import Group from "../../../../../components/settings/group";
import SwitchButton from "../../../../../components/switch/switch";

const ReceiveGroup = () => {

    const [alertsEnabled, setAlertsEnabled] = useState(true)

    const options = [
        {
            title : "Receive Alerts",
            right : <SwitchButton 
                isEnabled={alertsEnabled}
                setIsEnabled={setAlertsEnabled}
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