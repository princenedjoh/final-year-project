import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme";
import DetailContainer from "./detailContainer"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from "../../../../components/divider/divider";
import { Fragment, useEffect, useState } from "react";
import { hexOpacity } from "../../../../utils/hexOpacity";
import { alertDataTypes } from "../../../../utils/types";
import getDate, { getRelativeTime, getTime } from "../../../../utils/getDate";

const Details = ({
    alertData
} : {
    alertData : alertDataTypes
}) => {
    const [details, setDetails] = useState<any>([])

    const setAlertData = () => {
        const details = []
        const magnitude = JSON.parse(alertData.data).mag
        const time = JSON.parse(alertData.data).mag
        const sig = JSON.parse(alertData.data).mag
        const depth = JSON.parse(alertData.data).depth

        if(magnitude)
            if(time)
                details.push({
                    title : getDate(new Date(time), {shortmonth : true}),
                    description : `${getTime(new Date(time))} UTC`,
                    icon : <MaterialIcons
                        name="date-range"
                        color={'white'}
                        size={20}
                    />,
                    color : "#919191"
                })
            details.push({
                title : `${magnitude} ml`,
                description : 'Magnitude',
                icon : <Ionicons
                    name="pulse-sharp"
                    color={'white'}
                    size={20}
                />,
                color : "#936D6D"
            })
        if(depth){
            details.push({
                title : `${depth} km`,
                description : 'Depth',
                icon : <MaterialCommunityIcons
                    name="signal-distance-variant"
                    color={'white'}
                    size={20}
                />,
                color : "#6D8793"
            })
        } else if(sig) {
            details.push({
                title : `${sig} km`,
                description : 'Sig',
                icon : <MaterialCommunityIcons
                    name="signal-distance-variant"
                    color={'white'}
                    size={20}
                />,
                color : "#6D8793"
            })
        }

        setDetails(details)
    }

    useEffect(()=>{
        setAlertData()
    },[])

    return (
        <Flex
            justify="space-between"
            align="center"
            gap={10}
            background={`#000000${hexOpacity(8)}`}
            paddingHorizontal={20}
            paddingVertical={20}
            rounded={10}
        >
            {
                details.map((item : any, index : number) => (
                    <Fragment
                        key={index}
                    >
                        <DetailContainer
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            color={item.color}
                        />
                        {
                            index < details.length - 1 &&
                            <Divider 
                                size={{
                                    height : 50,
                                    width : 1
                                }}
                                color={theme.colors.dark[8]}
                            />
                        }
                    </Fragment>
                ))
            }
        </Flex>
    )
}
export default Details