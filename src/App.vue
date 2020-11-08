<template>
  <div id="app" class="page-bg">
    <transition name="fade">
        <loading v-if="getLoading" />
    </transition>
    <signindia></signindia>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '@/components/loading/loading'
import signindia from '@/components/layout/signindia'
export default {
    name: 'App',
    components: {
        loading,signindia
    },
    computed: {
        ...mapGetters(['getLoading'])
    }
}
</script>

<style lang="less">
  @import "./assets/less/public.less";
  #app{
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
