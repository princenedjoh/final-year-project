import { TouchableOpacity, View } from "react-native"
import Barchart from "../../../components/barChart"
import Flex from "../../../../../../../styles/components/flex"
import { useState } from "react"
import theme from "../../../../../../../styles/theme"
import { hexOpacity } from "../../../../../../../utils/hexOpacity"
import AppTypography from "../../../../../../../styles/components/appTypography"
import { TypographyBold } from "../../../../../../../styles/components/types"

const HumidityChart = () => {
    const [predictions, setPredictions] = useState([
        {
            name : 'Predictions',
            active : true,
        },
        {
            name : 'Today',
            active : false,
        }
    ])

    return (
        <Flex
            direction="column"
            gap={30}
        >
            <Flex
                justify="center"
            >
                {
                    predictions.map((item, index : number) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                backgroundColor : item.active ? `${theme.colors.main.primary}${hexOpacity(8)}` : `#000000${hexOpacity(8)}`,
                                padding : 5,
                                borderRadius : 5,
                                paddingHorizontal : 10,
                                borderWidth : item.active ? 1 : 0,
                                borderColor : `${theme.colors.main.primary}${hexOpacity(20)}`
                            }}
                        >
                            <AppTypography
                                bold={item.active ? TypographyBold.md : TypographyBold.sm}
                            >
                                {item.name}
                            </AppTypography>
                        </TouchableOpacity>
                    ))
                }
            </Flex>
            <Barchart />
        </Flex>
    )
}
export default HumidityChart