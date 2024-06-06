import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Safescroll from "../../components/safescroll"
import Flex from "../../styles/components/flex"
import { NavigationProp } from "@react-navigation/native"
import theme from "../../styles/theme"
import { images, satellites } from "../../assets/assets"
import ImageBG from "../../components/imgbg/imgbg"
import { LinearGradient } from "expo-linear-gradient"
import Top from "./components/top"
import Info from "./components/info"
import Menu from "./components/menu"
import Details from "./components/details"

const Missions = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Flex
                direction="column"
                gap={12}
                align="center"
            >
                <Top />
                <Info />
                <Details navigation={navigation}/>
            </Flex>
        </ScrollView>
    )
}

const style = StyleSheet.create({
})

export default Missions