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
import Profile from "./components/profile"

const Header = ({
    title,
    message,
    displayProfile,
    navigation,
    right
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
                <Flex
                    width={'auto'}
                >
                    {right}
                    {
                        displayProfile &&
                        <Profile navigation={navigation}/>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header