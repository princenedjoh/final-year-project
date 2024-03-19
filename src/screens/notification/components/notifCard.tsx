import AppTypography, { Title } from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"

const NotifCard = () => {
    return (
        <Flex
            direction="column"
        >
            <AppTypography
                size={TypographySize.xs}
                textColor={theme.colors.main.text.light}
            >
                12th March, 2024
            </AppTypography>
            <AppTypography
                size={TypographySize.sm2}
                bold={TypographyBold.md}
            >
                Temperature rises by 40% in one at Accra
            </AppTypography>
        </Flex>
    )
}

export default NotifCard