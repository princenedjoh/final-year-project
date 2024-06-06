import { NavigationProp } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import screens from '../../../constants/screens';
import ImageBG from '../../../components/imgbg/imgbg';
import { images } from '../../../assets/assets';

const ImageContainer = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <TouchableHighlight
            underlayColor={'none'}
            style={{
                marginTop : 3
            }}
        >
            <ImageBG
                source={images.bg4}
                width={'100%'}
                height={200}
            >
            </ImageBG>
        </TouchableHighlight>
    )
}

export default ImageContainer