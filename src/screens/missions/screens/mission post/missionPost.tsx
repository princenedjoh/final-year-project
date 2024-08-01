import { ScrollView } from "react-native"
import AppTypography from "../../../../styles/components/appTypography"
import Flex from "../../../../styles/components/flex"
import Middle from "./components/middle"
import Top from "./components/top"
import Imagefacts from "./components/imageFacts"
import RelatedPosts from "./components/relatedPosts"
import { NavigationProp } from "@react-navigation/native"
import { useEffect } from "react"

const MissionPost = ({
    navigation,
    route
} : {
    navigation : NavigationProp<any>,
    route? : any
}) => {
    const {image} = route?.params
    const {title} = route?.params
    const {body} = route?.params

    useEffect(()=>{
        console.log({image})
    },[])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Flex
                direction="column"
                gap={20}
                paddingBottom={50}
            >
                <Top 
                    image={image}
                />
                <Middle 
                    title={title}
                    body={body}
                />
                <Imagefacts />
                <RelatedPosts navigation={navigation}/>
            </Flex>
        </ScrollView>
    )
}

export default MissionPost