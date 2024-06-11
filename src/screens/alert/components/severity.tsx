import { View } from "react-native"
import { severityTypes } from "../../../utils/types"
import { getSeverityColor } from "../../../utils/getSeverityColor"

const Severity = ({
    severity,
    size
} : {
    severity? : severityTypes,
    size? : number
}) => {

    return (
        <View
            style={{
                width : size ?? 7,
                height : size ?? 7,
                borderRadius : 100,
                backgroundColor : getSeverityColor(severity)
            }}
        >

        </View>
    )
}

export default Severity