import { NavigationProp } from "@react-navigation/native"
import { useState } from "react"
import RightHeaderScreen from "../../../../components/rightHeaderScreen"

const SavedAlertSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [unsavedChanges, setUnsavedChanges] = useState(false)

    return (
        <RightHeaderScreen 
            title={'Saved Alerts'}
            unsavedChanges={unsavedChanges}
            navigation={navigation}
            command="Clear all"
        />
    )
}
export default SavedAlertSettings