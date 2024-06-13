import Input from "../../../components/input/input"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { TypographyBold } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import { sizes } from "../../../utils/sizes"

const LabeledInput = ({
    label,
    value,
    setValue
} : {
    label : string,
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <Flex
            direction="column"
            width={'auto'}
        >
            <Flex
                width={'auto'}
                paddingLeft={sizes.marginSM}
            >
                <AppTypography
                    bold={TypographyBold.md}
                    textColor={theme.colors.main.text.light}
                >
                    {label}
                </AppTypography>
            </Flex>
            <Input
                value={value}
                setValue={setValue}
                rounded={10}
            />
        </Flex>
    )
}
export default LabeledInput