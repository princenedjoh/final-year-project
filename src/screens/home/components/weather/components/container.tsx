import { StyleProp, View, ViewStyle } from "react-native"
import theme from "../../../../../styles/theme"
import { ReactNode } from "react"
import Flex from "../../../../../styles/components/flex"
import AppTypography from "../../../../../styles/components/appTypography"
import { sizes } from "../../../../../utils/sizes"
import { TypographyBold } from "../../../../../styles/components/types"

const Container = ({
    children,
    style,
    title
} : {
    children? : ReactNode
    style? : StyleProp<ViewStyle>,
    title? : string | ReactNode
}) => {
    return (
        <Flex
            direction="column"
        >
            <Flex
                paddingLeft={10}
                width={'auto'}
            >
                <AppTypography
                    bold={TypographyBold.sm2}
                    textColor={theme.colors.main.text.head}
                >
                    {title}
                </AppTypography>
            </Flex>
            <View
                style={{
                    width : '100%',
                    backgroundColor : theme.colors.dark[9],
                    padding : sizes.marginSM,
                    borderRadius : 10,
                    ...(style as object || {}),
                }}
            >
                {children}
            </View>
        </Flex>
    )
}
export default Container