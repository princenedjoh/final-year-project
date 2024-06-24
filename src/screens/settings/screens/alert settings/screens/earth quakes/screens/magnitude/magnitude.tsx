import { NavigationProp } from "@react-navigation/native"
import { useEffect, useState } from "react"
import SaveSettings from "../../../../../../components/rightHeaderScreen"
import Input from "../../../../../../../../components/input/input"

const MagnitudeSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [unsavedChanges, setUnsavedChanges] = useState(false)
    const [magnitude, setMagnitude] = useState('5.4')
    const [savedMagnitude, setSavedMagnitude] = useState('5.4')
    useEffect(()=>{
        if(
            magnitude !== savedMagnitude
        ){
            setUnsavedChanges(true)
        } else {
            setUnsavedChanges(false)
        }
    },[
        magnitude,
        savedMagnitude
    ])

    const setValues = () => {
        magnitude !== savedMagnitude
        ? setSavedMagnitude(magnitude)
        : null
    }

    return (
        <SaveSettings
            navigation={navigation}
            unsavedChanges={unsavedChanges}
            onSave={setValues}
            title="Magnitude"
        >
            <Input
                value={magnitude}
                setValue={setMagnitude}
                rounded={10}
            />
        </SaveSettings>
    )
}
export default MagnitudeSettings