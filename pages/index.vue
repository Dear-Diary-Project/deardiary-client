<template>
  <div class="container">
    <div>
      <Logo class="splash-logo" />
      <h1 class="title">
        Welcome to Dear Diary
      </h1>
      <h3 class="subtitle">A place for every memory</h3>
      <div class="links">
        <a target="_blank" href="https://github.com/Dear-Diary-Project">
          <img class="logo" src="/github.svg" alt="Android Logo" />
        </a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1W1o-CoYSAKfUZZzIISvSYquxtWTMrMwx/view?usp=drivesdk"
          ><img class="logo" src="/android.svg" alt="Android Logo"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
}
.splash-logo {
  max-width: 350px;
}
.logo {
  width: 64px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .title {
    font-size: 42px;
  }
  .subtitle {
    font-size: 22px;
  }
}
</style>
