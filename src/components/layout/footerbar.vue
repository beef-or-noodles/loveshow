<template>
    <footer>
        <div class="logo active" >
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <div>
            <div class="icon iconfont icon-dating"></div>
            <p>大厅</p>
        </div>
        <div class="push">
            <div class="iconpush">
                <div class="icon iconfont icon-jia flex-center"></div>
            </div>
            <p>发布</p>
        </div>
        <div class="active">
            <div class="icon iconfont icon-dingdanguanli-"></div>
            <p>订单</p>
        </div>
        <div>
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
                activeRouter:''
            }
        }
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
                color: @theme-coloe;
            }
            p{
                font-size: 12px;
            }
        }
        .logo{
            &.active{
                background-color: @theme-coloe;
            }
            img{
                width: 40px;
                height: 40px;
            }
        }
        .push{
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