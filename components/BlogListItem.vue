<template>
  <div>
    <b-card>
      <b-media tag="li">
        <template #aside>
          <b-img blank blank-color="#abc" width="96" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0 mb-1">{{ title }}</h5>
        <p class="mb-0">
          {{ para }}
        </p>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'First Thought',
    para:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }),
}
</script>

<style lang="scss" scoped></style>
