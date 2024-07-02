import { View } from "react-native"
import Flex from "../../../../../../../styles/components/flex"
import { sizes } from "../../../../../../../utils/sizes"
import theme from "../../../../../../../styles/theme"
import DewpointSettings from "./dewpointSettings"
import Container from "../../../components/container"
import B from "../../../components/bold"
import AppTypography from "../../../../../../../styles/components/appTypography"
import { hexOpacity } from "../../../../../../../utils/hexOpacity"
import Divider from "../../../../../../../components/divider/divider"
import { NavigationProp } from "@react-navigation/native"
import Barchart from "../../../components/barChart"
import DewPointChart from "./dewPointChart"

const Details = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Flex
            direction="column"
        >
            <Flex
                direction="column"
                paddingHorizontal={sizes.marginSM}
                paddingVertical={sizes.marginSM}
                gap={14}
            >
                <DewPointChart />
                <DewpointSettings navigation={navigation}/>
                <Container title={'Understanding Humidity Levels'}>
                    <Flex
                        direction="column"
                        gap={16}
                    >
                        <Flex
                            direction="column"
                            gap={1}
                        >
                            <B>Absolute humidity</B>
                            <AppTypography>
                                is the total mass of water vapor present in a given volume or mass of air. It is expressed in grams per cubic meter <B>(g/m³)</B>.
                            </AppTypography>
                            <Container 
                                style={{
                                    backgroundColor : `${theme.colors.dark[8]}${hexOpacity(50)}`,
                                    marginTop : -10
                                }}
                            >
                                <AppTypography>
                                    <B>Formula:</B> AH = (mass of water vapor) / (volume of air)
                                </AppTypography>
                            </Container>
                        </Flex>
                        <Divider color={theme.colors.dark[8]}/>
                        <Flex
                            direction="column"
                            gap={1}
                        >
                            <B>Relative humidity (RH)</B>
                            <AppTypography>
                                is the ratio of the current absolute humidity to the highest possible absolute humidity at a given temperature, expressed as a percentage.
                            </AppTypography>
                            <Container 
                                style={{
                                    backgroundColor : `${theme.colors.dark[8]}${hexOpacity(50)}`,
                                    marginTop : -10
                                }}
                            >
                                <AppTypography>
                                    <B>Formula:</B>  (current absolute humidity / maximum absolute humidity at that temperature) × 100%
                                </AppTypography>
                            </Container>
                        </Flex>
                    </Flex>
                </Container>
                <Container title={'Importance of Humidity Monitoring'}>

                    <Flex
                        direction="column"
                        gap={16}
                    >
                        <Flex
                            direction="column"
                            gap={1}
                        >
                            <B>Climate Study</B>
                            <AppTypography>
                            Accurate Weather Predictions: Monitoring humidity is crucial for predicting weather patterns. Humidity influences cloud formation, precipitation, and storm development. Accurate humidity data helps meteorologists forecast rain, storms, and other weather events more precisely
                            </AppTypography>
                        </Flex>
                        <Divider color={theme.colors.dark[8]}/>
                        <Flex
                            direction="column"
                            gap={1}
                        >
                            <B>Human Health and Comfort</B>
                            <AppTypography>
                            Indoor Air Quality: Humidity monitoring in homes and workplaces ensures indoor air quality is maintained at comfortable levels. High humidity can cause mold growth, dust mites, and respiratory issues, while low humidity can lead to dry skin, irritated eyes, and respiratory discomfort.
                            </AppTypography>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}
export default Details