import { ScrollView, TouchableHighlight } from "react-native"
import Flex from "../../../../styles/components/flex"
import { useState } from "react"
import { sizes } from "../../../../utils/sizes"
import { satellites } from "../../../../assets/assets"
import ImageBG from "../../../../components/imgbg/imgbg"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold } from "../../../../styles/components/types"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../../../constants/screennames"
import axios from "axios"
import theme from "../../../../styles/theme"

const Satellites = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const [data, setData] = useState([1,2,3,4,5,6,7,8])
    const satelliteslist = [
        {
            name : 'MODIS',
            image : satellites.modis
        },
        {
            name : 'Sentinel',
            image : satellites.sentinel
        },
        {
            name : 'GEOS',
            image : satellites.geos
        },
        {
            name : 'Landsat',
            image : satellites.landsat
        },
        {
            name : 'NOAA',
            image : satellites.noaa
        }
    ]

    const get = async () => {
        try {
            const result = await axios.get("http://100.66.3.129:8000")
            console.log(result.data)
        } catch (error : any) {
            console.log(error)
        }
    }

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
                    satelliteslist.map((item, index : number) => {
                        return (
                            <TouchableHighlight
                                key={index}
                                underlayColor={'none'}
                                onPress={()=>{
                                    get()
                                    return navigation.navigate(screenNames.missions)
                                }}
                            >
                                <Flex
                                    direction="column"
                                    align="center"
                                    width={'auto'}
                                >
                                    <ImageBG
                                        source={item.image}
                                        width={60}
                                        height={60}
                                        rounded={100}
                                        resizeMode="contain"
                                        bgcolor="white"
                                        style={{
                                            backgroundColor : theme.colors.dark[10]
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
                }
            </Flex>
        </ScrollView>
    )
}

export default Satellites