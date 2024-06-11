import { Animated, TouchableOpacity, View } from "react-native";
import Flex from "../../styles/components/flex"
import { useEffect } from "react";
import Skeleton from "../skeleton/skeleton";
import { sizes } from "../../utils/sizes";

const SmallCardSkeleton = () => {

    return (
        <View>
            <Flex
                align="center"
                gap={6}
                paddingHorizontal={sizes.marginSM}
            >
                <Skeleton
                    style={{ 
                        width: 100,
                        height : 100,
                        borderRadius : 10
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
                                    height : 60,
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

export default SmallCardSkeleton