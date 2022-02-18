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
  <div class="flex items-center justify-between">
    <button
      v-if="!isFirstStep"
      class="
        px-8 py-4 font-bold text-white bg-green-900 hover:bg-green-600
        border border-solid border-green-400 rounded-3xl cursor-pointer
      "
      qa-ref="back-button"
      type="button"
      @click="navigateBack"
    >
      Back
    </button>
    
    <span class="font-bold text-green-400">{{ props.currentStep }} / 3</span>
    
    <button
      :class="{ 'opacity-50 cursor-not-allowed': props.isNextButtonDisabled }"
      :disabled="props.isNextButtonDisabled"
      class="
        px-8 py-4 font-bold text-white bg-green-900 hover:bg-green-600
        border border-solid border-green-400 rounded-3xl cursor-pointer
      "
      qa-ref="next-button"
      type="button"
      @click="navigateNext"
    >
      {{ nextButtonText }}
    </button>
  </div>
</template>
