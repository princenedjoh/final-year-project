import Safescroll from "../../../../components/safescroll"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import { NavigationProp } from "@react-navigation/native"
import Header from "../../../../components/header/header"
import ShowNotifications from "./components/showNotifications"
import AlertNotifications from "./components/alertGroup"
import InAppNotifications from "./components/inAppNotifications"
import ResetGroup from "./components/resetGroup"

const NotificationSettings = ({
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
                        title="Notifications"
                    />
                    <ShowNotifications />
                    <AlertNotifications />
                    <InAppNotifications />
                    <ResetGroup />
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default NotificationSettings