import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../../../../../../styles/theme';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { NavigationProp } from '@react-navigation/native';
import Group from '../../../../../../../components/settings/group';
import { screenNames } from '../../../../../../../constants/screennames';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HumiditySettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const options = [
        {
            title : "Dew Point Settings",
            icon : <FontAwesome
                name="gear"
                size={18}
                color={theme.colors.dark[4]}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : ()=>navigation.navigate(screenNames.earhQuakeSettings, {screenType : 'formSheet'})
        },
    ]

    return (
        <Group
            title="Settings"
            style={{
                backgroundColor : theme.colors.dark[9],
            }}
            options={options}
        />
    )
}
export default HumiditySettings