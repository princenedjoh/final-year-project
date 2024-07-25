import { View } from "react-native";
import { BarChart, barDataItem } from "react-native-gifted-charts";
import theme from "../../../../../styles/theme";
import { hexOpacity } from "../../../../../utils/hexOpacity";
import Skeleton from "../../../../../components/skeleton/skeleton";
        
const Barchart = ({
    barchartData
} : {
    barchartData? : barDataItem[]
}) => {
    const barData : barDataItem[] | undefined = [
        {value: 2.50, label: 'M'},
        {value: 5.00, label: 'T', frontColor: `${theme.colors.main.primary}${hexOpacity(60)}`},
        {value: 7.45, label: 'W', frontColor: `${theme.colors.main.primary}${hexOpacity(60)}`},
        {value: 3.20, label: 'T'},
        {value: 6.00, label: 'F', frontColor: `${theme.colors.main.primary}${hexOpacity(60)}`},
        {value: 2.56, label: 'S'},
        {value: 3.00, label: 'S'},
    ];
    
    return (
        <View>
            {
                !barchartData ?
                <Skeleton 
                    style={{
                        width : '100%',
                        height : 200,
                        backgroundColor : theme.colors.dark[9]
                    }}
                />
                :
                <BarChart
                    barWidth={24}
                    noOfSections={3}
                    barBorderRadius={4}
                    frontColor="lightgray"
                    data={barchartData ?? barData}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    isAnimated
                />
            }
        </View>
    );
};

export default Barchart