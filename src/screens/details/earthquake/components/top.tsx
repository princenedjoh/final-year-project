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

    const getCountryName = async () => {
        const name = await getCountryFromCoordinates(coordinates[0], coordinates[1])
        name && setCountryName(name)
        name && getCountryIso(name)
        return name
    }


    useEffect(()=>{
        getCountryName()
    }, [])
    return (
        <Flex
            justify="space-between"
            align="center"
            gap={8}
        >
            <Flex
                width={'auto'}
                align="center"
                gap={4}
                flex={1}
            >
                {
                    iso &&
                    <View
                        style={{
                            width : 35,
                            height : 35,
                            borderRadius : 5,
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
                            <CountryFlag 
                                isoCode={iso}
                                size={35}
                            />
                        </View>
                    </View>
                }
                <Flex
                    width={'auto'}
                    direction="column"
                    gap={1}
                    paddingLeft={5}
                >
                    {
                        countryName &&
                        <AppTypography
                            bold={TypographyBold.md2}
                            size={TypographySize.md}
                        >
                            {countryName}
                        </AppTypography>
                    }
                    {
                        countryName === 'N/A' || !countryName ?
                        <AppTypography
                            bold={TypographyBold.md2}
                            size={TypographySize.md}
                        >
                            {place ?? 'N/A'}
                        </AppTypography>
                        :
                        <AppTypography
                            bold={TypographyBold.sm2}
                        >
                            {place ?? 'N/A'}
                        </AppTypography>
                    }
                </Flex>
            </Flex>
            <Button
                size={{
                    height : 35
                }}
                style={{
                    shadowColor: theme.colors.main.primary,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                }}
            >
                <AppTypography
                    size={TypographySize.xs}
                    textColor="white"
                    bold={TypographyBold.md2}
                >
                    View Event
                </AppTypography>
            </Button>
        </Flex>
    )
}
export default Top