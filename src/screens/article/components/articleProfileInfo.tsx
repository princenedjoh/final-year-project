import { Image, StyleSheet, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { images } from "../../../assets/assets"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"

const ArticleProfileInfo = ({
    displayProfile,
    color,
    dateColor
} : {
    displayProfile? : boolean,
    color? : string,
    dateColor? : string
}) => {
    return (
        <Flex
            width={'auto'}
            align="center"
            gap={0}
        >
            <Image
                style={style.profileImage}
                source={images.profile1}
            ></Image>
            <Flex
                direction="column"
                gap={0}
            >
                <AppTypography
                    bold={TypographyBold.md2}
                    size={TypographySize.md}
                    textColor={color ?? theme.colors.main.text.head}
                >
                    Prince Nedjoh
                </AppTypography>
                <AppTypography
                    textColor={dateColor ?? theme.colors.main.text.light}
                    size={TypographySize.xs}
                >
                    25th March, 1995
                </AppTypography>
            </Flex>
        </Flex>
    ) 
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 35,
        height : 35,
        marginRight : 10
    },
})

export default ArticleProfileInfo