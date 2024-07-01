import Flex from "../../../styles/components/flex"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from "../../../styles/theme";
import AppTypography from "../../../styles/components/appTypography";
import { TypographyBold } from "../../../styles/components/types";

const NoAlerts = () => {
    return (
        <Flex
            height={100}
            justify="center"
            align="center"
            direction="column"
            background={theme.colors.dark[11]}
            rounded={10}
        >
            <MaterialCommunityIcons
                name="alert-octagon"
                size={30}
                color={theme.colors.dark[7]}
            />
            <AppTypography
                bold={TypographyBold.md}
            >
                No Alerts
            </AppTypography>
        </Flex>
    )
}
export default NoAlerts