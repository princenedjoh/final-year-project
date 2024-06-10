import { DimensionValue, View } from "react-native"
import theme from "../../styles/theme"

const Divider = ({
    size,
    color
} : {
    size? : {
        width? : DimensionValue,
        height? : DimensionValue
    },
    color? : string
}) => {
    return (
        <View
            style={{
                width : size?.width ?? '100%',
                height : size?.height ?? 1,
                backgroundColor : color ?? theme.colors.dark[9]
            }}
        >

        </View>
    )
}
export default Divider