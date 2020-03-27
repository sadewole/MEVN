import axios from 'axios'
import {
    url
} from '../../utils/config'

const state = {
    authenticate: false,
    token: null,
    user: null,
    message: ''
}

const getters = {
    message: state => state.message,
    authenticate: state => state.authenticate,
    token: state => state.token
}

const actions = {
    setUserConfig(payload) {
        localStorage.setItem('token', payload.token)
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token")
        }
    },
    async register({
        commit
    }, data) {
        try {
            const config = {
                'Content-Type': 'application/json'
            }
            const body = JSON.stringify(data)
            const res = await axios.post(`${url}/auth`, body, config)
            this.setUserConfig(res.data)
            commit('authSuccess', res.data)
        } catch (err) {
            commit('authError', err.message)
        }
    },
    async login({
        commit
    }, data) {
        try {
            const config = {
                'Content-Type': 'application/json'
            }
            const body = JSON.stringify(data)
            const res = await axios.post(`${url}/user`, body, config)
            this.setUserConfig(res.data)
            commit('authSuccess', res.data)
        } catch (err) {
            commit('authError', err)
        }
    }
}

const mutations = {
    authSuccess: (state, response) => {
        state.authenticate = true
        state.user = response.user
        state.token = localStorage.getItem('token')
    },
    authError: (state, response) => state.message = response.msg
}

export default {
    state,
    getters,
    actions,
    mutations
}