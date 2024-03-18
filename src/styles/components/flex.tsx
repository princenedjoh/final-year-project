import { View } from "react-native"
import { flexProps } from './types';
import { sizes } from "../../utils/sizes";

const Flex = (
    {
        children,
        direction,
        gap,
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
        paddingHorizontal,
        paddingVertical,
        marginHorizontal,
        marginVertical,
        marginRight,
        marginLeft,
        marginTop,
        marginBottom,
        justify,
        align,
        width,
        height,
        maxWidth,
        maxHeight,
        flexWrap,
        opacity,
        rounded,
        background,
        z,
        flex,
        position
    } : flexProps
) => {
    return (
        <View style={{
            display : 'flex',
            flexDirection : direction ?? 'row',
            gap : gap ?? 4,
            flex,
            paddingLeft,
            paddingRight,
            paddingBottom,
            paddingTop,
            paddingHorizontal,
            paddingVertical,
            marginHorizontal,
            marginVertical,
            marginRight,
            marginLeft,
            marginTop,
            marginBottom,
            justifyContent : justify,
            alignItems : align,
            width : width ?? '100%',
            height,
            maxWidth,
            maxHeight,
            flexWrap,
            opacity,
            borderRadius : rounded,
            backgroundColor : background,
            zIndex : z,
            position
        }}>
            {children}
        </View>
    )
}

export default Flex