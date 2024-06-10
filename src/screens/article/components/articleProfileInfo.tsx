import { Image, StyleSheet, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { images } from "../../../assets/assets"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import getDate from "../../../utils/getDate"

const ArticleProfileInfo = ({
    displayProfile,
    color,
    dateColor,
    name,
    date
} : {
    displayProfile? : boolean,
    color? : string,
    dateColor? : string
    name : string,
    date : Date
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
                    {name}
                </AppTypography>
                <AppTypography
                    size={TypographySize.xs}
                >
                    {getDate(date)}
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