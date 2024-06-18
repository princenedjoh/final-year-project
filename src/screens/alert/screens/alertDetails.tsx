import Header from "../../../components/header/header"
import Safescroll from "../../../components/safescroll"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { NavigationProp } from "@react-navigation/native"
import Info from "./components/info"
import Content from "./components/content"
import RelatedAlerts from "./components/relatedAlerts"
import AlertsSection from "../components/alertsSection"
import AlertCard from "../components/alertCard"
import { View } from "react-native"
import Drawer from "../../../components/drawer/drawer"

const AlertDetails = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <>
            <Safescroll>
                <Flex
                    direction="column"
                    gap={12}
                >
                    <Flex
                        direction="column"
                        paddingHorizontal={sizes.marginSM}
                        marginTop={10}
                        gap={4}
                    >
                        <Header
                            navigation={navigation}
                            title="Alert Detail"
                        />
                    </Flex>
                    <Flex
                        direction="column"
                        gap={8}
                    >
                        <Info />
                        <Content />
                        <Flex
                            marginTop={20}
                        >
                            <RelatedAlerts navigation={navigation}/>
                        </Flex>
                    </Flex>
                </Flex>
            </Safescroll>
            <Drawer />
        </>
    )
}

export default AlertDetails
