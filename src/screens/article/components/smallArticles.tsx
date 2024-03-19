import { StyleSheet } from "react-native"
import Flex from "../../../styles/components/flex"
import { sizes } from "../../../utils/sizes"
import { Title } from "../../../styles/components/appTypography"
import SmallCard from "../../../components/article card/smallCard"
import { useState } from "react"
import Hr from "../../../styles/components/hr"
import { useNavigation } from "@react-navigation/native"

const SmallArticles = () => {

    const [data, setData] = useState([1,2,3,4,5,6])
    const navigate = useNavigation()

    return (
        <Flex
            paddingHorizontal={sizes.marginSM}
            direction="column"
            gap={10}
        >
            <Title>
                Latest
            </Title>
            {
                data.map((item, index : number) => {
                    return (
                        <Flex 
                            key={index}
                            direction="column"
                            gap={10}
                        >
                            <SmallCard />
                            {
                                index < data.length - 1 &&
                                <Hr 
                                    marginLeft={85}
                                />
                            }
                        </Flex>
                    )
                })
            }
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

export default SmallArticles