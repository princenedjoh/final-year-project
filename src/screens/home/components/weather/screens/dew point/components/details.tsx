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
                <Container title={'Understanding Dew Point'}>
                    <Flex direction="column" gap={16}>
                        <Flex direction="column" gap={1}>
                            <B>Dew Point</B>
                            <AppTypography>
                                is the temperature at which air becomes saturated with moisture and water vapor begins to condense into liquid water. It is expressed in degrees Celsius (°C) or Fahrenheit (°F).
                            </AppTypography>
                            <Container 
                                style={{
                                    backgroundColor: `${theme.colors.dark[8]}${hexOpacity(50)}`,
                                    marginTop: -10
                                }}
                            >
                                <AppTypography>
                                    <B>Concept:</B> The dew point is a direct measure of the amount of moisture in the air. A higher dew point indicates more moisture, while a lower dew point indicates drier air.
                                </AppTypography>
                            </Container>
                        </Flex>
                        <Divider color={theme.colors.dark[8]}/>
                        <Flex direction="column" gap={1}>
                            <B>How Dew Point is Calculated</B>
                            <AppTypography>
                                The dew point can be determined through various methods, including the use of dew point hygrometers or psychrometers. These instruments measure the air temperature and relative humidity, which can then be used to calculate the dew point.
                            </AppTypography>
                        </Flex>
                    </Flex>
                </Container>

                <Container title={'Importance of Dew Point Monitoring'}>
                    <Flex direction="column" gap={16}>
                        <Flex direction="column" gap={1}>
                            <B>Weather Prediction</B>
                            <AppTypography>
                                Monitoring the dew point is crucial for predicting weather patterns. The dew point provides insight into potential precipitation, fog, and storm development. Meteorologists use dew point data to forecast rain, storms, and other weather events more accurately.
                            </AppTypography>
                        </Flex>
                        <Divider color={theme.colors.dark[8]}/>
                        <Flex direction="column" gap={1}>
                            <B>Human Comfort and Health</B>
                            <AppTypography>
                                The dew point is a significant factor in determining human comfort. A high dew point indicates high moisture content in the air, which can make it feel warmer and more uncomfortable, especially in summer. A lower dew point indicates drier air, which can be more comfortable but may cause issues like dry skin and respiratory discomfort.
                            </AppTypography>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}
export default Details