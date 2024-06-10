import { ScrollView } from "react-native"
import { Title } from "../../../../../styles/components/appTypography"
import Flex from "../../../../../styles/components/flex"
import { sizes } from "../../../../../utils/sizes"
import RelatedContainer from "./relatedContainer"
import { NavigationProp } from "@react-navigation/native"

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
                        [1,2,3,4,5].map((items, index : number) => (
                            <Flex
                                width={280}
                                key={index}
                            >
                                <RelatedContainer navigation={navigation}/>
                            </Flex>
                        ))
                    }
                </Flex>
            </ScrollView>
        </Flex>
    )
}

export default RelatedPosts