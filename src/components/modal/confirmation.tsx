import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native"
import { useToast } from "react-native-toast-notifications";
import { AuthContext } from "../../context/authcontext";
import theme from "../../styles/theme";
import { hexOpacity } from "../../utils/hexOpacity";
import Flex from "../../styles/components/flex";
import AppTypography from "../../styles/components/appTypography";
import Divider from "../divider/divider";
import { TypographyBold } from "../../styles/components/types";

const Confirmation = ({
    isVisible,
    setIsVisible
} : {
    isVisible : boolean,
    setIsVisible : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const navigation = useNavigation();
    const toast = useToast()

    const { setToken, setRefreshToken, setIsLoggedIn } = useContext(AuthContext)
    const [logoutLoading, setLogoutLoading] = useState(false)
    const logout = () => {
        try {
            setLogoutLoading(true)
            setToken(undefined)
            setRefreshToken(undefined)
            setIsLoggedIn(false)
            toast.show('Logged out successful',{
                placement : 'top'
            })
            setLogoutLoading(false)
            navigation.goBack()
        } catch (error) {
            console.log(error)
            setLogoutLoading(false)
        }
    }

    return (
        <Modal
            animationType="fade" 
            transparent={true} 
            visible={isVisible}
            style={{
                backgroundColor : theme.colors.dark[2]
            }}
        >
            <View
                style={{ 
                    width : '100%',
                    height : '100%',
                    backgroundColor: `${theme.colors.dark[1]}${hexOpacity(70)}`, 
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
                    }}
            >
                <View 
                    style={{
                        backgroundColor: 'white', 
                        borderRadius : 10,
                        display : 'flex',
                        justifyContent : 'center',
                        maxWidth : 250,
                        width : '100%'
                    }}
                >
                    <Flex
                        paddingHorizontal={30}
                        paddingVertical={30}
                        direction="column"
                    >
                        <Flex
                            justify="center"
                        >
                            <AppTypography
                                bold={TypographyBold.md}
                            >
                                Confirmation!
                            </AppTypography>
                        </Flex>
                        <AppTypography>
                            Are you sure you want to Logout?
                        </AppTypography>
                    </Flex>
                    <Divider
                        size={{
                            height : 1,
                            width : '100%'
                        }}
                    />
                    <Flex>
                        <Flex
                            justify="center"
                            flex={1}
                        >
                            <TouchableOpacity
                                style={{
                                    paddingVertical : 10
                                }}
                                onPress={()=>setIsVisible(false)}
                            >
                                <AppTypography
                                    bold={TypographyBold.md}
                                    textColor={theme.colors.main.primary}
                                >
                                    Cancel
                                </AppTypography>
                            </TouchableOpacity>
                        </Flex>
                        <View
                            style={{
                                width : 1,
                                height : '100%',
                                backgroundColor : theme.colors.dark[9]
                            }}
                        >

                        </View>
                        <Flex
                            justify="center"
                            flex={1}
                        >
                            <TouchableOpacity
                                style={{
                                    paddingVertical : 10
                                }}
                                onPress={logout}
                            >
                                <AppTypography
                                    bold={TypographyBold.md}
                                    textColor={theme.colors.main.primary}
                                >
                                    Yes
                                </AppTypography>
                            </TouchableOpacity>
                        </Flex>
                    </Flex>
                </View>
            </View>
        </Modal>
    )
}
export default Confirmation