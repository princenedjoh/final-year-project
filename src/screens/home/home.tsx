import { SafeAreaView, ScrollView } from "react-native"
import Flex from "../../styles/components/flex"
import Header from "../../components/header/header"
import { sizes } from "../../utils/sizes"
import Searchbar from "../../components/searchbar"
import Satellites from "./components/satellites/satellites"
import AppTypography from "../../styles/components/appTypography"
import AlertSection from "./components/alert/alert"
import ArticleFeature from "./components/articles/bigArticles"
import Hr from "../../styles/components/hr"
import SmallArticles from "./components/articles/smallArticles"
import Safescroll from "../../components/safescroll"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import axios from "axios"
import BigArticles from "../article/components/bigArticles"

const Home = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const navigate = useNavigation()
    
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
                    navigation={navigation}
                />
                <Searchbar/>
            </Flex>
            <Flex
                direction="column"
            >
                <Satellites navigation={navigation}/>
                <ArticleFeature navigation={navigation}/>
                <AlertSection navigation={navigation}/>
            </Flex>
        </Safescroll>
    )
}

export default Home