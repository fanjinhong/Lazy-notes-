import * as types from './mutation-types'

const mutations = {
    [types.LOGIN](state, data) {
        localStorage.setItem('token', data)
        state.token = data
    },
    [types.LOGOUT](state) {
        localStorage.removeItem('token')
        state.token = null
    },
    [types.USERNAME](state, data) {
        localStorage.setItem('username', data)
        state.username = data
    },
    ADD_CATAGORY(state,value){
        state.note.push(value)
    },
    ADD_NOTE(state,value){
        state.note[0].noteTitle.push(value)
    },
    SET_CATAINDEX(state,value){
        state.cataIndex = value
    }
}

export default mutations