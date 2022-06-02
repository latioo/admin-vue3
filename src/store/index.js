import { createStore, createLogger } from 'vuex'
import layout from './modules/layout'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        layout,
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})