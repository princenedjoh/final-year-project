import { NavigationProp, useNavigation } from "@react-navigation/native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import Drawer from "../../../components/drawer/drawer"
import Map from "../components/map"
import TopControls from "../components/topControls"
import { screenNames } from "../../../constants/screennames"
import Top from "./components/top"
import Details from "./components/details"
import { useEffect, useState } from "react"
import { protectedAPI } from "../../../api/api"
import { Marker } from "react-native-maps"
import NoAlerts from "../../alert/components/noAlerts"
import DetailsSkeleton from "../earthquake/components/deailsSkeleton"
import Skeleton from "../../../components/skeleton/skeleton"

const FloodDetails = ({
    navigation,
    route,
} : {
    navigation : NavigationProp<any>
    route? : any
}) => {
    console.log('hello floods')
    const navigate = useNavigation()
    const [alerts, setAlerts] = useState<'loading' | null | any>('loading')
    let [alertData, setAlertData] = useState<any>()
    let [place, setPlace] = useState<string>()
    let [coordinates, setCoordinates] = useState<string>()
    let [latitude, setLatitude] = useState<number>(0)
    let [longitude, setLongitude] = useState<number>(0)

    const getAlerts = async () => {
        setAlerts('loading')
        const {response : alerts, error : alertsError} = await protectedAPI.get('/alert/get/', {
            id : route.params.id
        })
        console.log({alerts})
        if(alerts)
            return setAllAlertsData(alerts[0])
        if(alertsError)
            return setAlerts(null)
        setAlerts(null)
    }

    const setAllAlertsData = (alerts : any) => {
        setAlertData({
            title : alerts.title,
            category : alerts.category,
            data : alerts.data,
            date : alerts.date,
            description : alerts.description,
            id : alerts.id,
            read : alerts.read,
            severity : alerts.severity,
            user : alerts.user,
            image : alerts.image
        })
        setPlace(JSON.parse(alerts?.data).place)
        setCoordinates(JSON.parse(alerts?.data).coordinates)
        setLongitude(JSON.parse(alerts?.data).coordinates[0])
        setLatitude(JSON.parse(alerts?.data).coordinates[1])
        setAlerts(alerts)
    }

    useEffect(()=>{
        getAlerts()
    },[])

    const markers = [
        <Marker
            coordinate={{
                latitude,
                longitude,
            }}
            title={place}
        />
    ]
    
    return (
        <>
            {
                alerts !== 'loading' && alerts !== null && alertData ?
                <Map 
                    alertData={alertData}
                    markers={markers}
                />
                : alerts === 'loading' ?
                <></>
                :
                <NoAlerts />
            }
            <TopControls 
                navigation={navigation}
                menuOnpress={()=>navigation.navigate(screenNames.floodSettings)}
            />
            <Drawer 
                props={{
                    index : 0,
                    snapPoints : ['33%'],
                }}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    paddingVertical={sizes.marginSM}
                    gap={10}
                >
                   {
                        alerts !== 'loading' && alerts !== null && alertData ?
                        <Top alertData={alertData}/>
                        : alerts === 'loading' ?
                        <>
                            <Skeleton style={{height:20}}/>
                            <Skeleton style={{height:20}}/>
                        </>
                        :
                        <NoAlerts />
                    }
                   {
                        alerts !== 'loading' && alerts !== null && alertData ?
                        <Details alertData={alertData}/>
                        : alerts === 'loading' ?
                        <DetailsSkeleton />
                        :
                        <NoAlerts />
                    }
                </Flex>
            </Drawer>
        </>
    )
}

export default FloodDetails