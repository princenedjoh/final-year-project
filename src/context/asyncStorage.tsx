import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token : string) => {
  try {
    await AsyncStorage.setItem('token', token);
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
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const retrieveRefreshToken = async () => {
    try {
      const token = await AsyncStorage.getItem('refreshToken');
      return token;
    } catch (error) {
      console.error('Error retrieving refresh token:', error);
      return null;
    }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
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
