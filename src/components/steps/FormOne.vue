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
    <div class="form">
      <h2>User Information</h2>

      <Form
        :validation-schema="schema"
        v-slot="{ meta }"
      >
        <!-- First Name -->
        <label for="firstName">* First Name</label>
        
        <Field
          v-model.trim="firstName"
          id="firstName"
          name="firstName"
          type="text"
          autofocus
        />
        
        <ErrorMessage name="firstName" />

        <!-- Last Name -->
        <label for="lastName">* Last Name</label>
        
        <Field
          v-model.trim="lastName"
          id="lastName"
          name="lastName"
          type="text"
        />
        
        <ErrorMessage name="lastName" />
        
        <!-- Username -->
        <label for="username">* Username</label>
        
        <Field
          v-model.trim="username"
          id="username"
          name="username"
          type="text"
        />
        
        <ErrorMessage name="username" />

        <Navigation
          :current-step="2"
          :isNextButtonDisabled="!meta.valid"
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