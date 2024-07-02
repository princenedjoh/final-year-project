import { View } from "react-native"
import theme from "../../../../../styles/theme"
import AppTypography from "../../../../../styles/components/appTypography"
import { TypographyBold } from "../../../../../styles/components/types"

const Head = ({
    title
} : {
    title? : string
}) => {
    return (
        <View
            style={{
                padding : 20,
                width : '100%',
                justifyContent : 'center',
                alignItems : 'center',
                display : 'flex',
                position : 'absolute',
                top : 0,
                left : 0,
                zIndex : 10,
                backgroundColor : 'white'
            }}
        >
            <AppTypography
                bold={TypographyBold.md}
                textColor={theme.colors.main.text.light}
            >
                {title}
            </AppTypography>
        </View>
    )
}
export default Head