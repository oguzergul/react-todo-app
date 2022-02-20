import { axiosInstance } from './axios'

export default class HttpClient {
    get(url) {
        return axiosInstance.get(url)
    }
    post(url, data= {}) {
        return axiosInstance.post(url, data)
    }
    patch(url, data = {}) {
        return axiosInstance.patch(url,data)
    }
    delete(url,data) {
        return axiosInstance.delete(url,data)
    }
}
