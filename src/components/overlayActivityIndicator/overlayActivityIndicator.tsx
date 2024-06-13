import { ActivityIndicator, Modal, View } from "react-native"
import theme from "../../styles/theme"
import { hexOpacity } from "../../utils/hexOpacity"

const OverlayActivityIndicator = ({
    isVisible,
    indicatorColor,
    bgColor
} : {
    isVisible : boolean
    indicatorColor? : string
    bgColor? : string
}) => {
    return (
        <Modal
            animationType="fade" 
            transparent={true} 
            visible={isVisible}
            style={{
                backgroundColor : bgColor ?? theme.colors.dark[2]
            }}
        >
            <View
                style={{ 
                    width : '100%',
                    height : '100%',
                    backgroundColor: `${theme.colors.dark[1]}${hexOpacity(70)}`, 
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
                    }}
            >
                <ActivityIndicator 
                    size={'large'}
                    color={indicatorColor ?? 'white'}
                />
            </View>
        </Modal>
    )
}
export default OverlayActivityIndicator