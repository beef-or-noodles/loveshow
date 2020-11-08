<template>
<!--未注册拦截-->
    <van-overlay :show="getSignShow" >
        <div class="wrapper">
            <div class="block" >
                <div class="close" @click="close"><van-icon name="close"/></div>
                <div class="title">入驻拍客秀</div>
                <div class="box">
                    <div class="item">
                        <div class="icon">
                            <img src="../../assets/images/shop_icon.png" alt="">
                        </div>
                        <div class="ti">商家</div>
                        <div class="abs">
                            <p>我要买家秀</p>
                            <p>貌美如花</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="icon">
                            <img src="../../assets/images/user_icon.png" alt="">
                        </div>
                        <div class="ti">商家</div>
                                <div class="abs"><p>我来拍照</p><p>糊口养家</p></div>
                    </div>
                </div>
                <div class="button">
                    <van-button block type="warning" round>立即入驻</van-button>
                </div>

            </div>
        </div>
    </van-overlay>

</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    import { Overlay  as vanOverlay,icon as vanIcon ,Button as vanButton } from 'vant';
    export default {
        name: "signindia",
        components:{vanOverlay,vanIcon,vanButton},
        computed: {
            ...mapGetters(['getSignShow'])
        },
        data() {
            return {
                show: true
            }
        },
        methods: {
            ...mapMutations(['setSignShow']),
            close(){
                this.setSignShow(false)
            }
        },
    }
</script>

<style lang="less" scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .block {
        width: 320px;
        height: 420px;
        background-color: #fff;
        border-radius: 8px;
        padding: 0 20px;
        box-sizing: border-box;
        position: relative;
        .button{
            position: absolute;
            width:  calc(100% - 40px);
            bottom: 20px;
        }
        .close{
            position: absolute;
            font-size: 24px;
            margin-top: 10px;
            right: 10px;
        }
        .title{
          font-size: 26px;
            font-weight: 500;
            text-align: center;
            padding: 10px 0;
            margin: 20px 0;
        }
        .box{
            display: flex;
            text-align: center;
            justify-content: space-between;
            padding: 0 10px;
            .icon{
                img{
                    margin: 0 auto;
                    width: 100px;
                    height: 100px;
                }
            }
            .ti{
                font-size: 24px;
                margin-bottom: 20px;

            }
            .abs{
                p{
                    font-size: 18px;
                    color: @text-2-grey;
                }

            }
        }
    }
</style>