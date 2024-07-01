import { StyleProp, View, ViewStyle } from "react-native";
import theme from "../../../styles/theme"
import { hexOpacity } from "../../../utils/hexOpacity"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ReactNode } from "react";

const IconContainer = ({
    icon,
    color,
    outterStyle,
    innerStyle
} : {
    icon : ReactNode,
    color? : string
    outterStyle? : StyleProp<ViewStyle>
    innerStyle? : StyleProp<ViewStyle>
}) => {
    return (
        <View
            style={[{
                backgroundColor : `${color}${hexOpacity(20)}` ?? `${theme.colors.dark[5]}${hexOpacity(20)}`,
                width : 50,
                height : 50,
                padding : 5,
                borderRadius : 100,
                elevation : 10,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
            }, outterStyle]}
        >
            <View
                style={[{
                    backgroundColor : color ?? `${theme.colors.dark[5]}`,
                    width : '100%',
                    height : '100%',
                    padding : 10,
                    borderRadius : 100,
                    elevation : 10,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
                }, innerStyle]}
            >
                {
                    icon ??
                    <MaterialIcons
                        name="date-range"
                        color={'white'}
                        size={20}
                    />
                }
            </View>
        </View>
    )
}
export default IconContainer