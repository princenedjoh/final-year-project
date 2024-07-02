import Flex from "../../styles/components/flex"
import Header from "../../components/header/header"
import { sizes } from "../../utils/sizes"
import Searchbar from "../../components/searchbar"
import Satellites from "./components/satellites/satellites"
import AlertSection from "./components/alert/alert"
import ArticleFeature from "./components/articles/bigArticles"
import Safescroll from "../../components/safescroll"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import Divider from "../../components/divider/divider"
import theme from "../../styles/theme"
import { useContext, useEffect } from "react"
import { onStartup } from "../../utils/onStartup"
import { AuthContext } from "../../context/authcontext"
import Weather from "./components/weather/weather"

const Home = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const {isLoggedIn} = useContext(AuthContext)
    const navigate = useNavigation()
    const HomeDivider = <Divider 
        size={{
            height : 5
        }}
        color={theme.colors.dark[11]}
    />

    useEffect(()=>{
        if(isLoggedIn)
            onStartup()
      }, [isLoggedIn])
    
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
                gap={20}
            >
                <Satellites navigation={navigation}/>
                {HomeDivider}
                <Weather navigation={navigation}/>
                {HomeDivider}
                <ArticleFeature navigation={navigation}/>
                {HomeDivider}
                <AlertSection navigation={navigation}/>
            </Flex>
        </Safescroll>
    )
}

export default Home