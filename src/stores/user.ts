import { defineStore } from 'pinia'

interface State {
  firstName: string
  lastName: string
  username: string
  email: string
  hasAgreeToTerms: boolean
}

export const useUserStore = defineStore('user', {
  // convert to a function
  state: (): State => ({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    hasAgreeToTerms: false
  }),
  // mutations are now actions, instead of `state` as first argument use `this`
  actions: {
    // no context as first argument
    updateFirstName (payload: string) {
      this.firstName = payload
    },
    updateLastName(payload: string) {
      this.lastName = payload
    },
    updateUsername (payload: string) {
      this.username = payload
    },
    updateEmail(payload: string) {
      this.email = payload
    },
    updateHasAgreeToTerms(payload: boolean) {
      this.hasAgreeToTerms = payload
    },
    // reset state using `$reset`
    clearUser () {
      this.$reset()
    }
  }
})
