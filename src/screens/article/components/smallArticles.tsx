import { StyleSheet } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import AppTypography, { Title } from "../../../styles/components/appTypography"
import SmallCard from "../../../components/article card/smallCard"
import { useEffect, useState } from "react"
import Hr from "../../../styles/components/hr"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { getAllArticles } from "../../../api/prismic"
import { articleTypes } from "../../../utils/types"
import SmallCardSkeleton from "../../../components/article card/smallCardSkeleton"

const SmallArticles = ({
    articles,
    navigation
} : {
    articles : Omit<articleTypes, 'navigation'>[]
    navigation : NavigationProp<any>
}) => {
    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            direction="column"
            gap={4}
        >
            <Title>
                Latest
            </Title>
            {
                articles.map((item : any, index : number) => {
                    return (
                        <Flex 
                            key={index}
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
                                index < articles.length - 1 &&
                                <Hr 
                                    marginLeft={85}
                                />
                            }
                        </Flex>
                    )
                })
            }
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

export default SmallArticles