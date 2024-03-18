import { ReactNode } from "react"
import { SafeAreaView, ScrollView } from "react-native"

const Safescroll = ({
    children
} : {
    children? : ReactNode
}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#fff"
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                { children }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Safescroll