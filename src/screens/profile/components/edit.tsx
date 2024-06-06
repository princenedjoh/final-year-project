import { TouchableOpacity, View } from "react-native"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import theme from "../../../styles/theme"

const Edit = () => {

    return (
        <View
            style={{
                backgroundColor : theme.colors.dark[10],
                borderRadius : 200,
                width : 50,
                height : 50,
                position : 'absolute',
                top : 130,
                right : 40,
                overflow : 'hidden'
            }}
        >
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View
                    style={{
                        padding : 16,
                        paddingVertical : 18,
                        backgroundColor : theme.colors.main.primary,
                        display : 'flex',
                        flexDirection : 'row',
                        justifyContent : 'center',
                        alignItems : 'center',
                        width : "100%",
                        height : "100%"
                    }}
                >
                    <FontAwesome5 
                        name='user-edit'
                        color={theme.colors.dark[10]}
                        size={18}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Edit