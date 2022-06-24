import { defineStore, storeToRefs, acceptHMRUpdate } from 'pinia'
import { compose } from 'ramda'

export const store = defineStore('formTest', {
  state: () => {
    return {
      testInput: '',
    }
  },
})

// export const storeRefs = () => storeToRefs(store(a(b())))
export const storeRefs = compose(storeToRefs, store, a, b)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot))
