<template>
    <!--我的-->
    <div>
        <div class="banner">
            <div class="userInfo">
                <div class="info">
                    <div class="icon">
                        <img src="../../assets/images/showImg.jpg" alt="">
                    </div>
                    <p class="name">游客32510</p>
                </div>
                <div class="message" v-if="identity == 1">
                    <i class="iconfont icon-xiaoxi"></i>
                    <span class="hintnum">2</span>
                </div>
                <div class="identity" v-else>
                    {{identity==2?'拍客':'商家'}}
                </div>
            </div>
        </div>
       <div class="content">
           <template v-if="identity == 1">
               <tourist></tourist>
           </template>
           <template v-else-if="identity == 2">
               <shop></shop>
           </template>
       </div>
    </div>
</template>

<script>
    import tourist from './userStatus/tourist'
    import shop from './userStatus/shop'
    export default {
        name: "info",
        components:{tourist,shop},
        data() {
            return {
                identity: 2
            }
        },
    }
</script>

<style lang="less" scoped>
.banner{
    background: url("../../assets/images/mybanner.jpg");
    background-size: 100%;
    height: 160px;
    padding: 15px;
    box-sizing: border-box;
    .identity{
        height: 20px;
      font-size: 14px;
      background: white;
        float: right;
        padding: 3px 20px;
        border-radius: 50px;
    }

    .userInfo{
        display: flex;
        .info{
            display: flex;
            flex: 1;
            .icon{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 10px;
                img{
                    width: 100%;
                }
            }
            .name{
                font-weight: bold;
                font-size: 16px;
            }
        }
        .message{
            display: flex;
            position: relative;
            i{
                font-size: 26px;
                color: @text-1-grey;
            }
            .hintnum{
                position: absolute;
                display: block;
                font-size: 12px;
                border-radius: 50px;
                background: @type-danger;
                padding: 0 4px;
                color: white;
                right: -5px;
                top: -5px;
            }
        }
    }
}

    .content{
        margin-top: -80px;
    }
</style>