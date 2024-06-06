import { Image, StyleSheet, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { images } from "../../../assets/assets"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"

const ProfileInfo = ({
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
            align="center"
            width={'auto'}
        >
            {
                displayProfile === false ?
                <></>
                :
                <Image
                    style={style.profileImage}
                    source={images.profile1}
                ></Image>
            }
            <AppTypography
                bold={TypographyBold.md2}
                size={TypographySize.md}
                textColor={color ?? theme.colors.main.text.head}
            >
                MODIS
            </AppTypography>
            <AppTypography
                textColor={color ?? theme.colors.main.text.head}
            >
                •
            </AppTypography>
            <AppTypography
                textColor={dateColor ?? theme.colors.main.text.body}
            >
                25th March, 1995
            </AppTypography>
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

export default ProfileInfo