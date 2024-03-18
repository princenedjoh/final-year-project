import { headerType } from "../../utils/types"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { sizes } from "../../utils/sizes"
import { Image, StyleSheet, View } from "react-native"
import theme from "../../styles/theme"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"

const Header = ({
    title,
    message,
    displayProfile
} : headerType) => {
    return (
        <Flex
            direction="column"
            gap={0}
        >
            {
                message &&
                <AppTypography>
                    {message}
                </AppTypography>
            }
            <Flex
                justify="space-between"
                align="center"
            >
                <AppTypography
                    size={TypographySize.lg2}
                    bold={TypographyBold.lg}
                    textColor={theme.colors.main.text.head}
                >
                    {title}
                </AppTypography>
                {
                    displayProfile &&
                    <Image
                        style={style.profileImage}
                        source={images.profile1}
                    ></Image>
                }
            </Flex>
        </Flex>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 35,
        height : 35
    }
})

export default Header