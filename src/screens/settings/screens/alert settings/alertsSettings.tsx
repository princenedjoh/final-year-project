import Safescroll from "../../../../components/safescroll"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import { NavigationProp } from "@react-navigation/native"
import Searchbar from "../../../../components/searchbar"
import ReceiveGroup from "./components/receiveGroup"
import Header from "../../../../components/header/header"
import NaturalDisasterGroup from "./components/naturalGroup"
import EnvironmentalGroup from "./components/environmentaGroup"
import ResetGroup from "../../components/resetGroup"

const AlertSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={12}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    marginTop={10}
                    gap={10}
                >
                    <Header
                        navigation={navigation}
                        title="Alerts"
                    />
                    <ReceiveGroup />
                    <NaturalDisasterGroup navigation={navigation}/>
                    <EnvironmentalGroup navigation={navigation}/>
                    <ResetGroup />
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default AlertSettings