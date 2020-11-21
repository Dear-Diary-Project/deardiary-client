<template>
  <div>
    <div class="grid-container">
      <Navbar class="navbar-slot" />
      <Forgot class="forgot-box" />
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import Forgot from '../../components/Auth/Forgot'
export default {
  components: {
    Forgot,
    Navbar,
  },
}
</script>

<style lang="css" scoped>
.grid-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 9fr;
  grid-template-areas:
    'nav nav nav'
    '. card .';
}

.navbar-slot {
  grid-area: nav;
}

.forgot-box {
  grid-area: card;
  justify-self: center;
  align-self: center;
}

@media screen and (max-width: 768px) {
  .grid-container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 9fr;
    grid-template-areas:
      'nav'
      'card';
  }
}
</style>
