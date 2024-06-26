import { NavigationProp } from "@react-navigation/native"
import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import NotifSection from "./components/notifSection"

const Notification = ({
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
                        title="Notfication"
                        navigation={navigation}
                    />
                </Flex>
                <NotifSection />
            </Flex>
        </Safescroll>
    )
}

export default Notification