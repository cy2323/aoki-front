import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 通过Vuex储存后端取得的菜单数据
export default new Vuex.Store({
    state: {
        routes: []
    },
    // 改变status值的方法【同步执行】
    mutations: {
        //  初始化路由
        initRoutes(state, data) {
            state.routes = data;
        }
    },
    // 改变值的方法【异步执行】
    actions:{
        
    }

})