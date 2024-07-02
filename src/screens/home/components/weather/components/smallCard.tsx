import { TouchableOpacity, View } from "react-native"
import { sizes } from "../../../../../utils/sizes"
import theme from "../../../../../styles/theme"
import Flex from "../../../../../styles/components/flex"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTypography from "../../../../../styles/components/appTypography";
import { TypographyBold, TypographySize } from "../../../../../styles/components/types";
import { hexOpacity } from "../../../../../utils/hexOpacity";
import { NavigationProp } from "@react-navigation/native";
import { screenNames } from "../../../../../constants/screennames";

const SmallWeatherCard = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <TouchableOpacity
            style={{
                width : sizes.screenWidth/3,
                height : sizes.screenWidth/3,
                backgroundColor : theme.colors.dark[11],
                borderRadius : 10,
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-between',
                overflow : 'hidden'
            }}
            onPress={()=>navigation.navigate(screenNames.humidity, {
                screenType : 'formSheet',
                headerShown : true
            })}
        >
            <View
                style={{
                    padding : 10,
                    width : '100%',
                    backgroundColor : theme.colors.dark[9]
                }}
            >
                <Flex
                    align="center"
                >
                    <MaterialCommunityIcons
                        name="air-humidifier"
                        size={15}
                        color={theme.colors.dark[6]}
                    />
                    <AppTypography
                        textColor={theme.colors.main.text.light}
                        bold={TypographyBold.md}
                    >
                        Humidity
                    </AppTypography>
                </Flex>
            </View>
            <Flex
                height={'100%'}
                direction="column"
                justify="space-between"
                flex={1}
                paddingHorizontal={10}
                paddingVertical={10}
            >
                <Flex
                    direction="column"
                >
                    <AppTypography
                        size={TypographySize.xl}
                        bold={TypographyBold.md2}
                        textColor={`${theme.colors.main.primary}${hexOpacity(50)}`}
                    >
                        78%
                    </AppTypography>
                </Flex>
                <AppTypography
                    textColor={`${theme.colors.main.text.light}${hexOpacity(90)}`}
                    size={TypographySize.xs}
                    bold={TypographyBold.md}
                    numberOfLines={2}
                >
                    The dew point is 74 deg right now
                </AppTypography>
            </Flex>
        </TouchableOpacity>
    )
}
export default SmallWeatherCard