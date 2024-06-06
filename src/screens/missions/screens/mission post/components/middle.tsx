import AppTypography, { Title } from "../../../../../styles/components/appTypography"
import Flex from "../../../../../styles/components/flex"
import { TypographySize } from "../../../../../styles/components/types"
import { sizes } from "../../../../../utils/sizes"

const Middle = () => {

    const text = `off the coast of California in early April 2024, 
each marking  the passage of a ship. The 
Moderate Resolution Imaging Spectroradiometer
(MODIS) acquired this true-color image of the
distinctive clouds known as “ship tracks” on April 1.

Linear clouds crisscrossed the Pacific Ocean 
off the coast of California in early April 2024, 
each marking  the passage of a ship. The 
Moderate Resolution Imaging Spectroradiometer

(MODIS) acquired this true-color image of the
distinctive clouds known as “ship tracks” on April 1.`

    return (
        <Flex
            direction="column"
            paddingHorizontal={sizes.marginSM}
        >
            <Title
                size={TypographySize.lg2}
            >
                Linear clouds crisscrossed the 
                Pacific Ocean 
            </Title>
            <AppTypography
                size={TypographySize.sm2}
                lineHeight={23}
            >
                {text}
            </AppTypography>
        </Flex>
    )
}

export default Middle