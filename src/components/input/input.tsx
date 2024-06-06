import { ReactNode, useRef, useState } from "react"
import { DimensionValue, TextInput, TouchableOpacity } from "react-native"
import theme from "../../styles/theme"
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TypographySize } from "../../styles/components/types";
import AntIcon from 'react-native-vector-icons/AntDesign';
import Flex from "../../styles/components/flex";


const Input = ({
    preIcon,
    secureTextEntry,
    postIcon,
    rounded,
    placeholder,
    size,
    paddingHorizontal,
    value,
    setValue
} : {
    preIcon? : ReactNode
    postIcon? : ReactNode
    rounded? : number
    placeholder? : string,
    size? : {
        width? : DimensionValue,
        height? : DimensionValue
    }
    secureTextEntry? : boolean,
    paddingHorizontal? : DimensionValue,
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
}) => {

    const inputRef = useRef<TextInput>(null)
    const [focus, setInputFocus] = useState(false)
    const setFocus = () => {
        inputRef.current?.focus()
    }
    
    return (
        <TouchableOpacity
            style={{
                width : size?.width ?? '100%',
                height : size?.height ?? 45,
                borderColor : focus ? theme.colors.main.primary : 'none',
                borderWidth : focus ? 1 : 0,
                display : 'flex',
                justifyContent : 'center',
                borderRadius : rounded ?? 100,
                paddingHorizontal : paddingHorizontal ?? 20,
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
                    gap={8}
                    align="center"
                >
                    {preIcon}
                    <TextInput
                        secureTextEntry={secureTextEntry}
                        ref={inputRef}
                        style={{
                            color : theme.colors.main.text.body,
                            width : '100%',
                        }}
                        placeholder={placeholder ?? "Input text here"}
                        onFocus={()=>setInputFocus(true)}
                        onBlur={()=>setInputFocus(false)}
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                    {postIcon}
                </Flex>
            </Flex>
        </TouchableOpacity>
    )
    
}


export default Input