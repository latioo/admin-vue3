import { computed } from 'vue'
import { useStore } from 'vuex'

export const useVuex = (module) => {
    const store = useStore()
    return {
        state: (prop) => computed(() => store.state[module][prop]),
        commit: (ci, data) => store.commit(`${module}/${ci}`, data)
    }
}
