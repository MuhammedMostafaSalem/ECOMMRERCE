import baseURL from "../Api/baseURL";
import Cookie from 'cookie-universal'
const useEditDataWithImg = async (url, params) => {
    const cookies = Cookie();
    const cookieRes = cookies.get('token');
    const config = {
        headers: {
            "Content-Type" : "multipart/form-data",
            Authorization: `Bearer ${cookieRes}`
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

const useEditData = async (url, params) => {
    const cookies = Cookie();
    const cookieRes = cookies.get('token');
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookieRes}`
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

export {useEditDataWithImg, useEditData}