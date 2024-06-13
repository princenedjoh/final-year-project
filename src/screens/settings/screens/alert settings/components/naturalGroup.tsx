import { NavigationProp } from "@react-navigation/native";
import Group from "../../../../../components/settings/group";
import theme from "../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';
import { screenNames } from "../../../../../constants/screennames";

const NaturalDisasterGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const options = [
        {
            title : "Earth quakes",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.earhQuakeSettings)
        },
        {
            title : "Floods",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.floodSettings)
        },
        {
            title : "Wild fires",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.wildfireSettings)
        },
        {
            title : "Hurricanes",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.HurricaneSettings)
        },
    ]

    return (
        <Group 
            title="Natural Disasters"
            options={options}
        />
    )
}
export default NaturalDisasterGroup