import axios from "axios";
import { baseURL } from "../constants/api";
import { retrieveToken } from "../context/asyncStorage";

class ProtectedAPI {
    baseURL
    constructor(baseURL: string) {
      if (!baseURL) {
        throw new Error('baseURL is required!');
      }
      this.baseURL = baseURL;
    }
    get = async (url : string, params? : any) => {
      const token = await retrieveToken()
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const result = await axios.get(`${this.baseURL}${url}`, {
          params,
          headers
      },)
      return result.data
    }

    post = async (url : string, body? : any) => {
      const token = await retrieveToken()
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const result = await axios.post(`${this.baseURL}${url}`, body, {
          headers
      })
      return result.data
    }
}

class PublicAPI {
    baseURL
    constructor(baseURL: string) {
      if (!baseURL) {
        throw new Error('baseURL is required!');
      }
      this.baseURL = baseURL;
    }
  
    get = async (url: string, params?: any): Promise<any> => {
      const response = await axios.get(`${this.baseURL}${url}`, { params });
      return response.data;
    };
  
    post = async (url: string, body?: any): Promise<any> => {
      const response = await axios.post(`${this.baseURL}${url}`, body);
      return response.data;
    };
  }

export const protectedAPI = new ProtectedAPI(baseURL)
export const publicAPI = new PublicAPI(baseURL)