import { removeRefreshToken, removeToken, unsetIsUserLoggedin } from "../context/asyncStorage"

const logout = async () => {
    try {
        await removeToken()
        await removeRefreshToken()
        await unsetIsUserLoggedin()
    } catch (error) {
        console.log(error)
    }
}

export default logout