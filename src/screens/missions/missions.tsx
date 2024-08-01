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
    navigation,
    route
} : {
    navigation : NavigationProp<any>,
    route : any
}) => {

    const data = route.params.data

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Flex
                direction="column"
                gap={12}
                align="center"
            >
                <Top 
                    profileImage={data.image}
                />
                <Info 
                    title={data.name}
                    description={data.description}
                    date={data.date}
                    coordinates={data.coordinates}
                />
                <Details 
                    navigation={navigation}
                    descriptionData={data.descriptionData}
                    title={data.name}
                />
            </Flex>
        </ScrollView>
    )
}

const style = StyleSheet.create({
})

export default Missions