import { useState } from "react";
import Group from "../../../../../components/settings/group";
import theme from "../../../../../styles/theme";
import AntIcon from 'react-native-vector-icons/AntDesign'
import { NavigationProp } from "@react-navigation/native";
import { screenNames } from "../../../../../constants/screennames";

const CategoryGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const options = [
        {
            title : "Articles",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
            />,
            onPress : ()=>navigation.navigate(screenNames.savedArticlesSettings)
        },
        {
            title : "Alerts",
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
            />,
            onPress : ()=>navigation.navigate(screenNames.savedAlertSettings)
        },
    ]

    return (
        <>
            <Group 
                options={options}
            />
        </>
    )
}
export default CategoryGroup