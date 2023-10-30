import baseURL from './../Api/baseURL';

const useCreateDataWithImg = async(url, params) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${localStorage.getItem("token")}`
            withCredentials: true
        }
    }
    const res = await baseURL.post(url, params, config);
    return res;
}

const useCreateData = async(url, params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`
            withCredentials: true
        }
    }
    const res = await baseURL.post(url, params, config);
    return res;
}

export {useCreateData, useCreateDataWithImg}