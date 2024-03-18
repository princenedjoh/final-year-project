import AppTypography from "../../../../styles/components/appTypography";
import Flex from "../../../../styles/components/flex"
import Ionicons from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { sizes } from "../../../../utils/sizes";
import { TypographyBold, TypographySize } from "../../../../styles/components/types";
import theme from "../../../../styles/theme";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { images } from "../../../../assets/assets";
import ImageBG from "../../../../components/imgbg/imgbg";

const AlertSection = () => {

    const [data, setData] = useState([1,2,3,4,5])

    return (
        <Flex
            direction="column"
            gap={6}
        >
            <Flex
                paddingHorizontal={sizes.marginSM}
                align="center"
            >
                <Ionicons 
                    name="alert-circle"
                    size={18}
                    color={theme.colors.main.text.body}
                />
                <AppTypography
                    size={TypographySize.md2}
                    bold={TypographyBold.md}
                    textColor={theme.colors.main.text.body}
                >
                    Alerts
                </AppTypography>
            </Flex>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <Flex
                    marginHorizontal={sizes.marginSM}
                    gap={8}
                >
                    {
                        data.map((item, index : number) => {
                            return (
                                <Flex
                                    width={'auto'}
                                    key={index}
                                >
                                    <ImageBG
                                        source={images.bg1}
                                        width={300}
                                        height={120}
                                    >
                                        {/* Property */}
                                        <View
                                            style={
                                                {
                                                    position : 'absolute',
                                                    top : 10,
                                                    left : 10
                                                }
                                            }
                                        >
                                            <Flex
                                                align="center"
                                                gap={1}
                                            >
                                                <View
                                                    style={
                                                        {
                                                            backgroundColor : theme.colors.dark[9],
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
                                                    <AwesomeIcon name="thermometer-1"/>
                                                </View>
                                                <AppTypography
                                                    size={TypographySize.xs}
                                                >
                                                    Temperature
                                                </AppTypography>
                                            </Flex>
                                        </View>
                                    </ImageBG>
                                </Flex>
                            )
                        })
                    }
                </Flex>
            </ScrollView>
        </Flex>
    )
}

export default AlertSection