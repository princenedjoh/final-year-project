import { TouchableOpacity } from 'react-native';
import Flex from '../../../../styles/components/flex';
import AppTypography from '../../../../styles/components/appTypography';
import { TypographyBold } from '../../../../styles/components/types';
import theme from '../../../../styles/theme';
import { useState } from 'react';
import React from 'react';
import { hexOpacity } from "../../../../utils/hexOpacity";

const PredictionTab = () => {
    
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
            gap={10}
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
    )
}
export default PredictionTab