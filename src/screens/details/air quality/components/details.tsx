import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme";
import DetailContainer from "./detailContainer"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from "../../../../components/divider/divider";
import { Fragment, useState } from "react";
import { hexOpacity } from "../../../../utils/hexOpacity";
import TabMenu from "../../../../components/menu/tabMenu";
import { View } from "react-native";
import AppTypography from "../../../../styles/components/appTypography";
import { sizes } from "../../../../utils/sizes";
import { TypographyBold, TypographySize } from "../../../../styles/components/types";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconContainer from "../../components/iconContainer";

const Details = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const details = [
        {
            title : 'JUN 20, 2024',
            description : '20:08 UTC',
            icon : <MaterialIcons
                name="date-range"
                color={'white'}
                size={20}
            />,
            color : "#919191"
        },
        {
            title : '14.63 m3/s',
            description : 'Discharge',
            icon : <Ionicons
                name="pulse-sharp"
                color={'white'}
                size={20}
            />,
            color : "#936D6D"
        },
        {
            title : '0.073 ms',
            description : 'Gen time',
            icon : <MaterialCommunityIcons
                name="signal-distance-variant"
                color={'white'}
                size={20}
            />,
            color : "#6D8793"
        },
    ]

    const [menuItems, setMenuItems] = useState([
        {
            name : '28th March',
            active : true,
        },
        {
            name : '31st March',
            active : false,
        },
    ])

    const [predictions, setPredictions] = useState([
        {
            name : 'Predictions',
            active : true,
        },
        {
            name : 'Today',
            active : false,
        }
    ])

    return (
        <Flex
            direction="column"
            gap={10}
        >
            <Flex
                marginBottom={-10}
                gap={10}
                justify="center"
            >
                {
                    predictions.map((item, index : number) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                backgroundColor : item.active ? `${theme.colors.main.primary}${hexOpacity(8)}` : `#000000${hexOpacity(8)}`,
                                padding : 5,
                                borderRadius : 5,
                                paddingHorizontal : 10,
                                borderWidth : item.active ? 1 : 0,
                                borderColor : `${theme.colors.main.primary}${hexOpacity(20)}`
                            }}
                        >
                            <AppTypography
                                bold={item.active ? TypographyBold.md : TypographyBold.sm}
                            >
                                {item.name}
                            </AppTypography>
                        </TouchableOpacity>
                    ))
                }
            </Flex>
            <TabMenu 
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                menuItems={menuItems}
                setMenuItems={setMenuItems}
            />
            <Flex
                justify="space-between"
                align="center"
                gap={10}
                background={`#000000${hexOpacity(8)}`}
                paddingHorizontal={20}
                paddingVertical={20}
                rounded={10}
            >
                <View
                    style={{
                        width : '100%',
                        height : 100,
                        borderRadius : 10,
                        backgroundColor : `#ffffff` || theme.colors.dark[11],
                        elevation : 10,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.15,
                        shadowRadius: 10,
                    }}
                >
                    <Flex
                        justify="space-between"
                        align="center"
                        height={'100%'}
                        paddingHorizontal={sizes.marginSM}
                    >
                        <IconContainer 
                            icon={
                                <MaterialIcons 
                                    name="air"
                                    color={'white'}
                                    size={20}
                                />
                            }
                            color="#6D8793"
                        />
                        <Divider 
                            size={{
                                height : 30,
                                width : 1
                            }}
                            color={theme.colors.dark[9]}
                        />
                        <Flex
                            direction="column"
                            align="center"
                            width={'auto'}
                            gap={0}
                        >
                            <AppTypography
                                textColor="#6D8793"
                                bold={TypographyBold.lg}
                                size={TypographySize.lg2}
                            >
                                159
                            </AppTypography>
                            <AppTypography
                                textColor="#6D8793"
                            >
                                aqui
                            </AppTypography>
                        </Flex>
                        <Divider 
                            size={{
                                height : 30,
                                width : 1
                            }}
                            color={theme.colors.dark[9]}
                        />
                        <AppTypography
                            textColor="#6D8793"
                            bold={TypographyBold.lg}
                            size={TypographySize.md}
                        >
                            Unhealthy
                        </AppTypography>
                    </Flex>
                </View>
            </Flex>
            <Flex
                justify="space-between"
                align="center"
                gap={10}
                background={`#000000${hexOpacity(8)}`}
                paddingHorizontal={20}
                paddingVertical={20}
                rounded={10}
            >
                {
                    details.map((item, index : number) => (
                        <Fragment
                            key={index}
                        >
                            <DetailContainer
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                color={item.color}
                            />
                            {
                                index < details.length - 1 &&
                                <Divider 
                                    size={{
                                        height : 50,
                                        width : 1
                                    }}
                                    color={theme.colors.dark[8]}
                                />
                            }
                        </Fragment>
                    ))
                }
            </Flex>

        </Flex>
    )
}
export default Details