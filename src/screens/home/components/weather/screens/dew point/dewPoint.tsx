import { ScrollView, View } from "react-native"
import { NavigationProp } from '@react-navigation/native';
import Details from "./components/details";

const DewPoint = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <>
            <ScrollView
                style={{
                    paddingVertical : 60,
                    height : '100%'
                }}
            >
                <Details navigation={navigation}/>

                {/* to enable scrolling */}
                <View
                    style={{
                        height : 100
                    }}
                >

                </View>
            </ScrollView>
        </>
    )
}
export default DewPoint