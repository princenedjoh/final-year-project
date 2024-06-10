import { StyleSheet, View } from "react-native"
import { sizes } from "../../../../../utils/sizes"
import ImageBG from "../../../../../components/imgbg/imgbg"
import { images } from "../../../../../assets/assets"
import { LinearGradient } from "expo-linear-gradient"
import { Title } from "../../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../../styles/components/types"
import theme from "../../../../../styles/theme"
import Bookmark from "./bookmark"

const Top = ({
    title
} : {
    title : string
}) => {
    return (
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
                            Aticle
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
                    <Title
                        textColor={theme.colors.dark[10]}
                        size={TypographySize.lg2}
                    >
                        Linear clouds crisscrossed the 
                        Pacific Ocean 
                    </Title>
                </View>
            </LinearGradient>
            <Bookmark />
        </View>
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