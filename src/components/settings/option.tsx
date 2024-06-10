import { TouchableOpacity, View } from "react-native"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { ReactNode } from "react"
import { TypographyBold } from "../../styles/components/types"

export type optionsTypes = {
    title : string,
    icon? : ReactNode
    right? : ReactNode
    color? : string
    onPress? : ()=>void
}

const Option = ({
    title,
    icon,
    right,
    onPress,
    color
} : optionsTypes) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Flex
                justify="space-between"
                align="center"
                paddingVertical={15}
            >
                <Flex
                    width={'auto'}
                    align="center"
                >
                    {icon}
                    <AppTypography
                        bold={TypographyBold.sm2}
                        textColor={color}
                    >
                        {title}
                    </AppTypography>
                </Flex>
                {right}
            </Flex>
        </TouchableOpacity>
    )
}
export default Option