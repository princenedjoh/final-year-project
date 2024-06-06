import { TouchableOpacity, DimensionValue, ActivityIndicator } from 'react-native';
import AppTypography from "../../styles/components/appTypography"
import theme from "../../styles/theme"
import { screenNames } from "../../constants/screennames"
import { NavigationProp } from "@react-navigation/native"
import { ReactNode } from "react"
import { TypographyBold } from "../../styles/components/types"

const Button = ({
    children,
    onPress,
    rounded,
    paddingVertical,
    loading,
    size
} : {
    children : ReactNode,
    onPress? : ()=>void,
    rounded? : number
    paddingVertical? : DimensionValue
    loading? : boolean
    size? : {
        height? : DimensionValue,
        width? : DimensionValue
    }
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderRadius : rounded ?? 1000,
                backgroundColor : theme.colors.main.primary,
                paddingHorizontal : 15,
                paddingVertical : paddingVertical ?? 8,
                height : size?.height,
                width : size?.width,
                justifyContent : "center",
                alignItems : "center"
            }}
        >
            <AppTypography
                textColor="white"
                bold={TypographyBold.md}
            >
                {
                    loading ?
                    <ActivityIndicator
                        color={'white'} 
                        size={'small'}
                    />
                    :
                    children
                }
            </AppTypography>
        </TouchableOpacity>
    )
}

export default Button