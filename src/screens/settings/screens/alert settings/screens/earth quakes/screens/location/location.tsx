import { NavigationProp } from "@react-navigation/native"
import Safescroll from "../../../../../../../../components/safescroll"
import Flex from "../../../../../../../../styles/components/flex"
import { sizes } from "../../../../../../../../utils/sizes"
import Header from "../../../../../../../../components/header/header"
import ResetGroup from "../../../../../../components/resetGroup"
import Input from "../../../../../../../../components/input/input"
import { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"
import AppTypography from "../../../../../../../../styles/components/appTypography"
import theme from "../../../../../../../../styles/theme"
import { TypographyBold, TypographySize } from "../../../../../../../../styles/components/types"
import OverlayActivityIndicator from "../../../../../../../../components/overlayActivityIndicator/overlayActivityIndicator"
import LabeledInput from "../../../../../../components/labeledInput"
import SaveSettings from "../../../../../../components/rightHeaderScreen"

const LocationSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [unsavedChanges, setUnsavedChanges] = useState(false)
    const [savedLongitude, setSavedLongitude] = useState('5.4')
    const [longitude, setLongitude] = useState('5.4')
    const [savedLatitude, setSavedLatitude] = useState('5.4')
    const [latitude, setLatitude] = useState('5.4')
    useEffect(()=>{
        if(
            longitude !== savedLongitude
            || latitude !== savedLatitude
        ){
            setUnsavedChanges(true)
        } else {
            setUnsavedChanges(false)
        }
    },[
        longitude,
        savedLongitude,
        latitude,
        savedLatitude,
    ])

    const setValues = () => {
        longitude !== savedLongitude
        ? setSavedLongitude(longitude)
        : latitude !== savedLatitude
        ? setSavedLatitude(latitude)
        : null
    }

    return (
        <SaveSettings
            navigation={navigation}
            unsavedChanges={unsavedChanges}
            onSave={setValues}
            title="Location"
        >
            <LabeledInput 
                label="Longitude"
                value={longitude}
                setValue={setLongitude}
            />
            <LabeledInput 
                label="Latitude"
                value={latitude}
                setValue={setLatitude}
            />
        </SaveSettings>
    )
}
export default LocationSettings