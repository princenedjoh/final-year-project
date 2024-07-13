import { useContext, useEffect, useState } from "react"
import AppTypography, { Title } from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import AlertCard from "./alertCard"
import Hr from "../../../styles/components/hr"
import theme from "../../../styles/theme"
import { NavigationProp } from "@react-navigation/native"
import { protectedAPI } from "../../../api/api"
import { AuthContext } from "../../../context/authcontext"
import SmallCardSkeleton from "../../../components/article card/smallCardSkeleton"

const AlertsSection = ({
    navigation,
    refreshing
} : {
    navigation : NavigationProp<any>,
    refreshing? : boolean
}) => {
    const {isLoggedIn} = useContext(AuthContext)
    const [alerts, setAlerts] = useState<'loading' | null | any[]>('loading')
    
    const getAlerts = async () => {
        setAlerts('loading')
        const {response : alerts, error : alertsError} = await protectedAPI.get('/alert/get/')
        if(alerts)
            return setAlerts(alerts)
        if(alertsError)
            setAlerts(null)
        setAlerts(null)
    }

    useEffect(()=>{
        if(isLoggedIn)
            getAlerts()
    }, [isLoggedIn])

    useEffect(()=>{
        if(refreshing){
            setAlerts(refreshing ? 'loading' : "loading")
            getAlerts()
        }
    }, [refreshing])

    return (
        <>
            <Flex
                direction="column"
                paddingHorizontal={sizes.marginSM}
                gap={10}
            >
                {/* <Title textColor={theme.colors.main.primary}>
                    Today
                </Title> */}
                {
                    alerts !== 'loading' && alerts !== null &&
                    alerts.map((item : any, index : number) => {
                        return (
                            <Flex 
                                key={index}
                                direction="column"
                                gap={10}
                            >
                                <AlertCard 
                                    key={index}
                                    navigation={navigation}
                                    data={{
                                        title : item.title,
                                        category : item.category,
                                        data : item.data,
                                        date : item.date,
                                        description : item.description,
                                        id : item.id,
                                        read : item.read,
                                        severity : item.severity,
                                        user : item.user,
                                        image : item.image
                                    }}
                                />
                                {
                                    index < alerts.length - 1 &&
                                    <Hr
                                        marginLeft={85}
                                    />
                                }
                            </Flex>
                        )
                    })
                }
            </Flex>
            {
                alerts === 'loading' &&
                [1,2,3,4,5,6].map((item, index : number) => (
                    <SmallCardSkeleton key={index}/>
                ))
            }
        </>
    )
}

export default AlertsSection