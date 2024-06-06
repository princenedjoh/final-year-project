import { ScrollView, StyleSheet, View } from "react-native"
import { sizes } from "../../../../../utils/sizes"
import ImageBG from "../../../../../components/imgbg/imgbg"
import { images } from "../../../../../assets/assets"
import { LinearGradient } from "expo-linear-gradient"
import Flex from "../../../../../styles/components/flex"
import AppTypography, { Title } from "../../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../../styles/components/types"
import theme from "../../../../../styles/theme"
import { Image } from "react-native"
import ProfileInfo from "../../../components/profileInfo"

const Top = () => {
    return (
        <ScrollView>
            <Flex
                direction="column"
            >
                <View
                    style={{
                        position : "relative",
                        width : "100%",
                        height : 0.3 * sizes.screenHeight
                }}>
                    <ImageBG
                        source={images.bg6}
                        resizeMode="cover"
                        rounded={0}
                        height={'100%'}
                    />
                    <LinearGradient
                        colors={["transparent", "black"]}
                        style={{
                            width : '100%',
                            height : '100%',
                            position : "absolute"
                        }}
                    >
                        <View
                            style={{
                                position : 'absolute',
                                top : 50,
                                marginHorizontal : sizes.marginSM
                            }}
                        >
                            <View style={style.shadowContainer}>
                                <Title
                                    size={TypographySize.xl}
                                    bold={TypographyBold.md2}
                                    textColor={theme.colors.dark[10]}
                                >
                                    Post
                                </Title>
                            </View>
                        </View>
                        <View
                            style={{
                                position : 'absolute',
                                bottom : 20,
                                marginHorizontal : sizes.marginSM
                            }}
                        >
                            <ProfileInfo 
                                color={theme.colors.dark[10]}
                                dateColor={theme.colors.dark[8]}
                            />
                        </View>
                    </LinearGradient>
                </View>
            </Flex>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 35,
        height : 35,
        marginRight : 10
    },
    shadowContainer: {
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
})

export default Top