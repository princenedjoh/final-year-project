import { useState } from "react"
import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import Chips from "./components/chips"
import AlertsSection from "./components/alertsSection"
import { NavigationProp } from "@react-navigation/native"

const Alert = ({
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
                    gap={4}
                >
                    <Header
                        title="Alerts"
                        displayProfile
                        navigation={navigation}
                    />
                    <Searchbar/>
                </Flex>
                <Chips />
                <AlertsSection 
                    navigation={navigation}
                />
            </Flex>
        </Safescroll>
    )
}

export default Alert