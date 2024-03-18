import { StyleSheet, View } from "react-native"
import { sizes } from "../utils/sizes"
import theme from "../styles/theme"
import AppTypography from "../styles/components/appTypography"
import Flex from "../styles/components/flex"
import AntIcon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TypographySize } from '../styles/components/types';
import { searchbarprops } from "../utils/types"

const Searchbar = ({
    rounded
} : searchbarprops) => {

    const style = StyleSheet.create({
        container : {
            width : '100%',
            height : 45,
            display : 'flex',
            justifyContent : 'center',
            borderRadius : rounded ?? 100,
            paddingHorizontal : 25,
            backgroundColor : theme.colors.dark[10],
        }
    })
    
    return (
        <View style={style.container}>
            <Flex
                justify="space-between"
            >
                <Flex
                    width={'auto'}
                    align="center"
                >
                    <AntIcon name="search1" />
                    <AppTypography
                        textColor={theme.colors.main.text.light}
                    >
                        Searth for Events &...
                    </AppTypography>
                </Flex>
                <AwesomeIcon 
                    name="microphone" 
                    color={theme.colors.dark[7]}
                    size={TypographySize.sm}
                />
            </Flex>
        </View>
    )
    
}


export default Searchbar