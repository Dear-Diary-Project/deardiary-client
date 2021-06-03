<template>
  <div v-if="!isMobile">
    <b-calendar v-model="value" @context="onContext"></b-calendar>
  </div>
  <div v-else>
    <img
      class="icon-large"
      src="/calendar.svg"
      alt=""
      @click="showCalendar = !showCalendar"
    />

    <b-modal v-model="showCalendar" centered title="Select Date">
      <b-container fluid>
        <div class="centered__calendar">
          <b-calendar v-model="value" @context="onContext"></b-calendar>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mobile } from '@/mixins'
export default {
  mixins: [mobile],
  data() {
    return {
      showCalendar: false,
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

<style lang="scss" scoped>
.centered__calendar {
  display: grid;
  width: 100%;
  place-items: center;
}
</style>
