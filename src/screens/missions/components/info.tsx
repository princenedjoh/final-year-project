import { View } from "react-native"
import Flex from "../../../styles/components/flex"
import AppTypography, { Title } from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const Info = () => {
    return (
        <Flex
            direction="column"
            align="center"
            marginTop={45}
            gap={0}
        >
            <Title
                bold={TypographyBold.lg}
            >
                MODIS
            </Title>
            <Flex
                width={'70%'}
                justify="center"
            >
                <AppTypography
                    bold={TypographyBold.md}
                    size={TypographySize.sm2}
                    textAlign="center"
                >
                    Moderate Resolution Imaging Spectroradiometer
                </AppTypography>
            </Flex>
            <View
                style={{
                    padding : 10,
                    paddingHorizontal : 20,
                    borderRadius : 100,
                    backgroundColor : `${theme.colors.dark[9]}80`,
                    marginTop : 10
                }}
            >
                <Flex
                    gap={20}
                >
                    <Flex
                        align="center"
                        width={'auto'}
                    >
                        <MaterialIcons 
                            name="date-range" 
                            color={theme.colors.dark[5]}
                        />
                        <AppTypography>
                            25th March, 1995
                        </AppTypography>
                    </Flex>
                    <Flex
                        align="center"
                        width={'auto'}
                    >
                        <FontAwesome6 
                            name="map-location-dot" 
                            color={theme.colors.dark[5]}
                        />
                        <AppTypography>
                            16.435943, 182.03923
                        </AppTypography>
                    </Flex>
                </Flex>
            </View>
        </Flex>
    )
}

export default Info