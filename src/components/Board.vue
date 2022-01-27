<script setup>
import Cell from './Cell.vue';

defineProps({ board: Array, wiggle: Array, evaluation: Array });
</script>

<template>
  <main>
    <section>
      <Cell v-for="(cell, index) in board" :cell="cell" :index="index" :wiggle="wiggle" :evaluation="evaluation" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
}
section {
  /* width: 320px; */
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
}
</style>
