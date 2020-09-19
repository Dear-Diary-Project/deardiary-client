<template>
  <div>
    <b-card title="Forgot Password" style="max-width: 30rem;" class="mb-2">
      <b-form-group
        id="input-group-1"
        label="Registerd Email:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-text class="mb-1"
        ><b-link to="/auth/login">Back</b-link></b-form-text
      >
      <b-form-text class="mb-3">
        <b-link class="mb-3" href="#">Resend OTP</b-link></b-form-text
      >
      <b-button to="/auth/reset" variant="primary">Send OTP</b-button>
      <!-- <b-button href="#" variant="primary">Send OTP</b-button> -->
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Forgot',
}
</script>

<style lang="css" scoped></style>
