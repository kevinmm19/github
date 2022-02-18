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
    <div class="
      mx-auto mt-8 p-8 max-w-2xl
      border border-solid border-green-400 rounded-3xl shadow-2xl
    ">
      <h2 class="pb-6 text-green-400">Last Step</h2>

      <Form
        :validation-schema="schema"
        v-slot="{ meta }"
        class="text-left"
      >
        <!-- Email -->
        <div class="mt-4 mb-8">
          <label
            class="font-bold"
            for="email"
          >
            * Email
          </label>
        
          <Field
            v-model="email"
            class="my-4 pl-4 h-12 w-full bg-gray-600 text-white border-0"
            id="email"
            name="email"
            type="email"
            autofocus
          />
          
          <ErrorMessage
            class="text-red-400"
            name="email"
          />
        </div>

        <!-- Agree with terms and services -->
        <div class="mt-4 mb-8">
          <div class="flex justify-between">
            <label
              class="font-bold"
              for="hasAgreeToTerms"
            >
              * I agree with terms and services
            </label>
          
            <Field
              v-model="hasAgreeToTerms"
              :value="true"
              class="ml-4 h-7 w-7"
              id="hasAgreeToTerms"
              name="hasAgreeToTerms"
              type="checkbox"
            />
          </div>
          
          <ErrorMessage
            as="p"
            class="mt-4 text-red-400"
            name="hasAgreeToTerms"
          />
        </div>

        <Navigation
          :current-step="3"
          :isNextButtonDisabled="!meta.valid || !hasAgreeToTerms"
        />
      </Form>
    </div>
  </Transition>
</template>
