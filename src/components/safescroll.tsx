import { ReactNode } from "react"
import { SafeAreaView, ScrollView } from "react-native"
import Flex from "../styles/components/flex"

const Safescroll = ({
    children,
    refreshControl
} : {
    children? : ReactNode
    refreshControl? : any
}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#fff",
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={refreshControl}
            >
                { children }
            </ScrollView>
            <Flex
                width={'auto'}
                height={20}
            >
            </Flex>
        </SafeAreaView>
    )
}

export default Safescroll