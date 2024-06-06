import { View } from "react-native"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import Description from "./description"
import Menu from "./menu"
import Samples from "./samples"
import { sizes } from "../../../utils/sizes"
import { useState } from "react"
import { NavigationProp } from "@react-navigation/native"

const Details = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Flex
            direction="column"
            gap={15}
        >
            <Menu 
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
            <Flex>
                <View
                    style={{
                        display : 'flex',
                        flexWrap : 'nowrap',
                        flexDirection : 'row',
                        transform : [{
                            translateX : - (activeIndex * sizes.screenWidth) ,
                        }],
                    }}
                >
                    <Samples 
                        navigation={navigation}
                    />
                    <Description />
                </View>
            </Flex>
        </Flex>
    )
}

export default Details