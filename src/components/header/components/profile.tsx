import { NavigationProp } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { screenNames } from "../../../constants/screennames"
import theme from "../../../styles/theme"
import { Image } from "react-native"
import { images } from "../../../assets/assets"

const Profile = ({
    navigation
} : {
    navigation? : NavigationProp<any>
}) => {
    return (
        <TouchableOpacity
            onPress={()=>navigation?.navigate(screenNames.settings)}
            style={{
                backgroundColor : theme.colors.dark[9],
                borderRadius : 100
            }}
        >
            <Image
                style={{
                    borderRadius : 100,
                    width : 35,
                    height : 35
                }}
                source={images.profile1}
            ></Image>
        </TouchableOpacity>
    )
}
export default Profile