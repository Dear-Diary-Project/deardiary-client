<template>
  <div v-if="!isMobile">
    <div class="home__container">
      <div class="home__left">
        <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
      </div>
      <div class="home__middle">
        <h3>Your recent posts</h3>
        <BlogListItem v-for="n in 5" :key="n" />
      </div>
      <div class="home__right">
        <Calendar />
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Hii</h1>
  </div>
</template>

<script>
import { mobile } from '@/mixins'
export default {
  mixins: [mobile],
}
</script>

<style lang="scss" scoped>
.home__container {
  display: flex;
  height: 100vh;
  width: 100%;
  gap: 16px;
}
.home__left {
  height: 100%;
  width: 100%;
  /* background: red; */
  flex: 0.2;
}
.home__middle {
  height: 100%;
  width: 100%;
  /* background: green; */
  flex: 0.6;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.home__right {
  height: 100%;
  width: 100%;
  /* background: blue; */
  flex: 0.3;
}
</style>
