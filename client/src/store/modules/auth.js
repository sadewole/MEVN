import axios from 'axios'
import {
    url
} from '../../utils/config'

const state = {
    authenticate: false,
    token: null,
    user: null,
    message: null
}

const getters = {
    message: state => state.message,
    authenticate: state => state.authenticate,
    token: state => state.token
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
    }
}

const mutations = {
    authSuccess: (state, response) => {
        state.user = response.user
        state.authenticate = true
        state.token = localStorage.getItem('token')
        state.message = null
    },
    authError: (state, response) => {
        state.message = response.msg
        state.authenticate = false
        state.user = null
        state.token = null
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}