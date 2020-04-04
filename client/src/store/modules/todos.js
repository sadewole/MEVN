import axios from 'axios'
import {
    url
} from '../../utils/config'

const state = {
    todos: []
}

const getters = {
    allTodos: state => state.todos
}

const actions = {
    async fetchTodos({
        commit
    }) {
        const response = await axios.get(`${url}/item`)
        commit('setTodos', response.data)
    },

    async addTodo({
        commit
    }, name) {
        const response = await axios.post(`${url}/item`, {
            name
        })

        commit('newTodo', response.data)
    },

    async deleteTodo({
        commit
    }, id) {
        await axios.delete(`${url}/item/${id}`)

        commit('removeTodo', id)
    },

    async filterTodos({
        commit
    }, e) {
        // Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)


        const response = await axios.get(`${url}`)
        commit('setTodos', response.data.splice(0, limit))

    },

    async updateTodo({
        commit
    }, updTodo) {
        try {
            const response = await axios.put(`${url}/item/${updTodo._id}`)

            commit('updateTodo', response.data)

        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err.response)
        }
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo._id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo._id === updTodo._id)
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}