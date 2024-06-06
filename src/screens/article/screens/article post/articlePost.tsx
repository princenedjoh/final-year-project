import { ScrollView, StyleSheet, View } from "react-native"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import ImageBG from "../../../../components/imgbg/imgbg"
import { images } from "../../../../assets/assets"
import { LinearGradient } from "expo-linear-gradient"
import AppTypography, { Title } from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import theme from "../../../../styles/theme"
import ProfileInfo from "../../../missions/components/profileInfo"
import Top from "./components/top"
import ArticleProfileInfo from "../../components/articleProfileInfo"

const ArticlePost = () => {

    const text = `MODIS (or Moderate Resolution Imaging 
Spectroradiometer) s a key instrument aboard the 
Terra (originally known as EOS AM-1) and Aqua 
(originally known as EOS PM-1) satellites Terra's 
orbit around the Earth is timed so that it passes
    
from north to south across the equator in the 
morning, while Aqua passes south to north over the 
equator in the afternoon. Terra MODIS and Aqua
MODIS are viewing the entire Earth's surface every
1 to 2 days, acquiring data in 

36 spectral bands, or groups of wavelengths
(see MODIS Technical Specifications)
These data will improve our understanding of global 
dynamics and processes occurring on the land, 
in the oceans, and in the lower atmosphere. 
MODIS is playing 

a vital role in the development of validated, global, 
interactive Earth system models able to predict 
global change accurately enough to assist policy
makers in making sound decisions concerning the 
protection of our environment.`

    return (
        <ScrollView>
            <Flex
                direction="column"
                gap={10}
                paddingBottom={50}
            >
                <Top />
                <Flex
                    marginLeft={sizes.marginSM}
                    direction="column"
                    gap={10}
                >
                    <ArticleProfileInfo />
                    <AppTypography
                        size={TypographySize.sm2}
                        lineHeight={25}
                    >
                        {text}
                    </AppTypography>
                </Flex>
            </Flex>
        </ScrollView>
    )
}

export default ArticlePost