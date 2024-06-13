import { NavigationProp } from "@react-navigation/native"
import Safescroll from "../../../../../../components/safescroll"
import Flex from "../../../../../../styles/components/flex"
import { sizes } from "../../../../../../utils/sizes"
import Header from "../../../../../../components/header/header"
import ResetGroup from "../../../../components/resetGroup"
import PropertiesGroup from "./components/propertiesGroup"
import { useState } from "react"
import ReceiveGroup from "../../../../components/receiveGroup"

const EarthQuakeSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [recieveQuakeAlerts, setReceiveQuakeAlerts] = useState(true)

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
                        title="Earth Quakes"
                    />
                    <ReceiveGroup 
                        enabled={recieveQuakeAlerts}
                        setEnabled={setReceiveQuakeAlerts}
                        title="Receive earthquake alerts"
                    />
                    <PropertiesGroup navigation={navigation}/>
                    <ResetGroup 
                        title="Reset earthquake settings" 
                    />
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default EarthQuakeSettings