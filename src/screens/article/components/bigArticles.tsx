import { Image, ScrollView, StyleSheet, View } from "react-native"
import theme from "../../../styles/theme"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import LargeCard from "../../../components/article card/largeCard"
import AwesomeIcon6 from 'react-native-vector-icons/FontAwesome6';
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import { images } from "../../../assets/assets"
import Profilename from "../../../components/profilename/profilename"
import { NavigationProp } from "@react-navigation/native"
import { articleTypes } from "../../../utils/types"

const BigArticles = ({
    articles,
    navigation
} : {
    articles : Omit<articleTypes, 'navigation'>[]
    navigation : NavigationProp<any>
}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <Flex
                paddingHorizontal={sizes.marginSM}
                gap={15}
            >
                {
                    articles.map((item : any, index : number) => {
                        return (
                            <Flex
                                direction="column"
                                key={index}
                                width={'auto'}
                            >
                                <LargeCard 
                                    navigation={navigation}
                                    title = {item.data.title[0].text}
                                    description={JSON.stringify(item.data.content)}
                                    date={new Date(item.data.date)}
                                    coverImageURL={{uri : item.data.cover_image.url}}
                                    full_name1={item.data.full_name1}
                                    width={300}
                                />
                            </Flex>
                        )
                    })
                }
            </Flex>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 20,
        height : 20
    }
})

export default BigArticles