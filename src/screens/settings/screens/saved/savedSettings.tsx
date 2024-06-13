import { NavigationProp } from "@react-navigation/native"
import { useState } from "react"
import Safescroll from "../../../../components/safescroll"
import Flex from "../../../../styles/components/flex"
import Header from "../../../../components/header/header"
import { sizes } from "../../../../utils/sizes"
import ReceiveGroup from "../../components/receiveGroup"
import ResetGroup from "../../components/resetGroup"
import { screenNames } from "../../../../constants/screennames"
import CategoryGroup from "./components/categoryGroup"

const SavedSettings = ({
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
                        title={screenNames.savedSettings}
                    />
                    <ReceiveGroup
                        enabled={recieveQuakeAlerts}
                        setEnabled={setReceiveQuakeAlerts}
                        title="Receive WaterQuality alerts"
                    />
                    <CategoryGroup navigation={navigation}/>
                    <ResetGroup
                        title="Reset Saved Settings" 
                    />
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default SavedSettings