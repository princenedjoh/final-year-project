import { SafeAreaView, ScrollView } from "react-native"
import Flex from "../../styles/components/flex"
import Header from "../../components/header/header"
import { sizes } from "../../utils/sizes"
import Searchbar from "../../components/searchbar"
import Satellites from "./components/satellites"
import AppTypography from "../../styles/components/appTypography"
import AlertSection from "./components/alert/alert"
import ArticleFeature from "./components/bigArticles"
import Hr from "../../styles/components/hr"
import SmallArticles from "./components/smallArticles"
import Safescroll from "../../components/safescroll"

const Home = () => {
    return (
        <Safescroll>
            <Flex
                direction="column"
                paddingHorizontal={sizes.marginSM}
                marginTop={10}
                gap={4}
            >
                <Header 
                    title="Home"
                    message="Hey there, Welcome back 👋"
                    displayProfile
                />
                <Searchbar/>
            </Flex>
            <Flex
                direction="column"
            >
                <Satellites />
                <AlertSection />
                <ArticleFeature />
                <Flex
                    paddingHorizontal={sizes.marginSM}
                >
                    <Hr />
                </Flex>
                <SmallArticles />
            </Flex>
        </Safescroll>
    )
}

export default Home