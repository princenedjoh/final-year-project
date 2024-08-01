import React, { Fragment, useEffect, useState } from "react"
import Flex from "../../../../styles/components/flex"
import { hexOpacity } from "../../../../utils/hexOpacity"
import DetailContainer from './detailContainer';
import Divider from '../../../../components/divider/divider';
import theme from "../../../../styles/theme";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { alertDataTypes } from "../../../../utils/types";
import getDate, { getTime } from "../../../../utils/getDate";
import AppTypography from "../../../../styles/components/appTypography";
import { TypographyBold } from "../../../../styles/components/types";

const MainDetails = ({
    alertData
} : {
    alertData : alertDataTypes
}) => {
    const [details, setDetails] = useState<any>([])

    const setAlertData = () => {
        const details = []
        const no = JSON.parse(alertData.data).components.no
        const time = alertData.date
        const co = JSON.parse(alertData.data).components.co

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
        if(co !== undefined)
            details.push({
                title : `${co}`,
                description : 'Carbon mono-oxide',
                icon : <AppTypography
                    bold={TypographyBold.md2}
                    textColor='white'
                >
                    CO
                </AppTypography>,
                color : "#936D6D"
            })
        if(no !== undefined) {
            details.push({
                title : `${no}`,
                description : 'Nitric oxide',
                icon : <AppTypography
                    bold={TypographyBold.md2}
                    textColor='white'
                >
                    NO
                </AppTypography>,
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
export default MainDetails