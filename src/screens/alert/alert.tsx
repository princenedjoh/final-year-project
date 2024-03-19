import { useState } from "react"
import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import Chips from "./components/chips"
import AlertsSection from "./components/alertsSection"

const Alert = () => {
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
                    />
                    <Searchbar/>
                </Flex>
                <Chips />
                <AlertsSection />
            </Flex>
        </Safescroll>
    )
}

export default Alert