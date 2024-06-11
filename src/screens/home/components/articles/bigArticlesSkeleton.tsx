import { ScrollView, StyleSheet } from "react-native"
import Flex from "../../../../styles/components/flex"
import LargeCardSkeleton from "../../../../components/article card/largeCardSkeleton"
import { sizes } from "../../../../utils/sizes"

const BigArticleSkeleton = () => {
    return (
        <Flex
            paddingVertical={sizes.marginSM}
            direction="column"
            gap={4}
        >
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                <Flex
                    gap={8}
                >
                    {
                        [1,2,3].map((item, index) => (
                            <LargeCardSkeleton 
                                key={index}
                                size={{
                                    width : sizes.screenWidth
                                }}
                            />
                        ))
                    }
                </Flex>
            </ScrollView>
        </Flex>
    )
}

const style = StyleSheet.create({
    profileImage : {
        borderRadius : 100,
        width : 20,
        height : 20
    }
})

export default BigArticleSkeleton