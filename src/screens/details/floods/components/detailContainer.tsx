import Flex from "../../../../styles/components/flex"
import AppTypography from "../../../../styles/components/appTypography";
import { TypographyBold } from "../../../../styles/components/types";
import IconContainer from "../../components/iconContainer";
import { ReactNode } from "react";

const DetailContainer = ({
    title,
    description,
    color,
    icon
} : {
    title : string,
    description : string,
    icon : ReactNode,
    color? : string
}) => {
    return (
        <Flex
            direction="column"
            width={'auto'}
            align="center"
            gap={8}
        >
            <IconContainer 
                icon={icon}
                color={color}
            />
            <Flex
                direction="column"
                width={'auto'}
                align="center"
            >
                <AppTypography
                    bold={TypographyBold.md2}
                >
                    {title}
                </AppTypography>
                <AppTypography>
                    {description}
                </AppTypography>
            </Flex>
        </Flex>
    )
}
export default DetailContainer