<template>
  <div>
    <b-calendar v-model="value" @context="onContext"></b-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      context: null,
    }
  },
  methods: {
    onContext(ctx) {
      this.context = ctx
    },
  },
}
</script>

<style lang="scss" scoped></style>
