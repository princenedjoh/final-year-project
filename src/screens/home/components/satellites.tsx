import { ScrollView, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { useState } from "react"
import theme from "../../../styles/theme"
import { sizes } from "../../../utils/sizes"
import { satellites } from "../../../assets/assets"
import ImageBG from "../../../components/imgbg/imgbg"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold } from "../../../styles/components/types"

const Satellites = () => {

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

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            <Flex 
                gap={17}
                marginHorizontal={sizes.marginSM}
                marginVertical={10}
                marginBottom={15}
            >
                {
                    satelliteslist.map((item, index : number) => {
                        return (
                            <Flex
                                direction="column"
                                align="center"
                                key={index}
                                width={'auto'}
                            >
                                <ImageBG
                                    source={item.image}
                                    width={60}
                                    height={60}
                                    rounded={100}
                                    resizeMode="contain"
                                    bgcolor="white"
                                >

                                </ImageBG>
                                <AppTypography
                                    bold={TypographyBold.md}
                                >
                                    {item.name}
                                </AppTypography>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </ScrollView>
    )
}

export default Satellites