import { NavigationProp } from "@react-navigation/native"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import SmallWeatherCard from "./components/smallCard"
import MidWeatherCard from "./components/midWeatherCard"
import { useEffect, useState } from "react"
import { barDataItem } from "react-native-gifted-charts"
import theme from "../../../../styles/theme"
import { hexOpacity } from "../../../../utils/hexOpacity"
import { getWeather } from "../../../../api/apis/weather"
import getDayInitial from "../../../../utils/getDayInitial"

const Weather = ({
    navigation,
    refreshing
} : {
    navigation : NavigationProp<any>
    refreshing? : boolean
}) => {

    const [humidity, setHumidity] = useState<barDataItem[]>()
    const [dewpoint, setDewpoint] = useState<barDataItem[]>()
    let daily : any = []

    const getweather = async () => {
        const {response, error} = await getWeather()
        if(response){
            const {daily : dailyTimeline} = response.timelines
            daily = dailyTimeline
            getHumidity()
            getdewpoint()
        }
        if(error)
            console.log(error)
    }

    const getHumidity = () => {
        const data = daily.map((item : any, index : number) => {
            return {
                date : item.time,
                humidity : item.values.humidityAvg
            }
        })
        const humidityChartData : barDataItem[] = data.map((item : any, index : number) => ({
            value: item.humidity as number, 
            label: getDayInitial(new Date(item.date)), 
            frontColor: index % 2 === 0 ? `${theme.colors.main.primary}${hexOpacity(60)}` : 'lightgray'
        }))
        setHumidity(humidityChartData)
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
            label: getDayInitial(new Date(item.date)), 
            frontColor: index % 2 === 0 ? `${theme.colors.main.primary}${hexOpacity(60)}` : 'lightgray'
        }))
        setDewpoint(dewpointChartData)
    }

    useEffect(()=>{
        setDewpoint(undefined)
        setHumidity(undefined)
        getweather()
    },[refreshing])

    useEffect(()=>{
        getweather()
    },[])

    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            justify="space-between"
            gap={8}
        >
            <SmallWeatherCard value={humidity && humidity[0].value} navigation={navigation}/>
            <MidWeatherCard value={dewpoint && dewpoint[0].value} navigation={navigation}/>
        </Flex>
    )
}
export default Weather