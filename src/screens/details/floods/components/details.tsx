import Flex from "../../../../styles/components/flex"
import theme from "../../../../styles/theme";
import DetailContainer from "./detailContainer"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from "../../../../components/divider/divider";
import { Fragment } from "react";
import { hexOpacity } from "../../../../utils/hexOpacity";

const Details = () => {
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

    return (
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
    )
}
export default Details