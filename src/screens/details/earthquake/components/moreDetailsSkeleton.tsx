import { View } from "react-native"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import Skeleton from "../../../../components/skeleton/skeleton"

const MoreDetailsSkeleton = () => {

    return (
        <View>
            <Flex
                align="center"
                gap={6}
            >
                <Skeleton
                    style={{ 
                        width: 70,
                        height : 70,
                        borderRadius : 100
                     }}
                >

                </Skeleton>
                <Flex
                    direction="column"
                    gap={3}
                    flex={1}
                >
                    {
                        [1].map((item, index) => (
                            <Skeleton
                                key={index}
                                style={{ 
                                    width: '100%',
                                    height : 15,
                                    borderRadius : 5
                                }}
                            >

                            </Skeleton>
                        ))
                    }
                    <Skeleton
                        style={{ 
                            width: '80%',
                            height : 15,
                            borderRadius : 5
                        }}
                    >

                    </Skeleton>
                    <Skeleton
                        style={{ 
                            width: '30%',
                            height : 15,
                            borderRadius : 5
                        }}
                    />
                </Flex>
            </Flex>
        </View>
    )
}

export default MoreDetailsSkeleton