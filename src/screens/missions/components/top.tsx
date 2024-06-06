
import { LinearGradient } from "expo-linear-gradient"
import Flex from "../../../styles/components/flex"
import { NavigationProp } from "@react-navigation/native"
import { StyleSheet, View } from "react-native"
import ImageBG from "../../../components/imgbg/imgbg"
import { images, satellites } from "../../../assets/assets"
import theme from "../../../styles/theme"
import { sizes } from "../../../utils/sizes"

const Top = () => {
    return (
        <Flex
            direction="column"
            align="center"
        >
            <View style={{
                position : "relative",
                width : "100%",
                height : 0.25 * sizes.screenHeight
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

                </LinearGradient>
            </View>
            <View style={style.profile}>
                <View style={style.innerProfile}>
                    <ImageBG 
                        source={satellites.modis}
                        resizeMode="contain"
                        rounded={100}
                        height={'100%'}
                        bgcolor="white"
                    />
                </View>
            </View>
        </Flex>
    )
}

const style = StyleSheet.create({
    profile : {
        width : 110,
        height : 110,
        borderRadius : 100,
        padding : 5,
        backgroundColor : theme.colors.dark[10],
        position : "absolute",
        top : 150
    },
    innerProfile : {
        width : '100%',
        height : '100%',
        borderRadius : 100,
        backgroundColor : theme.colors.dark[5],
        borderWidth : 4,
        borderStyle : "solid",
        borderColor : theme.colors.green.green3,
    }
})

export default Top