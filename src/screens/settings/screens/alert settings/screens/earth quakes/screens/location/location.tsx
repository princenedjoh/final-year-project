import { NavigationProp } from "@react-navigation/native"
import { useEffect, useState } from "react"
import LabeledInput from "../../../../../../components/labeledInput"
import SaveSettings from "../../../../../../components/rightHeaderScreen"
import { retrieveEarthquakeLocationSettings } from "../../../../../../../../context/settingsStorage"
import { updateEarthquakeLocation } from "../../../../../../../../api/apis/settings"
import { useToast } from "react-native-toast-notifications"
import { getAndStoreSettings } from "../../../../../../../../utils/onStartup"

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
    const toast = useToast()
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
        latitude,
        savedLatitude,
        savedLongitude
    ])

    const setValues = () => {
        if(longitude !== savedLongitude)
            setSavedLongitude(longitude)
        if(latitude !== savedLatitude)
            setSavedLatitude(latitude)
    }

    const handleSave = async () => {
        const {response, error} = await updateEarthquakeLocation(`${longitude},${latitude}`)
        if(response){
            await getAndStoreSettings()
            setValues()
            toast.show('Settings Saved successful!', {
                type : 'success',
                placement : 'bottom'
            })
        }
        if(error)
            toast.show('Error saving settings', {
                type : 'danger',
                placement : 'bottom'
            })
    }

    const getLocation = async () => {
        const location = await retrieveEarthquakeLocationSettings()
        const locationSplit = location.value.split(',')
        setLongitude(locationSplit[0])
        setLatitude(locationSplit[1])
        setSavedLongitude(locationSplit[0])
        setSavedLatitude(locationSplit[1])
    }

    useEffect(()=>{
        getLocation()
    },[])

    return (
        <SaveSettings
            navigation={navigation}
            unsavedChanges={unsavedChanges}
            onSave={handleSave}
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