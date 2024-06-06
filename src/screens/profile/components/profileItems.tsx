import { TouchableOpacity, View } from "react-native"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import theme from "../../../styles/theme"
import ProfileItem, { profileItemsType } from "./profileItem"
import { data } from "./data"
import { protectedAPI } from "../../../api/api"

const ProfileItems = ({
    userInfo
} : {
    userInfo : profileItemsType[]
}) => {

    return (
        <Flex
            direction="column"
            marginTop={10}
            gap={30}
        >
            {
                userInfo.map((item, index : number) => (
                    <ProfileItem 
                        key={index}
                        {...item}
                    />
                ))
            }
        </Flex>
    )
}

export default ProfileItems