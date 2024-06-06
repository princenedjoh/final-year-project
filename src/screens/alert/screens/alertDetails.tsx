import { Text, View } from "react-native"
import Header from "../../../components/header/header"
import Safescroll from "../../../components/safescroll"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
const AlertDetails = () => {
    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={12}
            >
                <Text>alert</Text>
            </Flex>
        </Safescroll>
    )
}

export default AlertDetails
