import baseURL from './../Api/baseURL';

const useGetData = async(url, params) => {
    const res = await baseURL.post(url, params);
    return res;
}

const useGetDataToken = async(url, params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url, params, config);
    return res;
}

export {useGetData, useGetDataToken}