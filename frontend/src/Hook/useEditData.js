import baseURL from "../Api/baseURL";
import Cookie from 'cookie-universal'
const useEditDataWithImg = async (url, params) => {
    const cookies = Cookie();
    const config = {
        headers: {
            "Content-Type" : "multipart/form-data",
            Authorization: "Bearer " + cookies.get('token')
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

const useEditData = async (url, params) => {
    const cookies = Cookie();
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get('token')
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

export {useEditDataWithImg, useEditData}