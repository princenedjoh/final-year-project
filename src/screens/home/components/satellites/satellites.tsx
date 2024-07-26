import { ScrollView, TouchableHighlight } from "react-native"
import Flex from "../../../../styles/components/flex"
import { useEffect, useState } from "react"
import { sizes } from "../../../../utils/sizes"
import { satellites } from "../../../../assets/assets"
import ImageBG from "../../../../components/imgbg/imgbg"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold } from "../../../../styles/components/types"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../../../constants/screennames"
import axios from "axios"
import theme from "../../../../styles/theme"
import { getPrismicData } from "../../../../api/prismic"
import SatelliteSkeleton from "./components/satelliteSkeleton"

const Satellites = ({
    navigation,
    refreshing
} : {
    navigation : NavigationProp<any>
    refreshing? : boolean
}) => {
    const [missionData, setMissionData] = useState<'loading' | any>('loading')

    const getData = async () => {
        const data = await getPrismicData()
        const filteredData = data.results.filter((item : any, index : number) => item.type === 'satellite_missions')
        if(filteredData)
            setAllMissionsData(filteredData)
    }

    const setAllMissionsData = (data : any) => {
        console.log({name : data[3].data.name[0].text})
        const filteredData = data.map((item : any, index : number) => ({
            name : item.data.name[0].text,
            image : item.data.logo_image.url,
            descriptionData : [
                {
                    name : 'Agencies',
                    value : item.data.agencies.map((item : any)=> item.agencies1),
                    active : true
                },
                {
                    name : 'Satellites',
                    value : item.data.satellites.map((item : any)=> item.satellites1),
                    active : true
                },
                {
                    name : 'Sensors',
                    value : item.data.sensors.map((item : any)=> item.sensors1),
                    active : true
                },
                {
                    name : 'Products',
                    value : item.data.products.map((item : any)=> item.products1),
                    active : true
                },
                {
                    name : 'Goals',
                    value : item.data.goals,
                    active : true
                }
            ],
            description : item.data.description[0]?.text,
            date : item.data.date_launched,
            coordinates : item.data.coordinates,
        }))
        setMissionData(filteredData)
    }

    useEffect(()=>{
        if(refreshing){
            setMissionData(refreshing ? 'loading' : "loading")
            getData()
        }
    }, [refreshing])

    useEffect(()=>{
        getData()
    },[])

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            <Flex 
                gap={17}
                marginHorizontal={sizes.marginSM}
                marginTop={10}
            >
                {
                    missionData !== 'loading'
                    ?
                    missionData.map((item : any, index : number) => {
                        return (
                            <TouchableHighlight
                                key={index}
                                underlayColor={'none'}
                                onPress={()=>{
                                    return navigation.navigate(screenNames.missions, {data : item})
                                }}
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    width={'auto'}
                                >
                                    <ImageBG
                                        source={{uri : item.image}}
                                        width={60}
                                        height={60}
                                        rounded={100}
                                        resizeMode="contain"
                                        bgcolor="white"
                                        style={{
                                            backgroundColor : 'white'
                                        }}
                                    >

                                    </ImageBG>
                                    <AppTypography
                                        bold={TypographyBold.md}
                                    >
                                        {item.name}
                                    </AppTypography>
                                </Flex>
                            </TouchableHighlight>
                        )
                    })
                    :
                    <SatelliteSkeleton />
                }
            </Flex>
        </ScrollView>
    )
}

export default Satellites