import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllSettings } from "../api/apis/settings";
import { retrieveIsUserLoggedin } from "../context/asyncStorage";

export const onStartup = async () => {
    await getAndStoreSettings()
};

export const getAndStoreSettings = async () => {
    try {
        const isUserLoggedin = await retrieveIsUserLoggedin();
        if (isUserLoggedin) {
            const {response : allSettings, error} = await getAllSettings();
            if (allSettings && Array.isArray(allSettings)) {
                const allSettingsString = JSON.stringify(allSettings);
                await AsyncStorage.setItem("settings", allSettingsString);
                const storedSettings = await AsyncStorage.getItem("settings");
                if (storedSettings) {
                    const settingsArray = JSON.parse(storedSettings);
                    return settingsArray
                }
            } else {
                throw new Error('Expected an array of settings but got:', allSettings);
            }
        }
    } catch (error) {
        console.error('Error in onStartup:', error);
    }
}
