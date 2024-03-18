import { ScrollView, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { useState } from "react"
import theme from "../../../styles/theme"
import { sizes } from "../../../utils/sizes"
import { satellites } from "../../../assets/assets"
import ImageBG from "../../../components/imgbg/imgbg"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold } from "../../../styles/components/types"

const Suggestions = () => {

    const [suggestionList, setSuggestionList] = useState([
        {
            name : 'Earth Quakes',
            route : satellites.modis
        },
        {
            name : 'Land slides',
            route : satellites.sentinel
        },
        {
            name : 'United states',
            route : satellites.geos
        },
        {
            name : 'Atlantic ocean',
            route : satellites.landsat
        }
    ])

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            <Flex 
                gap={10}
                marginHorizontal={sizes.marginSM}
            >
                {
                    suggestionList.map((item, index : number) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    padding : 7,
                                    paddingHorizontal : 10,
                                    borderWidth : 1,
                                    borderRadius : 100,
                                    borderColor : theme.colors.dark[9]
                                }}
                            >
                                <AppTypography>
                                    {item.name}
                                </AppTypography>
                            </View>
                        )
                    })
                }
            </Flex>
        </ScrollView>
    )
}

export default Suggestions