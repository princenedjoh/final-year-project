import { View } from "react-native"
import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import Button from "../../../../components/button/button"
import CountryFlag from "react-native-country-flag";
import axios from "axios"
import { useEffect, useState } from "react"
import { alertDataTypes } from "../../../../utils/types"
import { getCountryFromCoordinates } from "../../../../utils/getCountryFromCordinates"

const Top = ({
    alertData
} : {
    alertData : alertDataTypes
}) => {
    const [iso, setiso] = useState<string>()
    const [countryName, setCountryName] = useState<string | null>()
    const [location, setLocation] = useState<string | null>()
    const place = JSON.parse(alertData.data).place
    const coordinates = JSON.parse(alertData.data).coordinates

    const getCountryIso = async (countryName : string) => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            setiso(response.data[0].cca2)
        } catch (error) {
            console.log(error)
        }
    }

    const getLocation = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=12d9154b1f1c1178b34d1b238de0b6f4`)
            console.log(response.data)
            setLocation(`${response.data[0].name}${response.data[0].local_names.ru ? `, ${response.data[0].local_names.ru}` : ""}`)
        } catch (error) {
            console.log(error)
        }
    }

    const getCountryName = async () => {
        const name = await getCountryFromCoordinates(coordinates[0], coordinates[1])
        name && setCountryName(name)
        name && getCountryIso(name)
        return name
    }

    useEffect(()=>{
        getCountryName()
        getLocation()
        console.log({location})
    }, [])

    return (
        <Flex
            direction="column"
            align="center"
        >
            <AppTypography
                bold={TypographyBold.md2}
                size={TypographySize.md}
            >
                {location}
            </AppTypography>
            <Flex
                width={'auto'}
                align="center"
                gap={8}
            >
                <View
                    style={{
                        width : 25,
                        height : 25,
                        borderRadius : 100,
                        elevation : 100,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.20,
                        shadowRadius: 10,
                        backgroundColor : theme.colors.dark[8],
                    }}
                >
                    <View
                        style={{
                            width : '100%',
                            height : '100%',
                            overflow : 'hidden',
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',
                            borderRadius : 100
                        }}
                    >
                        {
                            iso &&
                            <CountryFlag 
                                isoCode={iso}
                                size={25}
                            />
                        }
                    </View>
                </View>
                <AppTypography
                    bold={TypographyBold.sm2}
                >
                    {countryName}
                </AppTypography>
            </Flex>
        </Flex>
    )
}
export default Top