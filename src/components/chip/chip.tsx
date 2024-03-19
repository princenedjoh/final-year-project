import { View } from "react-native"
import AppTypography from "../../styles/components/appTypography"
import theme from "../../styles/theme"
import { paddingMarginTypes } from "../../utils/types"

const Chip = ({
    name,
    padding,
    paddingHorizontal,
    borderWidth,
    borderRadius,
    borderColor
} : paddingMarginTypes & {
    name : string,
    borderWidth? : number
    borderRadius? : number
    borderColor? : string
}) => {
    return (
        <View
            style={{
                padding : padding ?? 7,
                paddingHorizontal : paddingHorizontal ?? 10,
                borderWidth : borderWidth ?? 1,
                borderRadius : borderRadius ?? 100,
                borderColor : borderColor ?? theme.colors.dark[9]
            }}
        >
            <AppTypography>
                {name}
            </AppTypography>
        </View>
    )
}

export default Chip