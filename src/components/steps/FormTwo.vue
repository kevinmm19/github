<script
  setup
  lang="ts"
>
  import {
    Field,
    Form,
    ErrorMessage
  } from 'vee-validate'
  import {
    bool,
    object,
    string
  } from 'yup'
  import { computed } from 'vue'
  import { useUserStore } from '@/stores/user'
  import Navigation from './Navigation.vue'

  const userStore = useUserStore()

  const email = computed({
    get: () => userStore.email,
    set: (value: string) => userStore.updateEmail(value)
  })

  const hasAgreeToTerms = computed({
    get: () => userStore.hasAgreeToTerms,
    set: (value: boolean) => userStore.updateHasAgreeToTerms(value)
  })

  const schema = object({
    email: string().required().email().label('Email'),
    hasAgreeToTerms: bool().required('You must agree with terms and services')
  })
</script>

<template>
  <Transition
    name="fade"
    mode="out-in"
    appear
  >
    <div class="form">
      <h2>Last Step</h2>

      <Form
        :validation-schema="schema"
        v-slot="{ meta }"
      >
        <!-- Email -->
        <label for="email">* Email</label>
        
        <Field
          v-model="email"
          id="email"
          name="email"
          type="email"
          autofocus
        />
        
        <ErrorMessage name="email" />
        
        <!-- Agree with terms and services -->
        <label for="hasAgreeToTerms">* I agree with terms and services</label>
        
        <Field
          v-model="hasAgreeToTerms"
          :value="true"
          id="hasAgreeToTerms"
          name="hasAgreeToTerms"
          type="checkbox"
        />
        
        <ErrorMessage name="hasAgreeToTerms" />

        <Navigation
          :current-step="3"
          :isNextButtonDisabled="!meta.valid || !hasAgreeToTerms"
        />
      </Form>
    </div>
  </Transition>
</template>

<style
  lang="scss"
  scoped
>

</style>