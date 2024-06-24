import AsyncStorage from "@react-native-async-storage/async-storage";

export const retrieveAllSettings = async () => {
    try {
      const allSettings = await AsyncStorage.getItem('settings');
      return allSettings ?? undefined;
    } catch (error) {
      console.error('Error retrieving settings:', error);
    }
};

export const retrieveEarthquakeLocationSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if(settings){
        const settingsJson = JSON.parse(settings)
        const earthquakeLocationSettings = settingsJson.filter((item : any) => item.name === 'earthquake_location')
        return earthquakeLocationSettings[0]
      }
    } catch (error) {
      console.error('Error retrieving settings:', error);
    }
};