import axios from 'axios'
import {
    url
} from '../../utils/config'
import setAuthToken from '../../utils/setAuthToken'

const state = {
    authenticate: false,
    user: null,
    message: null
}

const getters = {
    message: state => state.message,
    authenticate: state => state.authenticate
}

const actions = {
    async register({
        commit
    }, data) {
        try {
            const config = {
                'Content-Type': 'application/json'
            }
            const res = await axios.post(`${url}/user`, data, config)
            commit('authSuccess', res.data)
        } catch (err) {
            commit('authError', err.response.data)
        }
    },
    async login({
        commit
    }, data) {
        try {
            const config = {
                'Content-Type': 'application/json'
            }
            const res = await axios.post(`${url}/auth`, data, config)
            commit('authSuccess', res.data)
        } catch (err) {
            commit('authError', err.response.data)
        }
    },
    async logout({
        commit
    }) {
        commit('logout')
    }
}

const mutations = {
    authSuccess: (state, response) => {
        state.user = response.user
        state.authenticate = true
        state.message = null
        localStorage.setItem('token', response.token);
        setAuthToken(localStorage.token)
    },
    authError: (state, response) => {
        state.message = response.msg
        state.authenticate = false
        state.user = null
    },
    logout: (state) => {
        state.authenticate = false
        state.user = null
        localStorage.removeItem('token');
        setAuthToken(localStorage.token)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}