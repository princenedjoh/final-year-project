import { TouchableHighlight, View } from "react-native"
import { images } from "../../../../assets/assets"
import ImageBG from "../../../../components/imgbg/imgbg"
import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographySize } from "../../../../styles/components/types"
import { NavigationProp } from "@react-navigation/native"
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { screenNames } from "../../../../constants/screennames"

const AlertContainer = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <TouchableHighlight
            onPress={()=>navigation.navigate(screenNames.alertDetails)}
            underlayColor={'none'}
        >
            <Flex
                width={'auto'}
            >
                <ImageBG
                    source={images.bg4}
                    width={300}
                    height={120}
                >
                    {/* Property */}
                    <View
                        style={
                            {
                                position : 'absolute',
                                top : 10,
                                left : 10,
                                backgroundColor : `${theme.colors.dark[1]}80`,
                                padding : 5,
                                borderRadius : 100
                            }
                        }
                    >
                        <Flex
                            align="center"
                        >
                            <View
                                style={
                                    {
                                        backgroundColor : `${theme.colors.dark[10]}cc`,
                                        width : 20,
                                        height : 20,
                                        display : 'flex',
                                        justifyContent : 'center',
                                        alignItems : 'center',
                                        paddingHorizontal : 5,
                                        borderRadius : 100,
                                    }
                                }
                            >
                                <AwesomeIcon
                                    name="thermometer-1"
                                    color={theme.colors.dark[1]}
                                />
                            </View>
                            <AppTypography
                                size={TypographySize.xs}
                                textColor={theme.colors.dark[10]}
                            >
                                Temperature
                            </AppTypography>
                        </Flex>
                    </View>
                </ImageBG>
            </Flex>
        </TouchableHighlight>
    )
}

export default AlertContainer