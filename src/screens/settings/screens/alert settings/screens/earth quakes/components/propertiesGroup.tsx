import { NavigationProp } from "@react-navigation/native";
import Group from "../../../../../../../components/settings/group";
import theme from "../../../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';
import { screenNames } from "../../../../../../../constants/screennames";

const PropertiesGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const options = [
        {
            title : "Location",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.locationSettings)
        },
        {
            title : "Magnitude",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.magnitudeSettings)
        },
        {
            title : "Depth",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.depthSettings)
        },
    ]

    return (
        <Group 
            title="Properties"
            options={options}
        />
    )
}
export default PropertiesGroup