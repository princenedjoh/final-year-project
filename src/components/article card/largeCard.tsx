import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import theme from "../../styles/theme"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"
import ImageBG from "../imgbg/imgbg"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../constants/screennames"

const LargeCard = ({
    width,
    height,
    navigation
} : {
    width? : number,
    height? : number,
    navigation : NavigationProp<any>
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>navigation.navigate(screenNames.articlePost)}
        >
            <Flex
                direction="column"
                width={width}
            >
                <ImageBG 
                    source={images.bg2}
                    width={width}
                    height={height}
                >
                    
                </ImageBG>
                <Flex
                    direction="column"
                    gap={1}
                >
                    <AppTypography
                        size={TypographySize.md2}
                        textColor={theme.colors.main.text.head}
                        bold={TypographyBold.md}
                    >
                        Quake Devastates Nepal
                    </AppTypography>
                    <AppTypography
                        numberOfLines={2}
                    >
                        SCIENCE A strong earthquake rocked Nepal early Saturday, 
                        destroying buildings, damaging historic temples...
                    </AppTypography>
                    <Flex
                        width={'auto'}
                        marginTop={3}
                    >
                        <AppTypography
                            size={TypographySize.xs}
                            textColor={theme.colors.main.text.light}
                        >
                            12th March, 2024
                        </AppTypography>
                    </Flex>
                </Flex>
            </Flex>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    imagebackground : {
        width : '100%',
        height : 150,
        borderRadius : 5,
    }
})

export default LargeCard