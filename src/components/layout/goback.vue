<template>
    <div class="goback" :class="[postion]" @click="goback">
        <div class="iconfont icon-next"></div>
    </div>
</template>

<script>
    export default {
        name: "goback",
        props: {
            postion: {
                type: String,
                default: 'left'
            },
        },
        methods: {
            goback() {
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="less" scoped>
.goback{
    position: fixed;
    top: 10px;
    z-index: 999;
    box-shadow: 1px 1px 2px @text-1-grey;
    border-radius: 50%;
    background-color: white;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconfont{
        font-size: 22px;
        color: @text-1-grey;
    }
    &.left{
        left: 10px;
    }
    &.right{
        right: 15px;
    }
}
</style>