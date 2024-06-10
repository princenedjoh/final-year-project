import { ActivityIndicator, ScrollView, TouchableOpacity, View } from "react-native"
import { sizes } from "../../../utils/sizes"
import AppTypography from "../../../styles/components/appTypography"
import theme from "../../../styles/theme"
import ProfileItems from "./profileItems"
import Flex from "../../../styles/components/flex"
import { TypographyBold, TypographySize } from "../../../styles/components/types"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useContext, useState } from "react"
import { AuthContext } from "../../../context/authcontext"
import { useNavigation } from '@react-navigation/native';
import { useToast } from "react-native-toast-notifications"
import { profileItemsType } from "./profileItem"
import { getAllArticles, getCurrentDocApi, getRef, repoAPI } from "../../../api/prismic"
import axios from "axios"

const Drawer = ({
    userInfo
} : {
    userInfo : profileItemsType[]
}) => {

    return (
        <View
            style={{
                width : '100%',
                height : sizes.screenHeight,
                backgroundColor : theme.colors.dark[10],
                paddingVertical : 20,
                position : 'relative',
                top : -100,
                borderTopLeftRadius : 30,
                borderTopRightRadius : 30
            }}
        >
            <Flex
                justify="center"
            >
                <View
                    style={{
                        width : 70,
                        height : 7,
                        backgroundColor : theme.colors.dark[7],
                        borderRadius : 100
                    }}
                >

                </View>
            </Flex>
            <ScrollView
                showsVerticalScrollIndicator    
                style={{
                    marginTop : 10
                }}
            >
                <Flex
                    direction="column"
                    gap={20}
                >
                    {
                        userInfo.length > 0 ?
                        <ProfileItems 
                            userInfo={userInfo}
                        />
                        :
                        <Flex
                            height={sizes.screenHeight - 500}
                            justify="center"
                            align="center"
                        >
                            <ActivityIndicator
                                color={theme.colors.main.primary} 
                                size={'large'}
                            />
                        </Flex>
                    }
                </Flex>
            </ScrollView>
        </View>
    )
}

export default Drawer