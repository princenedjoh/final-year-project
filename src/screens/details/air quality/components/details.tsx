import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme";
import DetailContainer from "./detailContainer"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from "../../../../components/divider/divider";
import { Fragment, useEffect, useState } from "react";
import { hexOpacity } from "../../../../utils/hexOpacity";
import TabMenu from "../../../../components/menu/tabMenu";
import { View } from "react-native";
import AppTypography from "../../../../styles/components/appTypography";
import { sizes } from "../../../../utils/sizes";
import { TypographyBold, TypographySize } from "../../../../styles/components/types";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconContainer from "../../components/iconContainer";
import PredictionTab from './predictionTab'
import MainDetails from './mainDetails'
import Aqi from './aqi'
import { alertDataTypes } from "../../../../utils/types";

const Details = ({
    alertData
} : {
    alertData : alertDataTypes
}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [aqi, setAqi] = useState()
    const [menuItems, setMenuItems] = useState([
        {
            name : '28th March',
            active : true,
        },
        {
            name : '31st March',
            active : false,
        },
    ])

    const setProperties = () => {
        setAqi(JSON.parse(alertData.data).main.aqi)
    }

    useEffect(()=>{
        setProperties()
    })

    return (
        <Flex
            direction="column"
            gap={10}
        >
            <PredictionTab />
            <TabMenu 
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                menuItems={menuItems}
                setMenuItems={setMenuItems}
            />
            {
                aqi &&
                <Aqi aqi={aqi}/>
            }
            <MainDetails alertData={alertData}/>
        </Flex>
    )
}
export default Details