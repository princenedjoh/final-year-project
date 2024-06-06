import { NavigationProp } from "@react-navigation/native"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import ImageContainer from "./imageContainer"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Image } from "react-native"
import { images } from "../../../assets/assets"
import { screenNames } from "../../../constants/screennames"
import ProfileInfo from "./profileInfo"

const Post = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>navigation.navigate(screenNames.missionPost)}
        >
            <Flex
                direction="column"
            >
                <ProfileInfo displayProfile={false}/>
                <Flex
                    direction="column"
                    width={'auto'}
                >
                    <AppTypography
                        bold={TypographyBold.md}
                        size={TypographySize.sm2}
                        textColor={theme.colors.main.text.head}
                    >
                        Linear clouds crisscrossed 
                    </AppTypography>
                    <AppTypography
                        numberOfLines={5}
                        ellipsizeMode="tail"
                    >
                        the Pacific Ocean off the coast of California in 
                        early April 2024, each marking  the passage of a 
                        ship. The Moderate Resolution Imaging 
                        Spectroradiometer (MODIS) acquired this 
                        true-color image of the. Spectroradiometer (MODIS) acquired this 
                        true-color image of the.
                    </AppTypography>
                </Flex>
                <ImageContainer
                    navigation={navigation}
                />
                <View
                    style={{
                        backgroundColor : theme.colors.dark[10],
                        paddingVertical : 10,
                        position : 'absolute',
                        left : -47
                    }}
                >
                    <Image
                        style={style.profileImage}
                        source={images.profile1}
                    ></Image>
                </View>
            </Flex>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 35,
        height : 35
    }
})

export default Post