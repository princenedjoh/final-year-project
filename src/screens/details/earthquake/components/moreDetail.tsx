import { Fragment, ReactNode } from "react"
import Flex from "../../../../styles/components/flex"
import IconContainer from "../../components/iconContainer"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppTypography from "../../../../styles/components/appTypography";
import { TypographyBold, TypographySize } from "../../../../styles/components/types";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Divider from "../../../../components/divider/divider";
import theme from "../../../../styles/theme";
import { hexOpacity } from "../../../../utils/hexOpacity";
import { alertDataTypes } from "../../../../utils/types";

const MoreDetails = ({
    alertData
} : {
    alertData : alertDataTypes
}) => {
    const place = JSON.parse(alertData.data).place
    const coordinates = JSON.parse(alertData.data).coordinates
    const mmi = JSON.parse(alertData.data).mmi

    console.log(coordinates)

    const details = [
        {
            title : 'Coordinate',
            description : coordinates ? `Lon: ${coordinates[0] ?? 'N/A'}; Lat: ${coordinates[1] ?? 'N/A'}; Radius: ${coordinates[2] ?? 'N/A'}` : 'N/A',
            icon : <FontAwesome5
                name="drafting-compass"
                color={'white'}
                size={16}
            />,
            color : "#8F6D93"
        },
        {
            title : 'Location',
            description : place ?? 'N/A',
            icon : <FontAwesome5
                name="location-arrow"
                color={'white'}
                size={16}
            />,
            color : "#93866D"
        },
        {
            title : 'Modified Mercalli Intensity (MMI) ',
            description : mmi ?? 'N/A',
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
                                {
                                    item.description === 'N/A' ?
                                    <AppTypography
                                        bold={TypographyBold.md2}
                                        textColor={theme.colors.main.text.light}
                                        size={TypographySize.sm2}
                                    >
                                        {item.description}
                                    </AppTypography>
                                    :
                                    <AppTypography
                                        bold={TypographyBold.md2}
                                        size={TypographySize.sm2}
                                    >
                                        {item.description}
                                    </AppTypography>
                                }
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