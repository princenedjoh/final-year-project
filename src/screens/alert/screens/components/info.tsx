import { TouchableOpacity, View } from "react-native"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import ImageBG from "../../../../components/imgbg/imgbg"
import { images } from "../../../../assets/assets"
import theme from "../../../../styles/theme"
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import Severity from "../../components/severity"

const Info = () => {
    return (
        <Flex
            direction="column"
            gap={8}
            paddingHorizontal={sizes.marginSM}
        >
            <TouchableOpacity>
                <ImageBG
                    source={images.bg3}
                    width={'100%'}
                    height={150}
                >   
                </ImageBG>
            </TouchableOpacity>
            <Flex
                align="center"
                gap={15}
            >
                <View
                    style={
                        {
                            backgroundColor : `${theme.colors.dark[10]}`,
                            padding : 5,
                            borderRadius : 100
                        }
                    }
                >
                    <Flex
                        align="center"
                        width={'auto'}
                    >
                        <View
                            style={
                                {
                                    backgroundColor : `${theme.colors.dark[8]}`,
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
                            bold={TypographyBold.md}
                        >
                            Temperature
                        </AppTypography>
                    </Flex>
                </View>
                <TouchableOpacity>
                    <AwesomeIcon
                        name='map' 
                        color={theme.colors.main.primary}
                        size={15}
                    />
                </TouchableOpacity>
                <Severity
                    severity="critical" 
                    size={12}
                />
            </Flex>
        </Flex>
    )
}
export default Info