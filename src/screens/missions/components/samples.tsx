import { View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import theme from "../../../styles/theme"
import { NavigationProp } from "@react-navigation/native"
import Post from "./post"
import { posts as allPosts } from "./posts"
import shuffleArray from "../../../utils/shuffleArray"

const Samples= ({
    navigation,
    title
} : {
    navigation : NavigationProp<any>
    title : string
}) => {
    const posts = shuffleArray(allPosts)
    return (
        <Flex
            width={sizes.screenWidth}
            direction="column"
            paddingHorizontal={sizes.marginSM}
            paddingLeft={30}
            paddingRight={45}
            gap={20}
            paddingBottom={50}
        >
            <Flex
                gap={30}
            >
                <View
                    style={{
                        width : 1,
                        height : '100%',
                        backgroundColor : theme.colors.dark[9]
                    }}
                >

                </View>
                <Flex
                    direction="column"
                    gap={20}
                >
                    {
                        posts.map((item, index : number) => {
                            return (
                                <Post 
                                    key={index}
                                    navigation={navigation}
                                    title={item.title}
                                    body={item.body}
                                    date={item.date}
                                    image={item.image}
                                    missionTitle={title}
                                />
                            )
                        })
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}


export default Samples