import AppTypography, { Title } from "../../../../styles/components/appTypography";
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes";
import theme from "../../../../styles/theme";
import { ScrollView, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import AlertContainer from "./alertContainer";
import { screenNames } from "../../../../constants/screennames";
import AlertCard from "../../../alert/components/alertCard";
import Hr from "../../../../styles/components/hr";
import { AuthContext } from "../../../../context/authcontext";
import { protectedAPI } from "../../../../api/api";
import SmallCardSkeleton from "../../../../components/article card/smallCardSkeleton";

const AlertSection = ({
    navigation
} : {
    navigation : NavigationProp<any>
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
    return (
        <Flex
            direction="column"
            gap={6}
        >
            <Flex
                paddingHorizontal={sizes.marginSM}
                align="center"
            >
                <Title>
                    Alerts
                </Title>
            </Flex>
            <Flex
                direction="column"
                paddingHorizontal={sizes.marginSM}
                gap={8}
            >
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
                                        user : item.user
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
            <Flex
                paddingHorizontal={sizes.marginSM}
            >
                <TouchableOpacity
                    onPress={()=>navigation.navigate(screenNames.alert)}
                >
                    <AppTypography
                        textColor={theme.colors.blue.blue3}
                    >
                        See more...
                    </AppTypography>
                </TouchableOpacity>
            </Flex>
        </Flex>
    )
}

export default AlertSection