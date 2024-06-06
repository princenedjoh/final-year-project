import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { sizes } from "../utils/sizes"
import theme from "../styles/theme"
import AppTypography from "../styles/components/appTypography"
import Flex from "../styles/components/flex"
import AntIcon from 'react-native-vector-icons/AntDesign';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TypographySize } from '../styles/components/types';
import { searchbarprops } from "../utils/types"
import { useRef, useState } from "react"

const Searchbar = ({
    rounded
} : searchbarprops) => {

    const inputRef = useRef<TextInput>(null)
    const [focus, setInputFocus] = useState(false)
    const setFocus = () => {
        inputRef.current?.focus()
    }
    
    return (
        <TouchableOpacity
            style={{
                width : '100%',
                height : 45,
                borderColor : focus ? theme.colors.main.primary : 'none',
                borderWidth : focus ? 1 : 0,
                display : 'flex',
                justifyContent : 'center',
                borderRadius : rounded ?? 100,
                paddingHorizontal : 25,
                backgroundColor : theme.colors.dark[10],
            
            }}
            onPress={setFocus}
            activeOpacity={0.9}
        >
            <Flex
                justify="space-between"
            >
                <Flex
                    width={'auto'}
                    align="center"
                >
                    <AntIcon 
                        color={theme.colors.main.text.light}
                        name="search1"
                    />
                    <TextInput
                        ref={inputRef}
                        style={{
                            color : theme.colors.main.text.body
                        }}
                        placeholder="Search for Events &..."
                        onFocus={()=>setInputFocus(true)}
                        onBlur={()=>setInputFocus(false)}
                    />
                </Flex>
                <AwesomeIcon 
                    name="microphone" 
                    color={theme.colors.dark[7]}
                    size={TypographySize.sm}
                />
            </Flex>
        </TouchableOpacity>
    )
    
}


export default Searchbar