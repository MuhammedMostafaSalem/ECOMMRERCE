import baseURL from '../Api/baseURL';
import Cookie from 'cookie-universal'

const useDeleteData = async(url, params) => {
    const cookies = Cookie();
    const config = {
        headers: {
            Authorization: "Bearer " + cookies.get('token')
        }
    }
    const res = await baseURL.delete(url, config, params);
    return res;
}

export default useDeleteData