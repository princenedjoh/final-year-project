import axios from "axios"

export const repoName = 'final-year-project-article'
export const repoAPI = `https://${repoName}.cdn.prismic.io/api/v2/`
export const docAPI = `${repoAPI}documents/`

export const getRef = async () => {
    try {
        const response = await axios.get(repoAPI)
        const ref = response.data.refs[0].ref
        return ref
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentDocApi = async () => {
    const ref = await getRef()
    const api = `${docAPI}search?ref=${ref}`
    return api
}

export const getAllArticles = async () : Promise<any> => {
    const api = await getCurrentDocApi()
    const response = await axios.get(api)
    return response.data
}