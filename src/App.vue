<template>
  <div>
    <!--Components/组件-->
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Display from './components/Display.vue'
import Increment from './components/Increment.vue'

export default {
  name: 'app',
  components: {
    Display: Display,
    Increment: Increment
  }
}
</script>
