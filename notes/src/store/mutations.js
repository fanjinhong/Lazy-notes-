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
        state.note[state.cataIndex].noteTitle.push(value)
    },
    SET_CATAINDEX(state,value){
        state.cataIndex = value
    },
    selectMenu(state, val) {
        // val.path === '/home' ? state.currentMenu = {
        //     path: "/home",
        //     name: "Home",
        //     label: "首页",
        //     icon: "s-home",
        //     url: "/Home",
        //   } : state.currentMenu = val
        if (val.path === '/home') {
            state.currentMenu = {
                path: "/home",
                name: "Home",
                label: "首页",
                icon: "s-home",
                url: "/Home",
            }
        }else{
            state.currentMenu = val;
            let result = state.tabList.findIndex(item => item.name === val.name)
            if(result === -1) {
                state.tabList.push(val)
            }
        }
    },
    closeTab(state, val){
        let result = state.tabList.findIndex(item => item.name === val.name)
        state.tabList.splice(result, 1)
    }
}

export default mutations