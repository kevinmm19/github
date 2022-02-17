import {
  shallowMount,
  VueWrapper
} from '@vue/test-utils'
import Navigation from '@/components/steps/Navigation.vue'

const propsData = {
  currentStep: 1,
  isNextButtonDisabled: true
}

let wrapper: VueWrapper<any>

jest.mock('vue-router', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

describe('Navigation', () => {
  beforeEach(() => wrapper = shallowMount(Navigation, { propsData }));

  it('should hide Back button when current step is 1', () => {
    const backButton = wrapper.find('[qa-ref="back-button"]')
    
    expect(backButton.exists()).toBeFalsy()
  })

  it('should show Back button when current step is not 1', async () => {
    await wrapper.setProps({ currentStep: 2 })
    
    const backButton = wrapper.find('[qa-ref="back-button"]')
    
    expect(backButton.exists()).toBeTruthy()
  })

  it('should show "Next" text for Next button when current step is not 3', () => {
    const nextButton = wrapper.find('[qa-ref="next-button"]')
    
    expect(nextButton.text()).toBe('Next')
  })
  
  it('should show "Finish" text for Next button when current step is 3', async () => {
    await wrapper.setProps({ currentStep: 3 })

    const nextButton = wrapper.find('[qa-ref="next-button"]')
    
    expect(nextButton.text()).toBe('Finish')
  })

  it('should disable Next button when isNextButtonDisabled is true', () => {
    const nextButton = wrapper.find('[qa-ref="next-button"]')
    
    expect(nextButton.attributes().disabled).toBeDefined()
  })

  it('should enable Next button when isNextButtonDisabled is false', async () => {
    await wrapper.setProps({ isNextButtonDisabled: false })
    
    const nextButton = wrapper.find('[qa-ref="next-button"]')
    
    expect(nextButton.attributes().disabled).not.toBeDefined()
  })
})
