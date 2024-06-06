import { NavigationProp } from "@react-navigation/native"
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
import { useState } from "react"
import { useToast } from "react-native-toast-notifications";
import { publicAPI } from "../../api/api"
import { screenNames } from "../../constants/screennames"
import Ionicons from 'react-native-vector-icons/Ionicons';

const Register = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')
    const [loading, setLoading] = useState(false)

    const toast = useToast()

    const handleLogin = async () => {
        try {
            setLoading(true)
            const result = await publicAPI.post('users/add/', {
                username,
                password,
                first_name : firstname,
                last_name : lastname,
                email
            })
            toast.show('Registration Successful', {
                type : 'success',
                placement : 'top'
            })
            setLoading(false)
            console.log(result.data)
        } catch (error : any) {
            toast.show(error.message, {
                type : 'danger',
                placement : 'top'
            })
            console.log(error)
            setLoading(false)
        }
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
                            Hey there 👋, Welcome!
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
                                Email
                            </AppTypography>
                            <Input 
                                placeholder="Please input email"
                                rounded={7}
                                preIcon={<MaterialCommunityIcons 
                                    name="email" 
                                    color={theme.colors.dark[7]}
                                    size={TypographySize.sm}
                                />}
                                size={{
                                    height : 50
                                }}
                                value={email}
                                setValue={setEmail}
                            />
                        </Flex>
                        <Flex
                            width={'auto'}
                            direction="column"
                        >
                            <AppTypography>
                                Firstname
                            </AppTypography>
                            <Input 
                                placeholder="Please input first name"
                                rounded={7}
                                preIcon={<FontAwesome 
                                    name="user" 
                                    color={theme.colors.dark[7]}
                                    size={TypographySize.sm}
                                />}
                                size={{
                                    height : 50
                                }}
                                value={firstname}
                                setValue={setFirstname}
                            />
                        </Flex>
                        <Flex
                            width={'auto'}
                            direction="column"
                        >
                            <AppTypography>
                                Lastname
                            </AppTypography>
                            <Input 
                                placeholder="Please input lastname"
                                rounded={7}
                                preIcon={<FontAwesome 
                                    name="user" 
                                    color={theme.colors.dark[7]}
                                    size={TypographySize.sm}
                                />}
                                size={{
                                    height : 50
                                }}
                                value={lastname}
                                setValue={setLastname}
                            />
                        </Flex>
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
                                preIcon={<Ionicons 
                                    name="person-circle" 
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
                                placeholder="Please input Password"
                                rounded={7}
                                preIcon={<FontAwesome 
                                    name="lock" 
                                    color={theme.colors.dark[7]}
                                    size={TypographySize.sm}
                                />}
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
                            Register
                        </Button>
                        <Flex
                            width={'auto'}
                            justify="center"
                        >
                            <AppTypography>
                                Already have an account?
                            </AppTypography>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate(screenNames.login)}
                            >
                                <AppTypography
                                    bold={TypographyBold.md}
                                    textColor={theme.colors.main.primary}
                                >
                                    Sign in
                                </AppTypography>
                            </TouchableOpacity>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Safescroll>
    )
}

export default Register