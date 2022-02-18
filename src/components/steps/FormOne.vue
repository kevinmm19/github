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
    object,
    string
  } from 'yup'
  import { computed } from 'vue'
  import { useUserStore } from '@/stores/user'
  import Navigation from './Navigation.vue'

  const userStore = useUserStore()

  const firstName = computed({
    get: () => userStore.firstName,
    set: (value: string) => userStore.updateFirstName(value)
  })

  const lastName = computed({
    get: () => userStore.lastName,
    set: (value: string) => userStore.updateLastName(value)
  })

  const username = computed({
    get: () => userStore.username,
    set: (value: string) => userStore.updateUsername(value)
  })

  const schema = object({
    firstName: string().required().trim().label('First name'),
    lastName: string().required().trim().label('Last name'),
    username: string().required().trim().label('Username')
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
      <h2 class="pb-6 text-green-400">User Information</h2>

      <Form
        :validation-schema="schema"
        v-slot="{ meta }"
        class="text-left"
      >
        <!-- First Name -->
        <div class="mt-4 mb-8">
          <label
            class="font-bold"
            for="firstName"
          >
            * First Name
          </label>
        
          <Field
            v-model.trim="firstName"
            class="my-4 pl-4 h-12 w-full bg-gray-600 text-white border-0"
            id="firstName"
            name="firstName"
            type="text"
            autofocus
          />
          
          <ErrorMessage
            class="text-red-400"
            name="firstName"
          />
        </div>

        <!-- Last Name -->
        <div class="mt-4 mb-8">
          <label
            class="font-bold"
            for="lastName"
          >
            * Last Name
          </label>
        
          <Field
            v-model.trim="lastName"
            class="my-4 pl-4 h-12 w-full bg-gray-600 text-white border-0"
            id="lastName"
            name="lastName"
            type="text"
          />
          
          <ErrorMessage
            class="text-red-400"
            name="lastName"
          />
        </div>
        
        <!-- Username -->
        <div class="mt-4 mb-8">
          <label
            class="font-bold"
            for="username"
          >
            * Username
          </label>
          
          <Field
            v-model.trim="username"
            class="my-4 pl-4 h-12 w-full bg-gray-600 text-white border-0"
            id="username"
            name="username"
            type="text"
          />
          
          <ErrorMessage
            class="text-red-400"
            name="username"
          />
        </div>

        <Navigation
          :current-step="2"
          :isNextButtonDisabled="!meta.valid"
        />
      </Form>
    </div>
  </Transition>
</template>
