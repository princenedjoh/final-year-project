import { Switch } from "react-native"

const SwitchButton = ({
    isEnabled,
    setIsEnabled
} : {
    isEnabled : boolean,
    setIsEnabled : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <Switch
            style={{
                height : 25,
                position : 'relative',
                marginTop : -25,
                top : 9
            }}
            onValueChange={()=>setIsEnabled(!isEnabled)}
            value={isEnabled}
        />
    )
}
export default SwitchButton