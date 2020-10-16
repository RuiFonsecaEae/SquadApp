import Axios, { AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string;
    password: string;
}
export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'get',
        url: 'https://my-json-server.typicode.com/RuiFonsecaEae/SquadApp/users',
        data,
    };
    try {
        const {} = await Axios.request(requestConfig);
    } catch (e) {
        console.error(e);
        return { error: e.response.data.message };
    }
};
