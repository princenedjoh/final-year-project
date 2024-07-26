import { NavigationProp } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import screens from '../../../constants/screens';
import ImageBG from '../../../components/imgbg/imgbg';
import { images } from '../../../assets/assets';

const ImageContainer = ({
    navigation,
    image
} : {
    navigation : NavigationProp<any>,
    image : string
}) => {
    return (
        <TouchableHighlight
            underlayColor={'none'}
            style={{
                marginTop : 3
            }}
        >
            <ImageBG
                source={{uri : image}}
                width={'100%'}
                height={200}
            >
            </ImageBG>
        </TouchableHighlight>
    )
}

export default ImageContainer