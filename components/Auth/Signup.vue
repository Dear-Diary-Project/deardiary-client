<template>
  <div>
    <b-card title="Sign Up" style="max-width: 30rem;" class="mb-2">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input id="input-1" placeholder="Enter name"></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Email:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Username:" label-for="input-3">
        <b-form-input id="input-3" placeholder="Username"></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="Date of Birth:"
        label-for="input-4"
      >
        <b-form-input id="date" type="date"></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Password:"
        label-for="text-password"
      >
        <b-input
          id="text-password"
          type="password"
          placeholder="Password"
          aria-describedby="password-help-block"
        ></b-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </b-form-text>
      </b-form-group>
      <b-form-group
        id="input-group-6"
        label="Confirm Password:"
        label-for="text-password"
      >
        <b-input
          id="text-password"
          placeholder="Password"
          type="password"
        ></b-input>
      </b-form-group>
      <b-form-text class="mb-3"
        >Already an User?
        <b-link to="/auth/login">Login here!</b-link></b-form-text
      >
      <b-button href="#" variant="primary">Sign up</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Signup',
}
</script>

<style lang="css" scoped></style>
