import { useContext, useState } from "react";
import Group from "../../../components/settings/group"
import theme from "../../../styles/theme"
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from "../../../context/authcontext";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import { ActivityIndicator, Modal, TouchableOpacity, View } from "react-native";
import AppTypography from "../../../styles/components/appTypography";
import Button from "../../../components/button/button";
import { hexOpacity } from "../../../utils/hexOpacity";
import Flex from "../../../styles/components/flex";
import Divider from "../../../components/divider/divider";
import { TypographyBold } from "../../../styles/components/types";
import Confirmation from "../../../components/modal/confirmation";

const Logout = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [logoutLoading, setLogoutLoading] = useState(false)
    const options = [
        {
            title : "Logout",
            color : theme.colors.red.red3,
            icon : <FontAwesome
                name="power-off"
                size={18}
                color={theme.colors.red.red3}
            />,
            right : logoutLoading ?
                <ActivityIndicator
                    color={theme.colors.main.primary} 
                    size={'small'}
                />
                :
                <AntIcon
                    color={theme.colors.red.red3}
                    name="right"
                    size={12}
                    />,
            onPress : ()=>setIsModalVisible(true)
        },
    ]

    return (
        <>
            <Group 
                options={options}
            />
            <Confirmation 
                isVisible={isModalVisible}
                setIsVisible={setIsModalVisible}
            />
        </>
    )
}
export default Logout