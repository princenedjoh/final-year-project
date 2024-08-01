import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import { NavigationProp } from "@react-navigation/native"
import Profile from "./components/profile"
import NotifGroup from "./components/notifGroup"
import AccGroup from "./components/accGroup"
import Logout from "./components/logout"
import { useContext } from "react"
import { AuthContext } from "../../context/authcontext"
import ReportGroup from "./components/reportGroup"

const Settings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const { isLoggedIn } = useContext(AuthContext)
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
                        navigation={navigation}
                        title="Settings"
                    />
                    <Searchbar/>
                </Flex>
                <Flex
                    direction="column"
                    gap={8}
                    paddingHorizontal={sizes.marginSM}
                >
                    <Profile navigation={navigation}/>
                    {
                        isLoggedIn &&
                        <>
                            <NotifGroup navigation={navigation}/>
                            <AccGroup navigation={navigation}/>
                            <ReportGroup navigation={navigation}/>
                            <Logout />
                        </>
                    }
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Settings