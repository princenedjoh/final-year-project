import { removeRefreshToken, removeToken } from "../context/asyncStorage"

const logout = async () => {
    try {
        await removeToken()
        await removeRefreshToken()
    } catch (error) {
        console.log(error)
    }
}

export default logout