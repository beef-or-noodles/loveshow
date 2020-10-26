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
        <!--作品详情-->
        <div class="title" v-if="pageType=='work'">
            <p>我今天怎么这么好看，啦啦啦啦~~</p>
        </div>
        <div v-else class="roleData">
            <div class="item">
                <div class="tag">高</div>
                <p>165厘米</p>
            </div>
            <div class="item">
                <div class="tag">体</div>
                <p>102斤</p>
            </div>
            <div class="item">
                <div class="tag">高</div>
                <p>165cm</p>
            </div>
            <div class="item">
                <div class="tag">发</div>
                <p>中长发·黑色</p>
            </div>
            <div class="item">
                <div class="tag">耳</div>
                <p>单耳洞</p>
            </div>
            <div class="item">
                <div class="tag">景</div>
                <p>接受指定场景</p>
            </div>
            <div class="item">
                <div class="tag">肤</div>
                <p>偏白·无斑</p>
            </div>
        </div>
        <!--角色详情-->
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
                pageType:'work', // work 作品详情  role 角色详情
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
        created(){
            let routerName = this.$route.path
            if(routerName.indexOf('role_detail') !== -1){
                this.pageType = 'role'
            }else{
                this.pageType = 'work'
            }
        }
    }
</script>

<style lang="less" scoped>
.swipeItem{
    width: 100%;
    img{width: 100%;}
}
    .detail{
        background-color: white;
        padding-bottom: 75px;
        .title{
            padding: 15px;
            font-size: 16px;
            border-bottom: 1px solid @text-3-grey;
        }
        .roleData{
            display: flex;
            padding: 10px;
            box-sizing: border-box;
            flex-wrap: wrap;
            .item{
                width: 33.33%;
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                .tag{
                    display: block;
                    font-size: 14px;
                    border: 1px solid @text-3-grey;
                    color: @text-1-grey;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    margin-right: 5px;
                    padding: 0 1px;
                }
            }

        }
    }
.userInfo{
    background-color: @page-bg-white;
    padding: 15px;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    padding-top: 10px;
    width: 100%;
    box-sizing: border-box;
    .shadow-top();
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