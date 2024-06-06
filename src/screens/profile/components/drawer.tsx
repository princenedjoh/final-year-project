import { ActivityIndicator, ScrollView, TouchableOpacity, View } from "react-native"
import { sizes } from "../../../utils/sizes"
import AppTypography from "../../../styles/components/appTypography"
import theme from "../../../styles/theme"
import ProfileItems from "./profileItems"
import Flex from "../../../styles/components/flex"
import Button from "../../../components/button/button"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useContext, useState } from "react"
import { AuthContext } from "../../../context/authcontext"
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications"
import { retrieveRefreshToken } from "../../../context/asyncStorage"
import { profileItemsType } from "./profileItem"

const Drawer = ({
    userInfo
} : {
    userInfo : profileItemsType[]
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
        <View
            style={{
                width : '100%',
                height : sizes.screenHeight,
                backgroundColor : theme.colors.dark[10],
                paddingVertical : 20,
                position : 'relative',
                top : -100,
                borderTopLeftRadius : 30,
                borderTopRightRadius : 30
            }}
        >
            <Flex
                justify="center"
            >
                <View
                    style={{
                        width : 70,
                        height : 7,
                        backgroundColor : theme.colors.dark[7],
                        borderRadius : 100
                    }}
                >

                </View>
            </Flex>
            <ScrollView
                showsVerticalScrollIndicator    
                style={{
                    marginTop : 10
                }}
            >
                <Flex
                    direction="column"
                    gap={20}
                >
                    {
                        userInfo.length > 0 ?
                        <ProfileItems 
                            userInfo={userInfo}
                        />
                        :
                        <Flex
                            height={sizes.screenHeight - 500}
                            justify="center"
                            align="center"
                        >
                            <ActivityIndicator
                                color={theme.colors.main.primary} 
                                size={'large'}
                            />
                        </Flex>
                    }
                    <Flex
                        paddingHorizontal={20}
                        justify="center"
                    >
                        {
                            logoutLoading ?
                            <ActivityIndicator
                                color={theme.colors.main.primary} 
                                size={'small'}
                            />
                            :
                            <TouchableOpacity
                                onPress={logout}
                            >
                                <Flex
                                    align="center"
                                    justify="center"
                                >
                                    <FontAwesome
                                        name="power-off" 
                                        color={theme.colors.red.red3}
                                        size={TypographySize.sm}
                                    />
                                    <AppTypography
                                        textColor={theme.colors.red.red3}
                                        bold={TypographyBold.md2}
                                    >
                                        Logout
                                    </AppTypography>
                                </Flex>
                            </TouchableOpacity>
                        }
                    </Flex>
                </Flex>
            </ScrollView>
        </View>
    )
}

export default Drawer