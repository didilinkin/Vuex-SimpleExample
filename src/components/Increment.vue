<template>
  <div>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
  </div>
</template>

<script>
// 执行
import { mapActions } from 'vuex'
export default {
  methods: mapActions([ 'increment','decrement' ])
}
</script>