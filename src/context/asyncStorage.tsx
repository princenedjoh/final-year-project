import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token : string) => {
  try {
    await AsyncStorage.setItem('token', token);
    setIsUserLoggedin()
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

export const storeRefreshToken = async (refreshToken : string) => {
    try {
      await AsyncStorage.setItem('refreshToken', refreshToken);
    } catch (error) {
      console.error('Error storing refresh token:', error);
    }
};

export const retrieveToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token ?? undefined;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

export const retrieveRefreshToken = async () => {
    try {
      const token = await AsyncStorage.getItem('refreshToken');
      return token ?? undefined;
    } catch (error) {
      console.error('Error retrieving refresh token:', error);
    }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    unsetIsUserLoggedin()
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

export const removeRefreshToken = async () => {
    try {
      await AsyncStorage.removeItem('refreshToken');
    } catch (error) {
      console.error('Error removing refresh token:', error);
    }
  };

export const setIsUserLoggedin = async () => {
  try {
    await AsyncStorage.setItem('isUserLoggedin', 'true');
  } catch (error) {
    console.error('Error setting user loggdin:', error);
  }
};

export const retrieveIsUserLoggedin = async () => {
  try {
    const response = await AsyncStorage.getItem('isUserLoggedin');
    return response;
  } catch (error) {
    console.error('Error retrieving isUserLoggedin:', error);
  }
};

  export const unsetIsUserLoggedin = async () => {
    try {
      await AsyncStorage.removeItem('isUserLoggedin');
    } catch (error) {
      console.error('Error unsetting user loggdin:', error);
    }
  };