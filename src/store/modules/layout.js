export default {
    namespaced: true,
    state: {
        menuCollapsed: false // collapsed 坍塌
    },
    actions: {
        // async getAllProducts({ commit }) {
        //     const products = await shop.getProducts()
        //     commit('setProducts', products)
        // }
    },
    mutations: {
        // setMenuCollapsed(state, val) {
        //     state.menuCollapsed = val
        // },
        toggleMenuCollapsed(state) {
            state.menuCollapsed = !state.menuCollapsed
        },
    }
}