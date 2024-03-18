import { StyleSheet, View } from "react-native"
import { hrProps } from "./types"
import theme from "../theme"

const Hr = ({
    size,
    background,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
    marginHorizontal,
    marginVertical,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
} : hrProps) => {

    const style = StyleSheet.create({
        hr : {
            height : size?.height ?? 1,
            width : size?.width ?? '100%',
            backgroundColor : background ?? theme.colors.dark[10],
            paddingLeft,
            paddingRight,
            paddingBottom,
            paddingTop,
            paddingHorizontal,
            paddingVertical,
            marginHorizontal,
            marginVertical,
            marginLeft,
            marginRight,
            marginTop,
            marginBottom,
        }
    })

    return (
        <View style={style.hr}>

        </View>
    )
}

export default Hr