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

const BigArticles = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <Flex
                paddingHorizontal={sizes.marginSM}
                paddingVertical={sizes.marginSM}
                gap={15}
            >
                {
                    [1,2,3,4,5].map((items, index : number) => {
                        return (
                            <Flex
                                direction="column"
                                key={index}
                                width={'auto'}
                            >
                                <Profilename 
                                    name="Prince Nedjoh"
                                    image={images.profile1}
                                />
                                <LargeCard 
                                    navigation={navigation}
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