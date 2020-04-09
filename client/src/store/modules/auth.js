import axios from 'axios'
// import {
//     url
// } from '../../utils/config'
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
            const res = await axios.post(`/api/v1/user`, data, config)
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
            const res = await axios.post(`/api/v1/auth`, data, config)
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
        let tokenObj = {
            value: response.token,
            expiresIn: new Date(new Date().getTime() + (23 * 60 * 60 * 1000)).getTime()
        }
        tokenObj = JSON.stringify(tokenObj);
        localStorage.setItem('token', tokenObj);
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
        setAuthToken(false)
    },
    isLogin: (state) => {
        let tokenObj = localStorage.getItem('token');
        //first check if token is present
        if (tokenObj) {
            tokenObj = JSON.parse(tokenObj);
            //check if token hasn't expired
            if (!(new Date().getTime() > parseInt(tokenObj.expiresIn))) {
                state.authenticate = true;
                setAuthToken(tokenObj.value);
                return tokenObj.value;
            }
        }
        return false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}