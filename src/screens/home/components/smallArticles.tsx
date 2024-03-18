import { Image, StyleSheet, View } from "react-native"
import theme from "../../../styles/theme"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import LargeCard from "../../../components/article card/largeCard"
import AwesomeIcon6 from 'react-native-vector-icons/FontAwesome6';
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import { images } from "../../../assets/assets"
import SmallCard from "../../../components/article card/smallCard"
import { useState } from "react"
import Hr from "../../../styles/components/hr"

const SmallArticles = () => {

    const [data, setData] = useState([1,2,3,4,5,6])

    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            paddingVertical={sizes.marginSM}
            direction="column"
            gap={10}
        >
            {
                data.map((item, index : number) => {
                    return (
                        <Flex 
                            key={index}
                            direction="column"
                            gap={10}
                        >
                            <SmallCard />
                            {
                                index < data.length &&
                                <Hr 
                                    marginLeft={85}
                                />
                            }
                        </Flex>
                    )
                })
            }
        </Flex>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 20,
        height : 20
    }
})

export default SmallArticles