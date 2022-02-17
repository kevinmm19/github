<script
  setup
  lang="ts"
>
  import {
    computed,
    defineProps
  } from 'vue'
  import { useRouter } from 'vue-router'
  
  const props = defineProps<{
    currentStep: number,
    isNextButtonDisabled: boolean
  }>()

  /* Navigation States */

  const isFirstStep = computed(() => props.currentStep === 1)

  const nextButtonText = computed(() => props.currentStep === 3 ? 'Finish' : 'Next')

  /* Router Navigation */

  const router = useRouter()

  const navigateBack = () => {
    switch (props.currentStep) {
      case 3:
        router.push('/2')
        break;
      default:
        router.push('/')
        break;
    }
  }

  const navigateNext = () => {
    switch (props.currentStep) {
      case 1:
        router.push('/2')
        break;
      case 2:
        router.push('/3')
        break;
      case 3:
        router.push('/user')
        break;
      default:
        router.push('/')
        break;
    }
  }
</script>

<template>
  <div class="navigation">
    <button
      v-if="!isFirstStep"
      qa-ref="back-button"
      type="button"
      @click="navigateBack"
    >
      Back
    </button>
    
    <span>
      {{ props.currentStep }} / 3
    </span>
    
    <button
      :disabled="props.isNextButtonDisabled"
      qa-ref="next-button"
      type="button"
      @click="navigateNext"
    >
      {{ nextButtonText }}
    </button>
  </div>
</template>

<style
  scoped
  lang="scss"
>

</style>
