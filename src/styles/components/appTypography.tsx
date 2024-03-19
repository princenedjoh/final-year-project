import { StyleSheet, Text } from "react-native"
import { AppTypographyProps, TypographyBold, TypographySize } from "./types"
import theme from "../theme"

const AppTypography = (props : AppTypographyProps) => {
    const {
        children,
        numberOfLines,
        ellipsizeMode,
        bold,
        size,
        textColor,
        colorTheme,
        wrap,
        underline,
        clickable,
        clickableLink,
        italic,
        textAlign,
        display,
        ellipsis,
        maxLines,
        lineHeight,
    } = props
    return (
        <Text 
            style={style(props).typography}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {children}
        </Text>
    )
}

const style = ({
    children,
    bold,
    size,
    textColor,
    colorTheme,
    wrap,
    underline,
    clickable,
    clickableLink,
    italic,
    textAlign,
    display,
    ellipsis,
    maxLines,
    lineHeight,
} : AppTypographyProps) => StyleSheet.create({
    typography : {
        color : textColor ?? theme.colors.main.text.body,
        fontSize : size ?? theme.typography.size.sm,
        fontWeight : bold ?? theme.typography.bold.sm,
        fontStyle : italic ? 'italic' : 'normal',
        textAlign : textAlign ? textAlign : "left",
        lineHeight : lineHeight,
    }
})

export const Title = ({
    size,
    bold,
    textColor,
    children
} : AppTypographyProps) => {
    return (
        <AppTypography
            size={size ?? TypographySize.md2}
            bold={bold ?? TypographyBold.md}
            textColor={textColor ?? theme.colors.main.primary}
        >
            {children}
        </AppTypography>
    )
}

export default AppTypography