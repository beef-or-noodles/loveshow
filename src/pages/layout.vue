<template>
    <div>
        <div class="main">
            <router-view></router-view>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import footerBar from '@/components/layout/footerbar'
    export default {
        name: "layout",
        components:{footerBar}
    }
</script>

<style lang="less" scoped>
    .main{
        padding-bottom: 40px;
    }
</style>