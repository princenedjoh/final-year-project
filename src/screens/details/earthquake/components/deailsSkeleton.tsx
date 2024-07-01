import Skeleton from "../../../../components/skeleton/skeleton"
import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme"

const DetailsSkeleton = () => {
    return (
    <Skeleton
        style={{
            height:100
        }}
    >
        <Flex
            height={'100%'}
            align="center"
            justify="space-around"
        >
            {
                [1,2,3].map((items, index : number) => (
                    <Flex
                        width={'auto'}
                        direction="column"
                        align="center"
                        key={index}
                    >
                        <Skeleton
                            style={{
                                width:50,
                                height:50,
                                borderRadius:100,
                                backgroundColor:theme.colors.dark[9]
                            }}
                        ></Skeleton>
                        <Flex
                            width={'auto'}
                            direction="column"
                            align="center"
                        >
                            <Skeleton style={{
                                width:70,
                                height:5,
                                backgroundColor:theme.colors.dark[9]
                            }}></Skeleton>
                            <Skeleton style={{
                                width:40,
                                height:5,
                                backgroundColor:theme.colors.dark[9]
                            }}></Skeleton>
                        </Flex>
                    </Flex>
                ))
            }
        </Flex>
    </Skeleton>
    )
}
export default DetailsSkeleton