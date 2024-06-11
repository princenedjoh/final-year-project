import { DimensionValue, StyleSheet, View } from "react-native"
import Flex from "../../styles/components/flex"
import Skeleton from "../skeleton/skeleton"
import { sizes } from '../../utils/sizes';

const LargeCardSkeleton = ({
    size
} : {
    size? : {
        width? : DimensionValue
        height? : DimensionValue
    }
}) => {
    return (
        <View
            style={{
                paddingHorizontal : sizes.marginSM,
                width : size?.width
            }}
        >
            <Flex
                direction="column"
                width={'100%'}
            >
                <Flex>
                    <Skeleton 
                        style={{
                            height : 15,
                            width : 15,
                            borderRadius : 100
                        }}
                    />
                    <Skeleton 
                        style={{
                            height : 15,
                            width : '30%'
                        }}
                    />
                </Flex>
                <Skeleton 
                    style={{
                        width : '100%',
                        height : 120
                    }}
                />
                <Flex
                    direction="column"
                    gap={4}
                >
                    <Skeleton 
                        style={{
                            width : '90%',
                            height : 20,
                            borderRadius : 5
                        }}
                    />
                    <Skeleton 
                        style={{
                            width : '80%',
                            height : 15,
                            borderRadius : 5
                        }}
                    />
                    <Skeleton 
                        style={{
                            width : '20%',
                            height : 15,
                            borderRadius : 5
                        }}
                    />
                </Flex>
            </Flex>
        </View>
    )
}

const style = StyleSheet.create({
    imagebackground : {
        width : '100%',
        height : 150,
        borderRadius : 5,
    }
})

export default LargeCardSkeleton