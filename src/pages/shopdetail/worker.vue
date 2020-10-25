<template>
    <!--作品详情-->
    <div class="detail">
        <goback></goback>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in imgList">
                <div class="swipeItem">
                    <img v-lazy="item.img">
                </div>
            </van-swipe-item>
        </van-swipe>
        <div class="title">
            <p>我今天怎么这么好看，啦啦啦啦~~</p>
        </div>
        <div class="userInfo flex-center">
            <div class="info flex-align-center">
                <div class="icon">
                    <img src="../../assets/images/showImg.jpg" alt="">
                </div>
                <p class="name">花花是个小摩托</p>
            </div>
            <div class="collect iconfont icon-love_icon" v-if="true"></div>
            <div class="activeCollect iconfont icon-xihuan" v-else></div>
        </div>
    </div>
</template>

<script>
    import goback from '@/components/layout/goback'
    import {Swipe as vanSwipe,SwipeItem as vanSwipeItem  } from 'vant';
    import img from '../../assets/images/showImg.jpg'
    export default {
        name: "worker",
        components:{goback,vanSwipe,vanSwipeItem},
        data() {
            return {
                imgList: [{
                    img:img
                },{
                    img:img
                },{
                    img:img
                },{
                    img:img
                },{
                    img:img
                }]
            }
        },
    }
</script>

<style lang="less" scoped>
.swipeItem{
    width: 100%;
    img{width: 100%;}
}
    .detail{
        background-color: white;
        .title{
            padding: 15px;
            font-size: 16px;
            border-bottom: 1px solid @text-3-grey;
        }
    }
.userInfo{
    background-color: @page-bg-white;
    padding: 15px;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    .info{
        .icon{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .name{
            font-size: 14px;
            color: @text-2-grey;
            .texthidden();
            margin-left: 10px;
        }
    }
    .collect{
        font-weight: bold;
        color: @text-2-grey;
        font-size: 20px;
    }
    .activeCollect{
        color: @theme-coloe;
    }
}
</style>