import baseURL from './../Api/baseURL';
import Cookie from 'cookie-universal'

const useCreateDataWithImg = async(url, params) => {
    const cookies = Cookie();
    const cookieRes = cookies.get('token');
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cookieRes}`,
            withCredentials: true
        }
    }
    const res = await baseURL.post(url, params, config);
    return res;
}

const useCreateData = async(url, params) => {
    const cookies = Cookie();
    const cookieRes = cookies.get('token');
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookieRes}`,
            withCredentials: true
        }
    }
    const res = await baseURL.post(url, params, config);
    return res;
}

export {useCreateData, useCreateDataWithImg}