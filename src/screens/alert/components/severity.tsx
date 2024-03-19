import { View } from "react-native"
import { severityTypes } from "../../../utils/types"
import { getSeverityColor } from "../../../utils/getSeverityColor"

const Severity = ({
    severity
} : {
    severity? : severityTypes
}) => {

    return (
        <View
            style={{
                width : 7,
                height : 7,
                borderRadius : 100,
                backgroundColor : getSeverityColor(severity)
            }}
        >

        </View>
    )
}

export default Severity