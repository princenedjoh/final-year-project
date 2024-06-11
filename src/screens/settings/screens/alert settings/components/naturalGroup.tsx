import Group from "../../../../../components/settings/group";
import theme from "../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign';

const NaturalDisasterGroup = () => {
    const options = [
        {
            title : "Earth quakes",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
        },
        {
            title : "Floods",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
        },
        {
            title : "Wild fires",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
        },
        {
            title : "Hurricanes",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />
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