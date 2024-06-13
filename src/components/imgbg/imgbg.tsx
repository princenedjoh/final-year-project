import { ImageBackground, StyleSheet, View } from "react-native"
import theme from "../../styles/theme"
import { imageBgsProps } from "../../utils/types"

const ImageBG = ({
    width,
    height,
    source,
    rounded,
    children,
    resizeMode,
    bgcolor,
    flex,
    style
} : imageBgsProps) => {

    const mainstyle = StyleSheet.create({
        imagebackground : {
            width : '100%',
            height : '100%',
            borderRadius : rounded ?? 5,
            display : 'flex',
            flexDirection : 'column',
            flex
        }
    })

    return (
        <View
            style={
                {
                    width : width ?? '100%',
                    height : height ?? 150,
                    backgroundColor : bgcolor ?? theme.colors.dark[10],
                    borderRadius : rounded ?? 5,
                    position : 'relative',
                    overflow : 'hidden'
                }
            }
                >
                <ImageBackground
                    source={source}
                    style={[style, mainstyle.imagebackground]}
                    resizeMode={resizeMode}
                >
                    {children}
                </ImageBackground>
            </View>
    )
}

export default ImageBG