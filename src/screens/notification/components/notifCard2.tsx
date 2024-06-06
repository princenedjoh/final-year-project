import { images, satellites } from "../../../assets/assets"
import ImageBG from "../../../components/imgbg/imgbg"
import AppTypography, { Title } from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"

const NotifCard2 = () => {
    return (
        <Flex
            align="center"
            gap={6}
        >
            <ImageBG
                source={images.profile1}
                resizeMode="contain"
                bgcolor='white'
                width={50}
                height={50}
                rounded={100}
            >
                
            </ImageBG>
            <Flex
                direction="column"
                gap={2}
                flex={1}
            >
                <Flex
                    width={'auto'}
                >
                    <AppTypography
                        size={TypographySize.xs}
                        textColor={theme.colors.main.text.light}
                    >
                        12th March, 2024
                    </AppTypography>
                </Flex>
                <AppTypography
                    textColor={theme.colors.main.text.head}
                    bold={TypographyBold.md}
                >
                    Prince Nedjoh 
                    <AppTypography
                        textColor={theme.colors.main.text.head}
                    >
                       {' '} made a post:
                    </AppTypography>
                </AppTypography>
                <AppTypography
                    numberOfLines={2}
                >
                    SCIENCE A strong earthquake rocked Nepal early Saturday, 
                    destroying buildings, damaging historic temples...
                </AppTypography>
            </Flex>
        </Flex>
    )
}

export default NotifCard2