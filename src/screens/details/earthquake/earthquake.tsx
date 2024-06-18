import { NavigationProp, useNavigation } from "@react-navigation/native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import Drawer from "../../../components/drawer/drawer"
import Top from "./components/top"
import Details from "./components/details"
import MoreDetails from "./components/moreDetail"
import Map from "./components/map"
import TopControls from "./components/topControls"


const EarthquakeDetails = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const navigate = useNavigation()
    
    return (
        <>
            <Map />
            <TopControls navigation={navigation}/>
            <Drawer 
                props={{index : 1}}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    paddingVertical={sizes.marginSM}
                    gap={10}
                >
                    <Top />
                    <Details />
                    <MoreDetails />
                </Flex>
            </Drawer>
        </>
    )
}

export default EarthquakeDetails