import Header from "../../components/header/header"
import Safescroll from "../../components/safescroll"
import Searchbar from "../../components/searchbar"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import SmallArticles from "./components/smallArticles"
import BigArticles from "./components/bigArticles"
import Suggestions from "./components/suggestions"

const Article = () => {
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
                        <BigArticles />
                    </Flex>
                    <SmallArticles />
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Article