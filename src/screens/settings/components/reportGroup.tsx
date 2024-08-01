import Group from "../../../components/settings/group";
import theme from "../../../styles/theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { NavigationProp } from "@react-navigation/native";
import { screenNames } from "../../../constants/screennames";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import Confirmation from "../../../components/modal/confirmation";
import OverlayActivityIndicator from "../../../components/overlayActivityIndicator/overlayActivityIndicator";
import { publicAPI } from "../../../api/api";
import { Alert, Platform } from "react-native";
import RNFS from 'react-native-fs';
import { baseURL } from "../../../constants/api";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const ReportGroup = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [ConfirmisVisible, setConfirmisVisible] = useState(false);
    const [indicatorIsVisible, setIndicatorIsVisible] = useState(false);
    const options = [
        {
            title : "Generate Report Summary",
            icon : <FontAwesome
                name="files-o"
                size={18}
                color={theme.colors.dark[4]}
            />,
            right : <AntIcon
                color={theme.colors.main.text.light}
                name="right"
                size={12}
                />,
            onPress : () => setConfirmisVisible(true)
        },
    ];

    const downloadReport = async () => {
        setIndicatorIsVisible(true);
        const downloadPath = `${FileSystem.documentDirectory}alert_summary_report.pdf`;
    
        try {
            const response = await FileSystem.downloadAsync(
                `${baseURL}report/generate/`,
                downloadPath
            );
    
            if (response.status === 200) {
                Alert.alert('Download Success', 'Report downloaded successfully.');
                if (await Sharing.isAvailableAsync()) {
                    await Sharing.shareAsync(downloadPath);
                } else {
                    Alert.alert('Sharing Error', 'Sharing is not available on this device.');
                }
            } else {
                Alert.alert('Download Error', 'Failed to download report.');
            }
        } catch (error) {
            Alert.alert('Download Error', 'Failed to download report.');
        } finally {
            setIndicatorIsVisible(false);
        }
    };

    return (
        <>
            <OverlayActivityIndicator 
                isVisible={indicatorIsVisible}
            />
            <Confirmation 
                isVisible={ConfirmisVisible}
                setIsVisible={setConfirmisVisible}
                onConfirm={downloadReport}
            />
            <Group 
                options={options}
            />
        </>
    );
};

export default ReportGroup;
