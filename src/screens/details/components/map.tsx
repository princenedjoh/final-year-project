import MapView, { Marker } from "react-native-maps"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { alertDataTypes } from "../../../utils/types"
import { ReactNode, useEffect, useRef } from "react"
import { View } from "react-native"

const Map = ({
    alertData,
    markers,
} : {
    alertData : alertDataTypes,
    markers? : ReactNode[]
}) => {
    const coordinates = JSON.parse(alertData.data).coordinates
    const latitude = coordinates[1]
    const longitude = coordinates[0]

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
                initialRegion={{
                    latitude : latitude - 1/4,
                    longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                  }}
            >
                {
                    markers?.map((item, index : number)=> (
                        <View key={index}>
                            {item}
                        </View>
                    ))
                }
            </MapView>
        </Flex>
    )
}
export default Map