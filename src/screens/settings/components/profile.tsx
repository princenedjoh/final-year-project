import { NavigationProp } from "@react-navigation/native"
import { Image, TouchableOpacity, View } from "react-native"
import theme from "../../../styles/theme"
import Flex from "../../../styles/components/flex"
import AppTypography from "../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import { images } from "../../../assets/assets"
import { sizes } from "../../../utils/sizes"
import AntIcon from 'react-native-vector-icons/AntDesign';
import { screenNames } from "../../../constants/screennames"
import Button from "../../../components/button/button"
import { useContext } from "react"
import { AuthContext } from "../../../context/authcontext"

const Profile = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const { isLoggedIn } = useContext(AuthContext)

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
                        <AppTypography
                            bold={TypographyBold.md2}
                            size={TypographySize.md}
                        >
                            Prince Nedjoh
                        </AppTypography>
                        <AppTypography
                            size={TypographySize.xs}
                        >
                            princenedjoh5@gmail.com
                        </AppTypography>
                    </Flex>
                </Flex>
                <AntIcon 
                    color={theme.colors.main.text.light}
                    name="right"
                    size={15}
                />
            </Flex>
        </TouchableOpacity>
    )
}

export default Profile