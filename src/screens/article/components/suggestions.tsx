import { ScrollView, View } from "react-native"
import Flex from "../../../styles/components/flex"
import { useState } from "react"
import theme from "../../../styles/theme"
import { sizes } from "../../../utils/sizes"
import { satellites } from "../../../assets/assets"
import ImageBG from "../../../components/imgbg/imgbg"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold } from "../../../styles/components/types"
import Chip from "../../../components/chip/chip"

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
                            <Chip 
                                name={item.name}
                                key={index}
                            />
                        )
                    })
                }
            </Flex>
        </ScrollView>
    )
}

export default Suggestions