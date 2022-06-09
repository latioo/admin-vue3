import { createStore, createLogger } from 'vuex'
import layout from './modules/layout'
import vuexTest from './modules/vuexTest'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules: {
        layout,
        vuexTest
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})

console.log(store)

export default store