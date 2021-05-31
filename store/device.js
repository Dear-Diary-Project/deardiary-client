// state

export const state = () => ({
  isMobile: false,
})

// mutations
export const mutations = {
  checkDevice(state) {
    state.isMobile = true
  },
}
