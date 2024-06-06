import { StyleSheet, View } from "react-native"
import { sizes } from "../../../utils/sizes"
import ImageBG from "../../../components/imgbg/imgbg"
import { images } from "../../../assets/assets"
import { LinearGradient } from "expo-linear-gradient"
import { Title } from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import Edit from "./edit"
import ProfileInfoTop from "./profileInfoTop"

const Top = () => {
    return (
        <View
            style={{
                position : "relative",
                width : "100%",
                height : 0.3 * sizes.screenHeight
        }}>
            <ImageBG
                source={images.bg5}
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
                        top : 80,
                        marginHorizontal : sizes.marginSM
                    }}
                >
                    <ProfileInfoTop />
                </View>
            </LinearGradient>
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