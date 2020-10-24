<template>
  <div id="app">
    <transition name="fade">
        <loading v-if="getLoading" />
    </transition>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '@/components/loading/loading'
export default {
    name: 'App',
    components: {
        loading
    },
    computed: {
        ...mapGetters(['getLoading'])
    }
}
</script>

<style>
  #app{
    /*padding-bottom: constant(safe-area-inset-bottom);*/
    /*padding-bottom: env(safe-area-inset-bottom);*/
  }
</style>
