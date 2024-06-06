import { Image, StyleSheet, View } from "react-native"
import theme from "../../../../styles/theme"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import LargeCard from "../../../../components/article card/largeCard"
import AwesomeIcon6 from 'react-native-vector-icons/FontAwesome6';
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import { images } from "../../../../assets/assets"
import Profilename from "../../../../components/profilename/profilename"
import { NavigationProp } from "@react-navigation/native"

const ArticleFeature = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            paddingVertical={sizes.marginSM}
            direction="column"
            gap={4}
        >
            <Profilename
                name="Prince Nedjoh"
                image={images.profile1}
            />
            <LargeCard 
                navigation={navigation}
            />
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