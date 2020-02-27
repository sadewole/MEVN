import axios from 'axios'

const url = 'http://localhost:5000/api/v1/item'

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
        const response = await axios.get(`${url}`)
        commit('setTodos', response.data)
    },

    async addTodo({
        commit
    }, name) {
        const response = await axios.post(`${url}`, {
            name
        })

        commit('newTodo', response.data)
    },

    async deleteTodo({
        commit
    }, id) {
        await axios.delete(`${url}/${id}`)

        commit('removeTodo', id)
    },

    async filterTodos({
        commit
    }, e) {
        // Get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)


        const response = await axios.get(`${url}`)
        commit('setTodos', response.data.splice(0, limit))

    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo._id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}