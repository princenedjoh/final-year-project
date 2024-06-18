import { View } from "react-native"
import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme"
import AppTypography from "../../../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../../../styles/components/types"
import Button from "../../../../components/button/button"
import CountryFlag from "react-native-country-flag";
import axios from "axios"
import { useEffect, useState } from "react"

const Top = () => {
    const [iso, setiso] = useState<string>()
    const getCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/name/ghana')
            setiso(response.data[0].cca2)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCountries()
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
                        size={TypographySize.md2}
                    >
                        Ghana
                    </AppTypography>
                    <AppTypography
                        bold={TypographyBold.sm2}
                    >
                        M 6.0 - 23 km SW of Accra
                    </AppTypography>
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