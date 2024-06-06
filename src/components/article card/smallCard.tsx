import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import theme from "../../styles/theme"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"
import ImageBG from "../imgbg/imgbg"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../constants/screennames"

const SmallCard = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>navigation.navigate(screenNames.articlePost)}
        >
            <Flex
                align="center"
                gap={6}
            >
                <ImageBG 
                    source={images.bg1}
                    width={80}
                    height={80}
                >
                    
                </ImageBG>
                <Flex
                    direction="column"
                    gap={1}
                    flex={1}
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

export default SmallCard