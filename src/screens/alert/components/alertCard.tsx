import { images } from "../../../assets/assets"
import Chip from "../../../components/chip/chip"
import ImageBG from "../../../components/imgbg/imgbg"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Severity from "./severity"
import { getSeverityColor } from "../../../utils/getSeverityColor"

const AlertCard = () => {
    return (
        <Flex
            align="center"
            gap={6}
        >
            <ImageBG
                source={images.bg3}
                width={80}
                height={80}
            >
                
            </ImageBG>
            <Flex
                direction="column"
                gap={1}
                flex={1}
            >
                <Flex
                    align="center"
                    gap={10}
                >
                    <AppTypography
                        size={TypographySize.xs}
                        bold={TypographyBold.md}
                        textColor={getSeverityColor('critical')}
                    >
                        Temperature
                    </AppTypography>
                    <AwesomeIcon 
                        name='map' 
                        color={theme.colors.main.primary}
                        size={10}
                    />
                    <Severity severity="critical" />
                </Flex>
                <AppTypography
                    size={TypographySize.md2}
                    textColor={theme.colors.main.text.head}
                    bold={TypographyBold.md}
                    numberOfLines={1}
                >
                    Temperature rises by 40% in one at Accra
                </AppTypography>
                <AppTypography
                    numberOfLines={2}
                >
                    SCIENCE A strong earthquake rocked Nepal early Saturday, 
                    destroying buildings, damaging historic temples...
                </AppTypography>
                <Flex
                    width={'auto'}
                    marginTop={3}
                >
                    <AppTypography
                        size={TypographySize.xs}
                        textColor={theme.colors.main.text.light}
                    >
                        12th March, 2024
                    </AppTypography>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AlertCard