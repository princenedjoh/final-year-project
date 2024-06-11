import Group from "../../../../../components/settings/group";
import theme from "../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';

const EnvironmentalGroup = () => {
    const options = [
        {
            title : "Air quality",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
        },
        {
            title : "Water quality",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
        },
        {
            title : "Landslides",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
        },
        {
            title : "Drought",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
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