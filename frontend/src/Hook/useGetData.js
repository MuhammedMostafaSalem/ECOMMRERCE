import baseURL from './../Api/baseURL';
import Cookie from 'cookie-universal'

const useGetData = async(url, params) => {
    const res = await baseURL.get(url, params);
    return res;
}

const useGetDataToken = async(url, params) => {
    const cookies = Cookie();
    const config = {
        headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`
            Authorization: "Bearer " + cookies.get('token')
        }
    }
    const res = await baseURL.get(url, params, config);
    return res;
}

export {useGetData, useGetDataToken}