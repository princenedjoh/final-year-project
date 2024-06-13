import { NavigationProp } from "@react-navigation/native";
import Group from "../../../components/settings/group"
import { screenNames } from "../../../constants/screennames";
import theme from "../../../styles/theme"
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AccGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const options = [
        {
            title : "Account",
            icon : <FontAwesome
                name="user"
                size={18}
                color={theme.colors.dark[4]}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.accountSettings)
        },
        {
            title : "Saved",
            icon : <FontAwesome
                name="bookmark"
                size={18}
                color={theme.colors.dark[4]}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.savedSettings)
        },
    ]

    return (
        <Group 
            options={options}
        />
    )
}
export default AccGroup