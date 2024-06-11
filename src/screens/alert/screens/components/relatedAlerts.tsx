import { ScrollView, View } from "react-native"
import { Title } from "../../../../styles/components/appTypography"
import Flex from "../../../../styles/components/flex"
import { sizes } from "../../../../utils/sizes"
import { NavigationProp } from "@react-navigation/native"
import AlertCard from "../../components/alertCard"

const RelatedAlerts = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Flex
            direction="column"
        >
            <Flex
                marginLeft={sizes.marginSM}
            >
                <Title>
                    Related
                </Title>
            </Flex>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <Flex
                    gap={20}
                    marginLeft={sizes.marginSM}
                >
                    {
                        [1,2,3,4,5].map((items, index : number) => (
                            <View
                                style={{
                                    width : 280
                                }}
                                key={index}
                            >
                                <AlertCard navigation={navigation}/>
                            </View>
                        ))
                    }
                </Flex>
            </ScrollView>
        </Flex>
    )
}

export default RelatedAlerts