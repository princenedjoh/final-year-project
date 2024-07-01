import axios from "axios";
import { baseURL } from "../constants/api";
import { retrieveToken } from "../context/asyncStorage";
import logout from "../utils/logout";

export interface apiResponseType {
  response? : any,
  error? : {
    message : string,
    detail? : string
  }
}
class ProtectedAPI {
    baseURL
    constructor(baseURL: string) {
      if (!baseURL) {
        throw new Error('baseURL is required!');
      }
      this.baseURL = baseURL;
    }
    get = async (url : string, params? : any) : Promise<apiResponseType> => {
      try {
        const token = await retrieveToken()
        const headers = {
          Authorization: `Bearer ${token}`
        }
        const result = await axios.get(`${this.baseURL}${url}`, {
            params,
            headers
        },)
        return {response : result.data}
      } catch (error : any) {
        console.log(error)
        return {error : {message : 'unauthorized', detail : error}}
      }
    }

    post = async (url : string, body? : any, params? : any) : Promise<apiResponseType> => {
      try {
        const token = await retrieveToken()
        const headers = {
          Authorization: `Bearer ${token}`
        }
        const result = await axios.post(`${this.baseURL}${url}`, body, {
            headers,
            params
        })
        return {response : result.data}
      } catch (error : any) {
        console.log(error)
        return {error : {message : 'unauthorized', detail : error}}
      }
    }

    update = async (url : string, body? : any, params? : any) : Promise<apiResponseType> => {
      try {
        const token = await retrieveToken()
        const headers = {
          Authorization: `Bearer ${token}`
        }
        const result = await axios.patch(`${this.baseURL}${url}`, body, {
            headers,
            params
        })
        return {response : result.data}
      } catch (error : any) {
        console.log(error)
        return {error : {message : 'unauthorized', detail : error}}
      }
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
  
    get = async (url: string, params?: any) : Promise<apiResponseType> => {
      try {
        const response = await axios.get(`${this.baseURL}${url}`, { params });
        return {response : response.data}
      } catch (error : any) {
        console.log(error)
        return {error : {message : 'unauthorized', detail : error}}
      }
    };
  
    post = async (url: string, body?: any, params? : any) : Promise<apiResponseType> => {
      try {
        const response = await axios.post(`${this.baseURL}${url}`, body, {params});
        return {response : response.data}
      } catch (error : any) {
        console.log(error)
        return {error : {message : 'unauthorized', detail : error}}
      }
    };
  }

export const protectedAPI = new ProtectedAPI(baseURL)
export const publicAPI = new PublicAPI(baseURL)