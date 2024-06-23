import MapView from "react-native-maps"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"

const Map = () => {
    return (
        <Flex
            direction="column"
            height={sizes.screenHeight}
        >
            <MapView
                style={{
                    width : '100%',
                    height : '100%'
                }}
            />
        </Flex>
    )
}
export default Map