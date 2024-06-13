import { NavigationProp } from "@react-navigation/native"
import { useState } from "react"
import Safescroll from "../../../../components/safescroll"
import Flex from "../../../../styles/components/flex"
import Header from "../../../../components/header/header"
import { sizes } from "../../../../utils/sizes"
import ReceiveGroup from "../../components/receiveGroup"
import ResetGroup from "../../components/resetGroup"
import { screenNames } from "../../../../constants/screennames"

const AccountSettings = ({
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
                        title={screenNames.accountSettings}
                    />
                    <ResetGroup
                        title="Reset Account settings" 
                    />
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default AccountSettings