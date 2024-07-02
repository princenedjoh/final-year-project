import { ActivityIndicator, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import theme from "../../../../styles/theme"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import LargeCard from "../../../../components/article card/largeCard"
import AwesomeIcon6 from 'react-native-vector-icons/FontAwesome6';
import AppTypography, { Title } from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import { images } from "../../../../assets/assets"
import Profilename from "../../../../components/profilename/profilename"
import { NavigationProp } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { getAllArticles } from "../../../../api/prismic"
import { screenNames } from "../../../../constants/screennames"
import Hr from "../../../../styles/components/hr"
import BigArticleSkeleton from "./bigArticlesSkeleton"

const ArticleFeature = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [data, setData] = useState<any>([])
    const [dataResponse, setResponse] = useState()
    const getArticles = async () => {
        const response = await getAllArticles()
        setData(response.results)
        setResponse(dataResponse)
    }

    useEffect(()=>{
        getArticles()
    }, [])

    return (
        data.length <= 0 ?
        <BigArticleSkeleton />
        :
        <Flex
            direction="column"
            gap={4}
        >
            <Flex
                paddingLeft={sizes.marginSM}
            >
                {/* <Title>
                    Articles
                </Title> */}
            </Flex>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <Flex
                    gap={8}
                    paddingHorizontal={sizes.marginSM}
                >
                    {
                        data.length < 0 ?
                        <Flex
                            justify="center"
                        >
                            <ActivityIndicator
                                color={theme.colors.main.primary} 
                                size={'small'}
                            />
                        </Flex>
                        :
                        data.map((item : any, index : number) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={()=>navigation.navigate(screenNames.articlePost)}
                                >
                                    <Flex 
                                        direction="column"
                                        gap={10}
                                    >
                                        <LargeCard
                                            navigation={navigation}
                                            title = {item.data.title[0].text}
                                            description={item.data.content[0].text}
                                            date={new Date(item.data.date)}
                                            coverImageURL={{uri : item.data.cover_image.url}}
                                            full_name1={item.data.full_name1}
                                            width={sizes.screenWidth - sizes.screenWidth/5}
                                        />
                                    </Flex>
                                </TouchableOpacity>
                            )
                        })
                    }
                </Flex>
            </ScrollView>
            <Flex
                paddingLeft={sizes.marginSM}
                marginTop={10}
            >
                <TouchableOpacity
                    onPress={()=>navigation.navigate(screenNames.article)}
                >
                    <AppTypography
                        textColor={theme.colors.blue.blue3}
                    >
                        See more...
                    </AppTypography>
                </TouchableOpacity>
            </Flex>
        </Flex>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 20,
        height : 20
    }
})

export default ArticleFeature