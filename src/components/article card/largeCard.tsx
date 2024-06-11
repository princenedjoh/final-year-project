import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import theme from "../../styles/theme"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold, TypographySize } from "../../styles/components/types"
import { images } from "../../assets/assets"
import ImageBG from "../imgbg/imgbg"
import { NavigationProp } from "@react-navigation/native"
import { screenNames } from "../../constants/screennames"
import { articleTypes } from '../../utils/types';
import getDate from "../../utils/getDate"
import Profilename from "../profilename/profilename"

interface largCardTyes extends articleTypes {
    width? : number,
    height? : number,
}

const LargeCard = ({
    navigation,
    title,
    description,
    date,
    coverImageURL,
    full_name1,
    width,
    height,
} : largCardTyes) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>navigation.navigate(screenNames.articlePost, {
                title,
                description,
                date : date.toString(),
                coverImageURL,
                full_name1
            })}
        >
            <Flex
                direction="column"
                width={width}
            >
                <Profilename
                    name={full_name1}
                    image={images.profile1}
                />
                <ImageBG 
                    source={coverImageURL}
                    width={width}
                    height={height}
                >
                    
                </ImageBG>
                <Flex
                    direction="column"
                    gap={1}
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
                        {description}
                    </AppTypography>
                    <Flex
                        width={'auto'}
                        marginTop={3}
                    >
                        <AppTypography
                            size={TypographySize.xs}
                            textColor={theme.colors.main.text.light}
                        >
                            {getDate(date)}
                        </AppTypography>
                    </Flex>
                </Flex>
            </Flex>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    imagebackground : {
        width : '100%',
        height : 150,
        borderRadius : 5,
    }
})

export default LargeCard