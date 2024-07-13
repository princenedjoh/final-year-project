import { images } from "../../../assets/assets"
import Chip from "../../../components/chip/chip"
import ImageBG from "../../../components/imgbg/imgbg"
import AppTypography from "../../../styles/components/appTypography"
import Flex from "../../../styles/components/flex"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import theme from "../../../styles/theme"
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Severity from "./severity"
import { getSeverityColor } from "../../../utils/getSeverityColor"
import { TouchableHighlight, TouchableOpacity } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../../constants/screennames"
import getDate, { getRelativeTime } from "../../../utils/getDate"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { alertDataTypes } from "../../../utils/types"
import { useEffect, useState } from "react"
import { getCountryFromCoordinates, getCountrynameandIso } from "../../../utils/getCountryFromCordinates"
import Divider from "../../../components/divider/divider"
import axios from "axios"
import Flag from "./flag"

const AlertCard = ({
    navigation,
    data
} : {
    navigation : NavigationProp<any>,
    data : alertDataTypes
}) => {

    const [iso, setiso] = useState<string>()
    const [countryName, setCountryName] = useState<string | null>()
    const coordinates = JSON.parse(data.data).coordinates
    const place = JSON.parse(data.data).place

    const getCountryDetails = async () => {
        const {countryName, iso} = await getCountrynameandIso(coordinates)
        countryName && setCountryName(countryName)
        iso && setiso(iso)
    } 

    useEffect(()=>{
        getCountryDetails()
    },[])
    return (
        <TouchableOpacity
            onPress={
                data.category === 'earthquake'
                    ? ()=>navigation.navigate(screenNames.earthquakeDetails, {id : data.id})
                    : ()=>navigation.navigate(screenNames.earthquakeDetails, {id : data.id})
            }
        >
            <Flex
                align="center"
                gap={6}
            >
                {
                    data.image ?
                    <ImageBG
                        source={data.image}
                        width={80}
                        height={80}
                    >
                        
                    </ImageBG>
                    :
                    <Flex
                        width={80}
                        height={80}
                        justify="center"
                        align="center"
                        background={theme.colors.dark[11]}
                        rounded={5}
                    >
                        {
                            iso ?
                            <Flag iso={iso}/>
                            :
                            <MaterialIcons 
                                name="crisis-alert"
                                size={30}
                                color={theme.colors.red.red4}
                            />
                        }
                    </Flex>
                }
                <Flex
                    direction="column"
                    gap={1}
                    flex={1}
                >
                    <Flex
                        align="center"
                        gap={10}
                    >
                        <AppTypography
                            size={TypographySize.xs}
                            bold={TypographyBold.md}
                            textColor={getSeverityColor('critical')}
                        >
                            {data.category}
                        </AppTypography>
                        <AwesomeIcon 
                            name='map' 
                            color={theme.colors.main.primary}
                            size={10}
                        />
                        <Severity severity="critical" />
                    </Flex>
                    <AppTypography
                        size={TypographySize.md2}
                        textColor={theme.colors.main.text.head}
                        bold={TypographyBold.md}
                        numberOfLines={1}
                    >
                        {data.title}
                    </AppTypography>
                    <AppTypography
                        numberOfLines={2}
                    >
                        {data.description}
                    </AppTypography>
                    <Flex
                        width={'auto'}
                        marginTop={3}
                        align="center"
                    >
                        <AppTypography
                            size={TypographySize.xs}
                            bold={TypographyBold.md}
                            textColor={theme.colors.main.text.body}
                        >
                            {getRelativeTime(new Date(data.date))}
                        </AppTypography>
                        <Divider 
                            size={{
                                width : 1,
                                height : '100%'
                            }}
                        />
                        <AppTypography
                            size={TypographySize.xs}
                            bold={TypographyBold.md}
                            textColor={theme.colors.main.primary}
                            numberOfLines={1}
                        >
                            {countryName ?? place}
                        </AppTypography>
                    </Flex>
                </Flex>
            </Flex>
        </TouchableOpacity>
    )
}

export default AlertCard