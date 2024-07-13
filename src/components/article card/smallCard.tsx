import { ImageBackground, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from "react-native"
import theme from "../../styles/theme"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"
import ImageBG from "../imgbg/imgbg"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../constants/screennames"
import { months } from "../../utils/constants"
import { articleTypes } from "../../utils/types"

const SmallCard = ({
    navigation,
    title,
    description,
    date,
    coverImageURL,
    full_name1,
} : articleTypes) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>navigation.navigate(screenNames.articlePost, {
                title,
                description : description,
                date : date.toString(),
                coverImageURL,
                full_name1
            })}
        >
            <Flex
                align="center"
                gap={6}
            >
                <ImageBG 
                    source={coverImageURL}
                    width={80}
                    height={80}
                >
                    
                </ImageBG>
                <Flex
                    direction="column"
                    gap={1}
                    flex={1}
                >
                    <AppTypography
                        size={TypographySize.md2}
                        textColor={theme.colors.main.text.head}
                        bold={TypographyBold.md}
                    >
                        {title}
                    </AppTypography>
                    <AppTypography
                        numberOfLines={2}
                    >
                        {description && JSON.parse(description)[0].text}
                    </AppTypography>
                    <Flex
                        width={'auto'}
                        marginTop={3}
                    >
                        <AppTypography
                            size={TypographySize.xs}
                            bold={TypographyBold.md}
                        >
                            {months[date.getMonth()]} {date.getDay()}, {date.getFullYear()}
                        </AppTypography>
                    </Flex>
                </Flex>
            </Flex>
        </TouchableOpacity>
    )
}

export default SmallCard