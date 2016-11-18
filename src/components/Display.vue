<template>
  <div>
    <h3>value: {{ count }}</h3>
  </div>
</template>

<script>
// 获取
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([ 'count' ])
}
</script>