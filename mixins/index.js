export const mobile = {
  computed: {
    isMobile() {
      return this.$store.state.device.isMobile
    },
  },
}
