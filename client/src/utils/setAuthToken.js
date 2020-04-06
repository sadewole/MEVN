import axios from 'axios'

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token")
        };
    } else {
        localStorage.removeItem('token')
        delete axios.defaults.headers['x-auth-token']
    }
}

export default setAuthToken