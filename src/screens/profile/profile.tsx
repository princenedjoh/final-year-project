import Flex from "../../styles/components/flex"
import { NavigationProp } from "@react-navigation/native"
import Top from "./components/top"
import Drawer from "./components/drawer"
import Edit from "./components/edit"
import { useContext, useEffect, useState } from "react"
import { protectedAPI } from "../../api/api"
import { AuthContext } from "../../context/authcontext"

const Profile = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const { isLoggedIn, handleLogout } = useContext(AuthContext)
    const [userData, setUserData] = useState<{title : string, content : string}[]>([])
    const [userInfo, setUserInfo] = useState()

    const handleLogoutAndNavigation = () => {
        handleLogout()
        navigation.goBack()
    }

    const getUserInfo = async () => {
        const {response, error} = await protectedAPI.get('users/get/')
        response 
            ? setUserInfo(response)
            : error?.message === 'unauthorized' 
            ? handleLogoutAndNavigation()
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
        <Flex
            direction="column"
            gap={12}
        >
            <Top 
                firstname={userInfo ? userInfo['first_name'] : ''}
                lastname={userInfo ? userInfo['last_name'] : ''}
                email={userInfo ? userInfo['email'] : ''}
            />
            <Drawer 
                userInfo={userData}
            />
            <Edit />
        </Flex>
    )
}

export default Profile