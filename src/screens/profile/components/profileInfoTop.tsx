import { Image, StyleSheet, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { images } from "../../../assets/assets"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"

const ProfileInfoTop = ({
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
                    textColor={color ?? theme.colors.dark[10]}
                >
                    Prince Nedjoh
                </AppTypography>
                <AppTypography
                    textColor={dateColor ?? theme.colors.dark[9]}
                    size={TypographySize.xs}
                >
                    princenedjoh5@gmail.com
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

export default ProfileInfoTop