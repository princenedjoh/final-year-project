import { NavigationProp } from "@react-navigation/native"
import Safescroll from "../../../../../../../../components/safescroll"
import Flex from "../../../../../../../../styles/components/flex"
import { sizes } from "../../../../../../../../utils/sizes"
import Header from "../../../../../../../../components/header/header"
import ResetGroup from "../../../../../../components/resetGroup"
import { useEffect, useState } from "react"
import SaveSettings from "../../../../../../components/rightHeaderScreen"
import LabeledInput from "../../../../../../components/labeledInput"
import Input from "../../../../../../../../components/input/input"

const DepthSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [unsavedChanges, setUnsavedChanges] = useState(false)
    const [savedDepth, setSavedDepth] = useState('5.4')
    const [depth, setDepth] = useState('5.4')
    useEffect(()=>{
        if(
            depth !== savedDepth
        ){
            setUnsavedChanges(true)
        } else {
            setUnsavedChanges(false)
        }
    },[
        depth,
        savedDepth
    ])

    const [showLoader, setShowLoader] = useState(false)

    const setValues = () => {
        depth !== savedDepth
        ? setSavedDepth(depth)
        : null
    }

    return (
        <SaveSettings
            navigation={navigation}
            unsavedChanges={unsavedChanges}
            onSave={setValues}
            title="Depth"
        >
            <Input
                value={depth}
                setValue={setDepth}
                rounded={10}
            />
        </SaveSettings>
    )
}
export default DepthSettings