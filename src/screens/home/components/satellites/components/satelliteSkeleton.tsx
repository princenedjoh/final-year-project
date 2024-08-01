import Skeleton from "../../../../../components/skeleton/skeleton"
import Flex from "../../../../../styles/components/flex"
import theme from "../../../../../styles/theme"

const SatelliteSkeleton = () => {
    return (
        <Flex
            width={'auto'}
            gap={15}
        >
            {
                [1,2,3,4,5,6,7].map((item, index : number)=>(
                    <Skeleton 
                        key={index}
                        style={{
                            width : 60,
                            height : 60,
                            backgroundColor : theme.colors.dark[9],
                            borderRadius : 100
                        }}
                    />
                ))
            }
        </Flex>
    )
}
export default SatelliteSkeleton