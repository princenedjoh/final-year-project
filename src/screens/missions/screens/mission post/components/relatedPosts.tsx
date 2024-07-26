import { ScrollView } from "react-native"
import { Title } from "../../../../../styles/components/appTypography"
import Flex from "../../../../../styles/components/flex"
import { sizes } from "../../../../../utils/sizes"
import RelatedContainer from "./relatedContainer"
import { NavigationProp } from "@react-navigation/native"
import shuffleArray from "../../../../../utils/shuffleArray"
import { posts } from "../../../components/posts"

const RelatedPosts = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Flex
            direction="column"
        >
            <Flex
                marginLeft={sizes.marginSM}
            >
                <Title>
                    Related
                </Title>
            </Flex>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Flex
                    gap={20}
                    marginLeft={sizes.marginSM}
                >
                    {
                        shuffleArray(posts).map((item, index : number) => (
                            <Flex
                                width={280}
                                key={index}
                            >
                                <RelatedContainer 
                                    navigation={navigation}
                                    post={item}
                                />
                            </Flex>
                        ))
                    }
                </Flex>
            </ScrollView>
        </Flex>
    )
}

export default RelatedPosts