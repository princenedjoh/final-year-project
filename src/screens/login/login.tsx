import { NavigationProp, useNavigation } from "@react-navigation/native"
import Safescroll from "../../components/safescroll"
import Flex from "../../styles/components/flex"
import { sizes } from "../../utils/sizes"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import Input from "../../components/input/input"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from "../../styles/theme"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from "../../components/button/button"
import { ActivityIndicator, TouchableOpacity } from "react-native"
import { useContext, useState } from "react"
import { useToast } from "react-native-toast-notifications";
import { publicAPI } from "../../api/api"
import { screenNames } from "../../constants/screennames"
import { AuthContext } from "../../context/authcontext"
import { retrieveToken, setIsUserLoggedin, storeRefreshToken, storeToken } from "../../context/asyncStorage"

const Login = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const navigate = useNavigation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setToken, setRefreshToken, token, setIsLoggedIn, handleLogout } = useContext(AuthContext)

    const toast = useToast()
    const login = async () => {
        const {response, error} = await publicAPI.post('users/login/', {
            username : username,
            password : password
        })
        console.log({response, error})
        if(response){
            setTokens(response.access, response.refresh)
            return {response}
        }
        if(error){
            handleLogout()
            return {error}
        }
        return {error : 'Failed to login'}
    }
    const setTokens = async (token : string, refreshToken : string) => {
        setToken(token)
        setRefreshToken(refreshToken)
        setIsLoggedIn(true)
        await storeToken(token)
        await storeRefreshToken(refreshToken)
        await setIsUserLoggedin()
    }

    const handleLogin = async () => {
        setLoading(true)
        const {response, error} = await login()
        if(response){
            toast.show('Login successful!', {
                type : 'success',
                placement : 'bottom'
            })
            navigate.goBack()
            return setLoading(false)
        }
        if(error){
            toast.show('something happened', {
                type : 'danger',
                placement : 'bottom'
            })
            return setLoading(false)
        }
        setLoading(false)
    }

    return (
        <Safescroll>
            <Flex
                direction="column"
                align="center"
                justify="center"
                paddingHorizontal={sizes.marginSM}
                height={sizes.screenHeight -100}
            >
                <Flex
                    direction="column"
                    gap={20}
                    width={'300%'}
                    maxWidth={300}
                >
                    <Flex
                        width={'auto'}
                        direction="column"
                        align="center"
                    >
                        <AppTypography
                            bold={TypographyBold.md2}
                        >
                            Welcome Back 👋
                        </AppTypography>
                        <AppTypography>
                            Login to continue
                        </AppTypography>
                    </Flex>
                    <Flex
                        width={'auto'}
                        direction="column"
                        gap={8}
                    >
                        <Flex
                            width={'auto'}
                            direction="column"
                        >
                            <AppTypography>
                                Username
                            </AppTypography>
                            <Input 
                                placeholder="Please input username"
                                rounded={7}
                                preIcon={<MaterialCommunityIcons 
                                    name="email" 
                                    color={theme.colors.dark[7]}
                                    size={TypographySize.sm}
                                />}
                                size={{
                                    height : 50
                                }}
                                value={username}
                                setValue={setUsername}
                            />
                        </Flex>
                        <Flex
                            width={'auto'}
                            direction="column"
                        >
                            <AppTypography>
                                Password
                            </AppTypography>
                            <Input 
                                placeholder="Please input password"
                                rounded={7}
                                preIcon={<FontAwesome 
                                    name="lock" 
                                    color={theme.colors.dark[7]}
                                    size={TypographySize.sm}
                                />}
                                secureTextEntry
                                size={{
                                    height : 50
                                }}
                                value={password}
                                setValue={setPassword}
                            />
                        </Flex>
                        <Button
                            size={{
                                height : 50
                            }}
                            rounded={7}
                            onPress={handleLogin}
                            loading={loading}
                        >
                            Login
                        </Button>
                        <Flex
                            width={'auto'}
                            justify="center"
                        >
                            <AppTypography>
                                Dont't have an account?
                            </AppTypography>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate(screenNames.onBoarding)}
                            >
                                <AppTypography
                                    bold={TypographyBold.md}
                                    textColor={theme.colors.main.primary}
                                >
                                    Sign up now
                                </AppTypography>
                            </TouchableOpacity>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Login