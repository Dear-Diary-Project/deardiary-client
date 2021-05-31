<template>
  <div>
    <Navbar />
    <!-- <div class="container-fluid"> -->
    <Nuxt />
    <!-- </div> -->
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  computed: {
    isMobile() {
      return this.$store.state.device.isMobile
    },
  },
  // watch: {
  //   isMobile() {
  //     return this.$store.state.device.isMobile
  //   },
  // },
  mounted() {
    if (screen.width < 768) {
      this.checkDevice()
    }
  },
  methods: {
    checkDevice() {
      // this.check()
      // eslint-disable-next-line no-console
      console.log('checkdevice run')
      this.$store.commit('device/checkDevice')
    },
    // ...mapMutations({
    //   check: 'device/checkDevice',
    // }),
  },
}
</script>

<style></style>
