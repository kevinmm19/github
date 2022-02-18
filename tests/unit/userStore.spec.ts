import {
  createPinia,
  setActivePinia
} from 'pinia'
import { useUserStore } from '@/stores/user'

// creates a fresh pinia and make it active so it's automatically picked
// up by any useUserStore() call without having to pass it: `useUserStore(pinia)`
setActivePinia(createPinia())

const userStore = useUserStore()

describe('User Store', () => {
  beforeEach(() => {
    userStore.clearUser()
  })

  it('should update first name', () => {    
    userStore.updateFirstName('Kevin')
    
    expect(userStore.firstName).toBe('Kevin')
  })

  it('should update last name', () => {    
    userStore.updateLastName('Martinez')
    
    expect(userStore.lastName).toBe('Martinez')
  })

  it('should update username', () => {    
    userStore.updateUsername('kevinmm19')
    
    expect(userStore.username).toBe('kevinmm19')
  })

  it('should update email', () => {    
    userStore.updateEmail('kevinmm.19@gmail.com')
    
    expect(userStore.email).toBe('kevinmm.19@gmail.com')
  })

  it('should update hasAgreeToTerms', () => {    
    userStore.updateHasAgreeToTerms(true)
    
    expect(userStore.hasAgreeToTerms).toBeTruthy()
  })

  it('should reset the state', () => {    
    userStore.updateFirstName('Kevin')
    userStore.updateLastName('Martinez')
    userStore.updateUsername('kevinmm19')
    userStore.updateEmail('kevinmm.19@gmail.com')
    userStore.updateHasAgreeToTerms(true)

    userStore.clearUser()

    expect(userStore.firstName).toBe('')
    expect(userStore.lastName).toBe('')
    expect(userStore.email).toBe('')
    expect(userStore.username).toBe('')
    expect(userStore.hasAgreeToTerms).toBeFalsy()
  })
})
