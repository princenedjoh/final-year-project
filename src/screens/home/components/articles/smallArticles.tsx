import { StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native"
import theme from "../../../../styles/theme"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import AppTypography, { Title } from "../../../../styles/components/appTypography"
import SmallCard from "../../../../components/article card/smallCard"
import { useState } from "react"
import Hr from "../../../../styles/components/hr"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../../../constants/screennames"

const SmallArticles = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const [data, setData] = useState([1,2,3,4,5,6])

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
                data.map((item, index : number) => {
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

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 20,
        height : 20
    }
})

export default SmallArticles