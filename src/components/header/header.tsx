import { headerType } from "../../utils/types"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native"
import theme from "../../styles/theme"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"
import { screenNames } from "../../constants/screennames"
import Button from "../button/button"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authcontext"

const Header = ({
    title,
    message,
    displayProfile,
    navigation
} : headerType) => {
    const { token, refreshToken, isLoggedIn } = useContext(AuthContext)

    return (
        <Flex
            direction="column"
            gap={0}
        >
            <Flex
                justify="space-between"
                align="center"
            >
                <Flex
                    direction="column"
                    gap={0}
                    width={'auto'}
                >
                    {
                        message &&
                        <AppTypography>
                            {message}
                        </AppTypography>
                    }
                    <AppTypography
                        size={TypographySize.lg2}
                        bold={TypographyBold.lg}
                        textColor={theme.colors.main.text.head}
                    >
                        {title}
                    </AppTypography>
                </Flex>
                {
                    displayProfile && isLoggedIn ?
                    <TouchableOpacity
                        onPress={()=>navigation.navigate(screenNames.profile)}
                    >
                        <Image
                            style={style.profileImage}
                            source={images.profile1}
                        ></Image>
                    </TouchableOpacity>
                    : displayProfile &&
                    <Button
                        onPress={()=>navigation.navigate(screenNames.login)}
                    >
                        Login
                    </Button>
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