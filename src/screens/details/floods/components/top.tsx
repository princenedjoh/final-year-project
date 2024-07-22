import { View } from "react-native"
import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import Button from "../../../../components/button/button"
import CountryFlag from "react-native-country-flag";
import axios from "axios"
import { useEffect, useState } from "react"
import { getCountryFromCoordinates } from "../../../../utils/getCountryFromCordinates"
import { alertDataTypes } from "../../../../utils/types"

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
            setLocation(response.data[0].name)
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
    }, [])

    return (
        <Flex
            justify="space-between"
            align="center"
        >
            <Flex
                width={'auto'}
                align="center"
                gap={4}
                flex={1}
            >
                <View
                    style={{
                        width : 35,
                        height : 35,
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
                            borderRadius : 5
                        }}
                    >
                        {
                            iso &&
                            <CountryFlag 
                                isoCode={iso}
                                size={35}
                            />
                        }
                    </View>
                </View>
                <Flex
                    width={'auto'}
                    direction="column"
                    gap={1}
                    paddingLeft={5}
                >
                    <AppTypography
                        bold={TypographyBold.md2}
                        size={TypographySize.md}
                    >
                        {countryName}
                    </AppTypography>
                    <AppTypography
                        bold={TypographyBold.sm2}
                    >
                        {location ?? 'M 6.0 - 23 km SW of Accra'}
                    </AppTypography>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Top