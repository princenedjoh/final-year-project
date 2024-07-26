import { ActivityIndicator, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native"
import theme from "../../../../styles/theme"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import AppTypography, { Title } from "../../../../styles/components/appTypography"
import SmallCard from "../../../../components/article card/smallCard"
import { useEffect, useState } from "react"
import Hr from "../../../../styles/components/hr"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../../../constants/screennames"
import { getAllArticles } from "../../../../api/prismic"

const SmallArticles = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const [data, setData] = useState<any>([])
    const [dataResponse, setResponse] = useState()
    const getArticles = async () => {
        const response = await getAllArticles()
        const filteredData = response.results.filter((item : any, index : number) => item.type === 'article')
        setData(filteredData)
        setResponse(dataResponse)
    }

    useEffect(()=>{
        getArticles()
    }, [])

    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            paddingVertical={sizes.marginSM}
            direction="column"
            gap={10}
        >
            <Title>
                Articles
            </Title>
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
                        <TouchableHighlight
                            key={index}
                            underlayColor={'none'}
                            onPress={()=>navigation.navigate(screenNames.articlePost)}
                        >
                            <Flex 
                                direction="column"
                                gap={10}
                            >
                                <SmallCard
                                    navigation={navigation}
                                    title = {item.data.title[0].text}
                                    description={item.data.content[0].text}
                                    date={new Date(item.data.date)}
                                    coverImageURL={{uri : item.data.cover_image.url}}
                                    full_name1={item.data.full_name1}
                                />
                                {
                                    index < data.length - 1 &&
                                    <Hr 
                                        marginLeft={85}
                                    />
                                }
                            </Flex>
                        </TouchableHighlight>
                    )
                })
            }
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
    )
}

export default SmallArticles