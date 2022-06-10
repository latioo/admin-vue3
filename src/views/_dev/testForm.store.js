import { defineStore, storeToRefs } from 'pinia'

export const useStore = defineStore('formTest', {
    state: () => {
        return {
            testInput: '',
        }
    },
})

export const useStoreRefs = () => storeToRefs(useStore())