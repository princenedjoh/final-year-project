import { TouchableOpacity, View } from "react-native"
import Barchart from "../../../components/barChart"
import Flex from "../../../../../../../styles/components/flex"
import { useEffect, useState } from "react"
import theme from "../../../../../../../styles/theme"
import { hexOpacity } from "../../../../../../../utils/hexOpacity"
import AppTypography from "../../../../../../../styles/components/appTypography"
import { TypographyBold } from "../../../../../../../styles/components/types"
import { barDataItem } from "react-native-gifted-charts"
import { getWeather } from "../../../../../../../api/apis/weather"

const DewPointChart = () => {
    const [dewpoint, setDewpoint] = useState<barDataItem[]>()
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
    let daily : any = []

    const getweather = async () => {
        const {response, error} = await getWeather()
        if(response){
            const {daily : dailyTimeline} = response.timelines
            daily = dailyTimeline
            getdewpoint()
        }
        if(error)
            console.log(error)
    }

    const getdewpoint = () => {
        const data = daily.map((item : any, index : number) => {
            return {
                date : item.time,
                dewpoint : item.values.dewPointAvg
            }
        })
        const dewpointChartData : barDataItem[] = data.map((item : any, index : number) => ({
            value: item.dewpoint as number, 
            label: getDayInitial(item.date), 
            frontColor: index % 2 === 0 ? `${theme.colors.main.primary}${hexOpacity(60)}` : 'lightgray'
        }))
        setDewpoint(dewpointChartData)
    }

    useEffect(()=>{
        getweather()
    },[])

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
            <Barchart barchartData={dewpoint}/>
        </Flex>
    )
}
export default DewPointChart