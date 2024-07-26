import { TouchableOpacity, View } from "react-native"
import Flex from "../../../../../styles/components/flex"
import { sizes } from "../../../../../utils/sizes"
import ImageBG from "../../../../../components/imgbg/imgbg"
import { images } from "../../../../../assets/assets"
import { LinearGradient } from "expo-linear-gradient"
import ProfileInfo from "../../../components/profileInfo"
import { Title } from "../../../../../styles/components/appTypography"
import theme from "../../../../../styles/theme"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../../../../constants/screennames"

const RelatedContainer = ({
    navigation,
    post
} : {
    navigation : NavigationProp<any>,
    post : any
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigation.navigate(screenNames.missionPost, {
                title : post.title,
                body : post.body,
                image : post.image
            })}
        >
            <Flex>
                <View
                    style={{
                    position : "relative",
                    width : "100%",
                    height : 150
                }}>
                    <ImageBG
                        source={{uri : post.image}}
                        resizeMode="cover"
                        rounded={5}
                        height={'100%'}
                    />
                    <LinearGradient
                        colors={["transparent", "black"]}
                        style={{
                            width : '100%',
                            height : '100%',
                            position : "absolute",
                            borderRadius : 5
                        }}
                    >
                        <View
                            style={{
                                position : 'absolute',
                                bottom : 20
                            }}
                        >
                            <Flex
                                direction="column"
                                paddingHorizontal={sizes.marginSM}
                            >
                                <View
                                    style={{
                                        transform : [{
                                            scale : 0.8
                                        }],
                                        marginLeft : -25
                                    }}
                                >
                                    <ProfileInfo 
                                        displayProfile={false}
                                        color={theme.colors.dark[10]}
                                        dateColor={theme.colors.dark[9]}
                                    />
                                </View>
                                <Title
                                    textColor={theme.colors.dark[10]}
                                >
                                    {post.title}
                                </Title>
                            </Flex>
                        </View>
                    </LinearGradient>
                </View>
            </Flex>
        </TouchableOpacity>
    )
}

export default RelatedContainer