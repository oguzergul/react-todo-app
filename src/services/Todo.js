import HttpClient from "../utils/http-client";
import urls from '../utils/api-routes'

const service = new HttpClient();

export default {
    create : async (payload) => {
        return await service.post(urls.todo,payload).then(response => response.data);
    },
    delete : async (payload) => {
        const response = await service.delete(urls.todo, payload._id).then(response => response);
        return response.data;
    },
    list: async () => {
        const response = await service.get(urls.todo).then(response => response);
        return response.data;
    },
    update:async (payload)  => {
        return await service.patch(urls.todo, payload).then(response => response.data);
    },
}