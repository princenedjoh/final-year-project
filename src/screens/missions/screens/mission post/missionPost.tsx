import { ScrollView } from "react-native"
import AppTypography from "../../../../styles/components/appTypography"
import Flex from "../../../../styles/components/flex"
import Middle from "./components/middle"
import Top from "./components/top"
import Imagefacts from "./components/imageFacts"
import RelatedPosts from "./components/relatedPosts"
import { NavigationProp } from "@react-navigation/native"

const MissionPost = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Flex
                direction="column"
                gap={20}
                paddingBottom={50}
            >
                <Top />
                <Middle />
                <Imagefacts />
                <RelatedPosts navigation={navigation}/>
            </Flex>
        </ScrollView>
    )
}

export default MissionPost