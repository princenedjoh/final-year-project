import { NavigationProp } from "@react-navigation/native";
import Group from "../../../../../components/settings/group";
import { screenNames } from "../../../../../constants/screennames";
import theme from "../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';

const EnvironmentalGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const options = [
        {
            title : "Air quality",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.airQualitySettings)
        },
        {
            title : "Water quality",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.waterQualitySettings)
        },
        {
            title : "Landslides",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.landslidesSettings)
        },
        {
            title : "Drought",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.droughtSettings)
        },
    ]

    return (
        <Group 
            title="Environmental Risks"
            options={options}
        />
    )
}
export default EnvironmentalGroup