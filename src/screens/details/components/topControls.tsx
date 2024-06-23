import { Image, TouchableOpacity, View } from "react-native"
import AppTypography from "../../../styles/components/appTypography"
import { sizes } from "../../../utils/sizes"
import { hexOpacity } from "../../../utils/hexOpacity"
import { BlurView } from "expo-blur"
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from "../../../styles/theme"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { screenNames } from "../../../constants/screennames"
import { images } from "../../../assets/assets"

const TopControls = ({
    navigation,
    menuOnpress
} : {
    navigation : NavigationProp<any>
    menuOnpress? : ()=>void
}) => {
    return (
        <View
            style={{
                padding : sizes.marginSM,
                display : 'flex',
                flexDirection : 'row',
                position : 'absolute',
                top : 30,
                justifyContent : 'space-between',
                gap : 10,
                width : '100%',
                alignItems : 'center'
            }}
        >
            <View
                style={{
                    elevation : 10,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 1,
                    shadowRadius: 40,
                }}
            >
                <TouchableOpacity
                    style={{
                        width : 50,
                        height : 50,
                        borderRadius : 100,
                        backgroundColor : `#ffffff${hexOpacity(50)}`,
                        overflow : 'hidden',
                    }}
                    onPress={()=>navigation.goBack()}
                >
                    <BlurView
                        intensity={20} 
                        style={{
                            width:'100%',
                            height:'100%',
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',
                        }}
                    >
                        <Ionicons 
                            name="caret-back"
                            size={20}
                            color={theme.colors.dark[4]}
                        />
                    </BlurView>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    elevation : 10,
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 1,
                    shadowRadius: 40,
                }}
            >
                <TouchableOpacity
                    style={{
                        width : 50,
                        height : 50,
                        borderRadius : 100,
                        backgroundColor : `#ffffff${hexOpacity(50)}`,
                        overflow : 'hidden',
                    }}
                    onPress={menuOnpress ? menuOnpress : ()=>navigation.navigate(screenNames.earhQuakeSettings)}
                >
                    <BlurView
                        intensity={20} 
                        style={{
                            width:'100%',
                            height:'100%',
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',
                        }}
                    >
                        <Ionicons 
                            name="menu"
                            size={20}
                            color={theme.colors.dark[4]}
                        />
                    </BlurView>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TopControls