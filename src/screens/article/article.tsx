import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import SmallArticles from "./components/smallArticles"
import BigArticles from "./components/bigArticles"
import Suggestions from "./components/suggestions"
import { NavigationProp } from "@react-navigation/native"

const Article = ({
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
                        navigation={navigation}
                        title="Articles"
                        displayProfile
                    />
                    <Searchbar/>
                </Flex>
                <Flex
                    direction="column"
                    gap={0}
                >
                    <Suggestions />
                    <Flex marginTop={-3}>
                        <BigArticles 
                            navigation={navigation}
                        />
                    </Flex>
                    <SmallArticles 
                        navigation={navigation}
                    />
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Article