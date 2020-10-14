import Axios, { AxiosRequestConfig } from 'axios';

export interface Credentials {
    username: string;
    password: string;
}
export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'https://my-json-server.typicode.com/RuiFonseca/SquadApp',
        data,
    };
    try {
        const {} = await Axios.request(requestConfig);
    } catch (e) {
        console.error(e);
        return { error: e.response.data.message };
    }
};
