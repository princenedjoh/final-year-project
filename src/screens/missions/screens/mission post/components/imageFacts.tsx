import AppTypography, { Title } from "../../../../../styles/components/appTypography"
import Flex from "../../../../../styles/components/flex"
import theme from "../../../../../styles/theme"
import { sizes } from "../../../../../utils/sizes"

const Imagefacts = () => {

    const facts = `Image FactsSatellite: TerraDate Acquired: 3/28/2024Resolutions: 1km (226.7 KB), 500m (675.8 KB),
250m (2.1 MB)Bands Used: 1,4,3Image Credit: MODIS Land Rapid Response 
Team, NASA GSFC`

    return (
        <Flex
            direction="column"
            paddingHorizontal={sizes.marginSM}
        >
            <Title>
                Image Facts
            </Title>
            <Flex
                paddingHorizontal={15}
                paddingVertical={15}
                background={`${theme.colors.dark[9]}80`}
                rounded={5}
            >
                <AppTypography
                    lineHeight={25}
                >
                Satellite: Terra Date Acquired: 3/28/2024 Resolutions: 1km (226.7 KB), 500m (675.8 KB), 
250m (2.1 MB) Bands Used: 1,4,3 Image Credit: MODIS Land Rapid Response 
Team, NASA GSFC
                </AppTypography>
            </Flex>
        </Flex>
    )
}

export default Imagefacts