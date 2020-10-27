<template>
    <footer>
        <div class="logo"
             :class="[activeRouter==='/home'?'active':'']"
             @click="$router.push({path: '/home'})">
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <div :class="[activeRouter==='/hall'?'active':'']"
             @click="$router.push({path: '/hall'})"
        >
            <div class="icon iconfont icon-dating"></div>
            <p>大厅</p>
        </div>
        <div class="push" :class="[activeRouter==='/home'?'active':'']">
            <div class="iconpush">
                <div class="icon iconfont icon-jia flex-center"></div>
            </div>
            <p>发布</p>
        </div>
        <div @click="orderRouter" :class="[activeRouter.indexOf('_order')!==-1?'active':'']">
            <div class="icon iconfont icon-dingdanguanli-"></div>
            <p>订单</p>
        </div>
        <div :class="[activeRouter==='/my'?'active':'']"
             @click="$router.push({path: '/my'})">
            <div class="icon iconfont icon-wode1"></div>
            <p>我的</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footerbar",
        data() {
            return {
                activeRouter:'/home'
            }
        },
        watch: {
            '$route'(newValue, oldValue) {
                this.activeRouter = newValue.path
            }
        },
        methods: {
            orderRouter() {
                // 判断商家和拍客
                if (true) {
                    this.$router.push({path: `/user_order`})
                } else {
                    this.$router.push({path: `/shop_order`})
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    footer{
        position: fixed;
        bottom:0;
        z-index: 999;
        width: 100%;
        background-color: @page-bg-white;
        padding: 5px 15px;
        .iphonex(10px);
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: space-between;
        box-shadow: 0 -1px 3px @page-bg-default;
        div{
            text-align: center;
            &.active{
                position: relative;
                &::after{
                    content: "";
                    position: absolute;
                    display: block;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: @theme-coloe;
                    opacity: .6;
                    top: 0;
                    right: 0px;
                }
            }
            p{
                font-size: 12px;
            }
        }
        .logo{
            &.active{
                background-color: @theme-coloe;
                &::after{
                    display: none;
                }
            }
            img{
                width: 40px;
                height: 40px;
            }
        }
        .push{
            &.active::after{
                display: none;
            }
            .iconpush{
                background-color: @page-bg-white;
                padding: 3px;
                margin-top: -25px;
                border-radius: 50%;
                .icon{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: @theme-coloe;
                }
            }
        }
        .icon{
          font-size: 20px;
        }
    }
</style>