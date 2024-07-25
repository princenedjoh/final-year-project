import { NavigationProp } from "@react-navigation/native"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import SmallWeatherCard from "./components/smallCard"
import MidWeatherCard from "./components/midWeatherCard"

const Weather = ({
    navigation,
    refreshing
} : {
    navigation : NavigationProp<any>
    refreshing? : boolean
}) => {

    //cannot use weather api because of request limits

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