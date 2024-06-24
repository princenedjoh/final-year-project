import { NavigationProp } from "@react-navigation/native"
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native"
import theme from "../../../styles/theme"
import Flex from "../../../styles/components/flex"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import { images } from "../../../assets/assets"
import { sizes } from "../../../utils/sizes"
import AntIcon from 'react-native-vector-icons/AntDesign';
import { screenNames } from "../../../constants/screennames"
import Button from "../../../components/button/button"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../context/authcontext"
import { protectedAPI } from "../../../api/api"
import { retrieveIsUserLoggedin } from "../../../context/asyncStorage"

const Profile = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const {isLoggedIn, handleLogout} = useContext(AuthContext)
    const [userData, setUserData] = useState<{title : string, content : string}[]>([])
    const [userInfo, setUserInfo] = useState()

    const getUserInfo = async () => {
        const {response, error} = await protectedAPI.get('users/get/')
        response 
            ? setUserInfo(response)
            : error?.message === 'unauthorized' 
            ? handleLogout()
            : null
    }

    useEffect(()=>{
        if(isLoggedIn)
            getUserInfo()
    }, [isLoggedIn])

    useEffect(()=>{
        if(userInfo){
            const userDataCopy = []
            userDataCopy.push({title : 'username', content : userInfo['username']})
            userDataCopy.push({title : 'First Name', content : userInfo['first_name']})
            userDataCopy.push({title : 'Last Name', content : userInfo['last_name']})
            userDataCopy.push({title : 'Email', content : userInfo['email']})
            userDataCopy.push({title : 'Gender', content : userInfo['gender']})
            setUserData([...userDataCopy])
        }
    }, [userInfo])

    return (
        !isLoggedIn ?
        <Flex
            justify="center"
            align="center"
            height={100}
        >
            <Button
                onPress={()=>navigation.navigate(screenNames.login)}
                size={{
                    width : 100,
                }}
                paddingVertical={12}
            >
                Login
            </Button>
        </Flex>
        :
        <TouchableOpacity
            onPress={()=>navigation.navigate(screenNames.profile)}
            style={{
                width : '100%',
                paddingVertical : 20,
                borderRadius : 15,
                backgroundColor : theme.colors.dark[10]
            }}
        >
            {
                userInfo ?
                <Flex
                    justify="space-between"
                    paddingHorizontal={sizes.marginSM}
                    align="center"
                >
                    <Flex
                        width={'auto'}
                        align="center"
                        gap={0}
                    >
                        <Image
                            style={{
                                borderRadius : 100,
                                width : 50,
                                height : 50,
                                marginRight : 10
                            }}
                            source={images.profile1}
                        ></Image>
                        <Flex
                            direction="column"
                            width={'auto'}
                            gap={0}
                        >
                            <Flex>
                                <AppTypography
                                    bold={TypographyBold.md2}
                                    size={TypographySize.md}
                                >
                                    {userInfo && userInfo['first_name']}
                                </AppTypography>
                                <AppTypography
                                    bold={TypographyBold.md2}
                                    size={TypographySize.md}
                                >
                                    {userInfo && userInfo['last_name']}
                                </AppTypography>
                            </Flex>
                            <AppTypography
                                size={TypographySize.xs}
                            >
                                {userInfo && userInfo['email']}
                            </AppTypography>
                        </Flex>
                    </Flex>
                    <AntIcon 
                        color={theme.colors.main.text.light}
                        name="right"
                        size={15}
                    />
                </Flex>
                :
                <Flex
                    justify="center"
                >
                    <ActivityIndicator
                        color={theme.colors.main.primary} 
                        size={'small'}
                    />
                </Flex>
            }
        </TouchableOpacity>
    )
}

export default Profile