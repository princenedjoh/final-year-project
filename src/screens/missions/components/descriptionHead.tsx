import { TouchableOpacity, View } from "react-native"
import Flex from "../../../styles/components/flex"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import AntDesign from 'react-native-vector-icons/AntDesign'

export interface itemsTypes {
    description: string;
    active: boolean;
    title : string
}

const DescriptionHead = ({
    open,
    setItems,
    items,
    index
} : {
    open : boolean,
    items : itemsTypes[],
    setItems : React.Dispatch<React.SetStateAction<itemsTypes[]>>,
    index : number
}) => {

    const setActive = () => {
        setItems(
            prev => 
                prev.map((item, i : number) => 
                    ({...item, active : i === index ? !open : item.active}))
        )
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={setActive}
        >
            <View
                style={{
                    padding : 15,
                    paddingHorizontal : 20,
                    borderTopRightRadius : 10,
                    borderTopLeftRadius : 10,
                    borderRadius : 3,
                    backgroundColor : `${theme.colors.dark[9]}80`,
                    width : '100%'
                }}
            >
                <Flex
                    justify="space-between"
                >
                    <AppTypography
                        bold={TypographyBold.md2}
                    >
                        {items[index].title}
                    </AppTypography>
                    <AntDesign 
                        name="caretright"
                        color={theme.colors.dark[6]}
                        style={{
                            transform : [{
                                rotate : open ? '90deg' : '0deg'
                            }]
                        }}
                    />
                </Flex>
            </View>
        </TouchableOpacity>
    )
}

export default DescriptionHead