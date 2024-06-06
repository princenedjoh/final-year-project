import { Image, StyleSheet, View } from "react-native"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import theme from "../../../styles/theme"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import ImageContainer from "./imageContainer"
import { NavigationProp } from "@react-navigation/native"
import { images } from "../../../assets/assets"
import Post from "./post"

const Samples= ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
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
                        height : sizes.screenHeight,
                        backgroundColor : theme.colors.dark[9]
                    }}
                >

                </View>
                <Flex
                    direction="column"
                    gap={20}
                >
                    {
                        [1,2,3,4,5].map((item, index : number) => {
                            return (
                                <Post 
                                    key={index}
                                    navigation={navigation}
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