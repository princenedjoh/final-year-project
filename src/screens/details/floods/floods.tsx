import { NavigationProp, useNavigation } from "@react-navigation/native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import Drawer from "../../../components/drawer/drawer"
import Map from "../components/map"
import TopControls from "../components/topControls"
import { screenNames } from "../../../constants/screennames"
import Top from "./components/top"
import Details from "./components/details"

const FloodDetails = ({
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
                   <Top />
                   <Details />
                </Flex>
            </Drawer>
        </>
    )
}

export default FloodDetails