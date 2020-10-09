<template>
  <div>
    <b-card title="Login" style="max-width: 30rem;" class="mb-2">
      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input id="input-1" placeholder="Username"></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
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
      <b-form-text class="mb-1"
        >Forgot password?
        <b-link to="/auth/forgot">Reset here!</b-link></b-form-text
      >
      <b-form-text class="mb-3"
        >New here? <b-link to="/auth/signup">Sign Up here!</b-link></b-form-text
      >
      <b-button href="#" variant="primary">Login</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style lang="css" scoped></style>
