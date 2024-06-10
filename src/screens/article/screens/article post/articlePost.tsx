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
import { articleTypes } from "../../../../utils/types"
import RelatedPosts from "./components/relatedPosts"

const ArticlePost = ({route} : any) => {
    const {
        navigation,
        title,
        description,
        date,
        coverImageURL,
        full_name1,
    } = route.params
    return (
        <ScrollView>
            <Flex
                direction="column"
                gap={10}
                paddingBottom={50}
            >
                <Top 
                    title={title}
                />
                <Flex
                    marginLeft={sizes.marginSM}
                    direction="column"
                    gap={10}
                >
                    <ArticleProfileInfo 
                        name={full_name1}
                        date={date}
                    />
                    <AppTypography
                        size={TypographySize.sm2}
                        lineHeight={25}
                    >
                        {description}
                    </AppTypography>
                </Flex>
                <RelatedPosts navigation={navigation}/>
            </Flex>
        </ScrollView>
    )
}

export default ArticlePost