import { View } from "react-native"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import theme from "../../../styles/theme"
import { TypographyBold, TypographySize } from "../../../styles/components/types"

export interface profileItemsType {
    title : string,
    content : string
}
const ProfileItem = ({
    title,
    content
} : profileItemsType) => {
    return (
        <Flex
            direction="column"
            paddingLeft={sizes.marginSM + 5}
        >
            <Flex
                direction="column"
                gap={10}
            >
                <Flex
                    direction="column"
                >
                    <AppTypography
                        textColor={theme.colors.main.text.light}
                    >
                        {title}
                    </AppTypography>
                    {
                        content ?
                        <AppTypography
                            textColor={theme.colors.main.text.head}
                            size={TypographySize.md}
                            bold={TypographyBold.sm2}
                        >
                            {content}
                        </AppTypography>
                        :
                        <AppTypography
                            textColor={theme.colors.main.text.light}
                            bold={TypographyBold.sm2}
                        >
                            N/A
                        </AppTypography>
                    }
                </Flex>
                <View
                    style={{
                        width : '100%',
                        height : 1,
                        backgroundColor : theme.colors.dark[9],
                        borderRadius : 100
                    }}
                >

                </View>
            </Flex>
        </Flex>
    )
}

export default ProfileItem