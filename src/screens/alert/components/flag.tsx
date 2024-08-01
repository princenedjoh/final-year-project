import { View } from "react-native"
import theme from "../../../styles/theme"
import CountryFlag from "react-native-country-flag"

const Flag = ({
    iso
} : {
    iso : string
}) => {
    return (
        <View
            style={{
                width : 45,
                height : 35,
                borderRadius : 5,
                elevation : 100,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.20,
                shadowRadius: 10,
                backgroundColor : theme.colors.dark[8],
            }}
        >
            <View
                style={{
                    width : '100%',
                    height : '100%',
                    overflow : 'hidden',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                    borderRadius : 5
                }}
            >
                <CountryFlag
                    isoCode={iso}
                    size={35}
                />
            </View>
        </View>
    )
}
export default Flag