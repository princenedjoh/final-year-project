import React from "react"
import Flex from "../../../../styles/components/flex"
import { hexOpacity } from "../../../../utils/hexOpacity"
import { View } from "react-native"
import theme from "../../../../styles/theme"
import { sizes } from "../../../../utils/sizes"
import IconContainer from "../../components/iconContainer"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Divider from "../../../../components/divider/divider"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import getAqiQualitativeName from "../../../../utils/getAqiQualitativeName"

const Aqi = ({
    aqi
} : {
    aqi : number
}) => {
    return (
        <Flex
                justify="space-between"
                align="center"
                gap={10}
                background={`#000000${hexOpacity(8)}`}
                paddingHorizontal={20}
                paddingVertical={20}
                rounded={10}
            >
                <View
                    style={{
                        width : '100%',
                        height : 100,
                        borderRadius : 10,
                        backgroundColor : `#ffffff` || theme.colors.dark[11],
                        elevation : 10,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.15,
                        shadowRadius: 10,
                    }}
                >
                    <Flex
                        justify="space-around"
                        align="center"
                        height={'100%'}
                        paddingHorizontal={sizes.marginSM}
                    >
                        <IconContainer 
                            icon={
                                <MaterialIcons
                                    name="air"
                                    color={'white'}
                                    size={20}
                                />
                            }
                            color={getAqiQualitativeName(aqi).color}
                        />
                        <Divider
                            size={{
                                height : 30,
                                width : 1
                            }}
                            color={theme.colors.dark[9]}
                        />
                        <Flex
                            direction="column"
                            align="center"
                            width={'auto'}
                            gap={0}
                        >
                            <AppTypography
                                textColor={getAqiQualitativeName(aqi).color}
                                bold={TypographyBold.lg}
                                size={TypographySize.lg2}
                            >
                                {aqi}
                            </AppTypography>
                            <AppTypography
                                textColor={getAqiQualitativeName(aqi).color}
                            >
                                aqi
                            </AppTypography>
                        </Flex>
                        <Divider 
                            size={{
                                height : 30,
                                width : 1
                            }}
                            color={theme.colors.dark[9]}
                        />
                        <AppTypography
                            textColor={getAqiQualitativeName(aqi).color}
                            bold={TypographyBold.lg}
                            size={TypographySize.md}
                        >
                            {getAqiQualitativeName(aqi).name}
                        </AppTypography>
                    </Flex>
                </View>
            </Flex>
    )
}
export default Aqi