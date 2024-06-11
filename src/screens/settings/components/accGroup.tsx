import Group from "../../../components/settings/group"
import theme from "../../../styles/theme"
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AccGroup = () => {
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
                />
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
                />
        },
    ]

    return (
        <Group 
            options={options}
        />
    )
}
export default AccGroup