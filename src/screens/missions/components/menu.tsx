import { ScrollView, TouchableOpacity, View } from "react-native"
import Flex from "../../../styles/components/flex"
import theme from "../../../styles/theme"
import { useState } from "react"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import { sizes } from "../../../utils/sizes"
import Samples from "./samples"
import Description from "./description"

const Menu = ({
    activeIndex, 
    setActiveIndex
} : {
    activeIndex : number,
    setActiveIndex : React.Dispatch<React.SetStateAction<number>>
}) => {

    const [menuItems, setMenuItems] = useState([
        {
            name : 'Samples',
            active : true,
            component : Samples
        },
        {
            name : 'Description',
            active : false,
            component : Description
        },
    ])

    const setActive = (index: number) => {
        setMenuItems(prevMenuItems =>
            prevMenuItems.map((item, i) => ({
                ...item,
                active: i === index,
            }))
        );
        setActiveIndex(index)
    };

    return (
        <Flex
            direction="column"
            gap={0}
            marginTop={10}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Flex
                    marginLeft={sizes.marginSM}
                    gap={25}
                >
                    {
                        menuItems.map((item, index : number) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={()=>setActive(index)}
                                >
                                    <Flex
                                        direction="column"
                                        align="center"
                                        gap={10}
                                    >
                                        <AppTypography
                                            size={TypographySize.md}
                                            textColor={item.active ? theme.colors.main.primary : theme.colors.main.text.body}
                                            bold={item.active ? TypographyBold.md2 : TypographyBold.sm}
                                        >
                                            {item.name}
                                        </AppTypography>
                                        {
                                            item.active &&
                                            <View
                                                style={{
                                                    width : 25,
                                                    height : 2,
                                                    borderRadius : 100,
                                                    backgroundColor : theme.colors.main.primary
                                                }}
                                            >

                                            </View>
                                        }
                                    </Flex>
                                </TouchableOpacity>
                            )
                        })
                    }
                </Flex>
            </ScrollView>
            <View
                style={{
                    height : 1,
                    width : '100%',
                    backgroundColor : theme.colors.dark[9]
                }}
            >

            </View>
        </Flex>
    )
}

export default Menu