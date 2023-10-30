import baseURL from "../Api/baseURL";

const useEditDataWithImg = async (url, params) => {
    const config = {
        headers: {
            "Content-Type" : "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

const useEditData = async (url, params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.put(url, params, config);
    return res;
}

export {useEditDataWithImg, useEditData}