import { NavigationProp } from "@react-navigation/native"
import { useState } from "react"
import RightHeaderScreen from "../../../../components/rightHeaderScreen"

const SavedArticlesSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [unsavedChanges, setUnsavedChanges] = useState(false)

    return (
        <RightHeaderScreen
            title={'Saved Articles'}
            unsavedChanges={unsavedChanges}
            navigation={navigation}
            command="Clear all"
        />
    )
}
export default SavedArticlesSettings