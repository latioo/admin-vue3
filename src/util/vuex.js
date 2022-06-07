import { computed, toRefs } from 'vue'
import { useStore } from 'vuex'

export const useVuex = (module) => {
    const store = useStore()
    return {
        stateRefs: toRefs(computed(() => store.state[module]).value),
        commit: (ci, data) => store.commit(`${module}/${ci}`, data)
    }
}
