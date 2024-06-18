import { Fragment, ReactNode } from "react"
import Flex from "../../../../styles/components/flex"
import IconContainer from "./iconContainer"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppTypography from "../../../../styles/components/appTypography";
import { TypographyBold, TypographySize } from "../../../../styles/components/types";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Divider from "../../../../components/divider/divider";
import theme from "../../../../styles/theme";
import { hexOpacity } from "../../../../utils/hexOpacity";

const MoreDetails = () => {
    const details = [
        {
            title : 'Coordinate',
            description : 'Lon: -74.5392, Lat: -15.9192, Radius: 19.917',
            icon : <FontAwesome5
                name="drafting-compass"
                color={'white'}
                size={16}
            />,
            color : "#8F6D93"
        },
        {
            title : 'Location',
            description : 'M 6.0 - 23 km SW of Accra',
            icon : <FontAwesome5
                name="location-arrow"
                color={'white'}
                size={16}
            />,
            color : "#93866D"
        },
        {
            title : 'mmi',
            description : '6.736',
            icon : <FontAwesome5
                name="map"
                color={'white'}
                size={16}
            />,
            color : "#936D76"
        },
    ]

    return (
        <Flex
            direction="column"
            gap={15}
            marginTop={10}
        >
            {
                details.map((item, index : number) => (
                    <Fragment
                        key={index}
                    >
                        <Flex
                            gap={10}
                            align="center"
                        >
                            <IconContainer 
                                icon={item.icon}
                                color={item.color}
                            />
                            <Flex
                                direction="column"
                                width={'auto'}
                                flex={1}
                            >
                                <AppTypography>
                                    {item.title}
                                </AppTypography>
                                <AppTypography
                                    bold={TypographyBold.md2}
                                    size={TypographySize.sm2}
                                >
                                    {item.description}
                                </AppTypography>
                            </Flex>
                        </Flex>
                        {
                            index < details.length - 1 &&
                            <Flex
                                paddingLeft={60}
                            >
                                <Divider 
                                    color={`${theme.colors.dark[9]}${hexOpacity(70)}`}
                                />
                            </Flex>
                        }
                    </Fragment>
                ))
            }
        </Flex>
    )
}
export default MoreDetails