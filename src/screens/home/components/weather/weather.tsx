import { NavigationProp } from "@react-navigation/native"
import Flex from "../../../../styles/components/flex"
import { View } from "react-native"
import { sizes } from "../../../../utils/sizes"
import theme from "../../../../styles/theme"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import SmallWeatherCard from "./components/smallCard"
import MidWeatherCard from "./components/midWeatherCard"

const Weather = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            justify="space-between"
            gap={8}
        >
            <SmallWeatherCard navigation={navigation}/>
            <MidWeatherCard navigation={navigation}/>
        </Flex>
    )
}
export default Weather