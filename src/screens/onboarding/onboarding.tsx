import Onboarding from 'react-native-onboarding-swiper';
import { images, onboarding } from '../../assets/assets';
import { Image, TouchableOpacity } from 'react-native';
import AppTypography from '../../styles/components/appTypography';
import Flex from '../../styles/components/flex';
import Button from '../../components/button/button';
import { screenNames } from '../../constants/screennames';
import { NavigationProp } from '@react-navigation/native';
import { TypographyBold, TypographySize } from '../../styles/components/types';
import theme from '../../styles/theme';
import ImageBG from '../../components/imgbg/imgbg';

const OnBoarding = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <ImageBG 
                        source={onboarding.image1}
                        width={400}
                        height={250}
                        style={{
                            backgroundColor : 'white'
                        }}
                    />,
                    title: <Flex
                        width={'80%'}
                        justify='center'
                        marginTop={-30}
                    >
                        <AppTypography
                            bold={TypographyBold.md}
                            size={TypographySize.lg}
                            textAlign='center'
                            textColor={theme.colors.main.text.head}
                        >
                            Protecting Our Planet, One Insight at a Time
                        </AppTypography>
                    </Flex>,
                    subtitle: <Flex
                        width={'80%'}
                        justify='center'
                        marginTop={5}
                    >
                        <AppTypography
                            textAlign='center'
                            size={TypographySize.sm2}
                        >
                            Our planet is constantly changing. This system utilizes the power of satellite imagery, IoT sensors, and weather data to provide a holistic view of the environment.
                        </AppTypography>
                    </Flex>,
                    
                },
                {
                    backgroundColor: '#fff',
                    image: <ImageBG 
                        source={onboarding.image2}
                        width={400}
                        height={320}
                        style={{
                            backgroundColor : 'white'
                        }}
                    />,
                    title: <Flex
                        width={'80%'}
                        justify='center'
                        marginTop={-30}
                    >
                        <AppTypography
                            bold={TypographyBold.md}
                            size={TypographySize.lg}
                            textAlign='center'
                            textColor={theme.colors.main.text.head}
                        >
                             Early Warning, Empowered Action
                        </AppTypography>
                    </Flex>,
                    subtitle: <Flex
                        width={'80%'}
                        justify='center'
                        marginTop={5}
                    >
                        <AppTypography
                            textAlign='center'
                            size={TypographySize.sm2}
                        >
                            Don't be caught off guard. Our system proactively identifies potential environmental threats, allowing for early warnings and informed decision-making.
                        </AppTypography>
                    </Flex>,
                    
                },
                {
                    backgroundColor: '#fff',
                    image: <ImageBG 
                        source={onboarding.image3}
                        width={400}
                        height={400}
                        style={{
                            backgroundColor : 'white'
                        }}
                    />,
                    title: <Flex
                        width={'80%'}
                        justify='center'
                        marginTop={-30}
                    >
                        <AppTypography
                            bold={TypographyBold.md}
                            size={TypographySize.lg}
                            textAlign='center'
                            textColor={theme.colors.main.text.head}
                        >
                            Be a Part of the Change
                        </AppTypography>
                    </Flex>,
                    subtitle: <Flex
                        width={'80%'}
                        direction='column'
                        align='center'
                        marginTop={5}
                    >
                        <AppTypography
                            textAlign='center'
                        >
                            Together, we can create a more sustainable future. Sign up for free and gain access to real-time environmental data and insights.
                        </AppTypography>
                        <Flex
                            width={'auto'}
                            marginTop={5}
                        >
                            <Button
                                onPress={()=>navigation.navigate(screenNames.register)}
                                size={{
                                    width : 100,
                                    height : 35
                                }}
                            >
                                <AppTypography
                                    textColor='white'
                                    bold={TypographyBold.md}
                                >
                                    Sign Up
                                </AppTypography>
                            </Button>
                        </Flex>
                    </Flex>
                },
            ]}
            skipToPage={2}
            showDone={false}
            skipLabel={
                <Flex>
                    <TouchableOpacity>
                        <AppTypography>
                            Skip
                        </AppTypography>
                    </TouchableOpacity>
                </Flex>
            }
            nextLabel={
                <Flex>
                    <TouchableOpacity>
                        <AppTypography>
                            Next
                        </AppTypography>
                    </TouchableOpacity>
                </Flex>
            }
        />
    )
}
export default OnBoarding