import AppTypography, { Title } from "../../../../styles/components/appTypography";
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes";
import theme from "../../../../styles/theme";
import { ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import AlertContainer from "./alertContainer";
import { screenNames } from "../../../../constants/screennames";
import AlertCard from "../../../alert/components/alertCard";
import Hr from "../../../../styles/components/hr";

const AlertSection = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const [data, setData] = useState([1,2,3])

    return (
        <Flex
            direction="column"
            gap={6}
        >
            <Flex
                paddingHorizontal={sizes.marginSM}
                align="center"
            >
                <Title>
                    Alerts
                </Title>
            </Flex>
            <Flex
                direction="column"
                paddingHorizontal={sizes.marginSM}
                gap={8}
            >
                {
                data.map((items, index : number) => {
                    return (
                        <Flex 
                            key={index}
                            direction="column"
                            gap={10}
                        >
                            <AlertCard 
                                key={index}
                                navigation={navigation}
                            />
                            {
                                index < data.length - 1 &&
                                <Hr
                                    marginLeft={85}
                                />
                            }
                        </Flex>
                    )
                })
            }
            </Flex>
            <Flex
                paddingHorizontal={sizes.marginSM}
            >
                <TouchableOpacity
                    onPress={()=>navigation.navigate(screenNames.alert)}
                >
                    <AppTypography
                        textColor={theme.colors.blue.blue3}
                    >
                        See more...
                    </AppTypography>
                </TouchableOpacity>
            </Flex>
        </Flex>
    )
}

export default AlertSection