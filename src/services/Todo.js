import HttpClient from "../utils/http-client";
import urls from '../utils/api-routes'

const service = new HttpClient();

export default {
    create : async (payload) => {
        return await service.post(urls.todo, payload).then(response => response.data);
    },
    delete : async (payload) => {
        return await service.delete( `${urls.todo + payload._id}`).then(response => response.data);
    },
    list: async () => {
        return await service.get(urls.todo).then(response => response.data);
    },
    update:async (payload)  => {
        return await service.patch(urls.todo, payload).then(response => response.data);
    },
}
