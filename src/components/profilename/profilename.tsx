import { Image, ImageSourcePropType } from "react-native"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"
import { StyleSheet } from "react-native"

const Profilename = ({
    name,
    image
} : {
    name : string,
    image : ImageSourcePropType
}) => {
    return (
        <Flex
            align="center"
        >
            <Image
                style={style.profileImage}
                source={image}
            >
                
            </Image>
            <AppTypography
                size={TypographySize.sm}
                bold={TypographyBold.md}
            >
                {name}
            </AppTypography>
        </Flex>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 20,
        height : 20
    }
})

export default Profilename