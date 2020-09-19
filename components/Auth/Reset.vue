<template>
  <div>
    <b-card title="Reset Password" style="max-width: 30rem;" class="mb-2">
      <template v-if="!isVerified">
        <b-form-group
          id="input-group-1"
          label="OTP:"
          label-for="input-1"
          description="Never share your OTP with anyone else."
        >
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Enter OTP"
          ></b-form-input>
        </b-form-group>

        <b-form-text class="mb-1"
          ><b-link to="/auth/forgot">Back</b-link></b-form-text
        >
        <b-form-text class="mb-3">
          <b-link class="mb-3" href="#">Resend OTP</b-link></b-form-text
        >
        <b-button variant="primary" @click="isVerified = true"
          >Verify OTP</b-button
        >
        <!-- <b-button href="#" variant="primary">Verify OTP</b-button> -->
      </template>
      <template v-else>
        <b-form-group
          id="input-group-2"
          label="New Password:"
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
          id="input-group-3"
          label="Confirm Password:"
          label-for="text-password"
        >
          <b-input
            id="text-password"
            placeholder="Password"
            type="password"
          ></b-input>
        </b-form-group>
        <b-button variant="primary" to="/auth/login">Login again</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Reset',
  data() {
    return {
      isVerified: false,
    }
  },
}
</script>

<style lang="css" scoped></style>
