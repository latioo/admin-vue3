export default {
    namespaced: true,
    state: {
        // 菜单
        menuCollapsed: false, // collapsed 坍塌
        // tabs导航
        tabs: [],
        activeTab: '/', // 这里和菜单区分开, 因为 tabs 和菜单可能不一致; 比如 :id 这种路由, 
    },
    actions: {
        // async getAllProducts({ commit }) {
        //     const products = await shop.getProducts()
        //     commit('setProducts', products)
        // }
    },
    mutations: {
        toggleMenuCollapsed(state) {
            state.menuCollapsed = !state.menuCollapsed
        },
        addTab(state, data) {
            if (!state.tabs.some(x => x.path == data.path))
                state.tabs.push(data)
            state.activeTab = data.path
        },
        delTab(state, data) {
            state.tabs = state.tabs.filter(x => x.path != data)
        },
    }
}