import { defineStore, storeToRefs } from 'pinia'
import axios from 'axios'
import { message } from 'ant-design-vue'

export const useStore = defineStore('login', {
  state: () => {
    return {
      userInfo: {},
    }
  },
  getters: {},
  actions: {
    async login(data) {
      //   console.log({ data })
      try {
        const res = await axios.post('api/user/login')

        const redirect = this.router.currentRoute.value.query?.link
        this.router.replace(redirect || '/')
      } catch (e) {
        message.warn(e?.message || '系统繁忙')
      }
    },
    logout() {
      axios.post('api/user/logout')
      this.router.replace({ path: '/login', query: { link: location.href } })
    },
  },
})
