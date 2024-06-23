import { NavigationProp, useNavigation } from "@react-navigation/native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import Drawer from "../../../components/drawer/drawer"
import Map from "../components/map"
import TopControls from "../components/topControls"
import { screenNames } from "../../../constants/screennames"
import Top from "./components/top"
import Details from "./components/details"

const AirQuality = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const navigate = useNavigation()
    
    return (
        <>
            <Map />
            <TopControls 
                navigation={navigation}
                menuOnpress={()=>navigation.navigate(screenNames.airQualitySettings)}
            />
            <Drawer 
                props={{
                    index : 1,
                    snapPoints : ['20%', '60%', '80'],
                }}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    paddingVertical={sizes.marginSM}
                    gap={10}
                >
                   <Top />
                   <Details />
                </Flex>
            </Drawer>
        </>
    )
}

export default AirQuality