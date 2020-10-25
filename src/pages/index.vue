<template>
  <div class="main page-bg">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="swipeItem">
          <img src="../assets/images/banner1.jpg" alt="">
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipeItem">
          <img src="../assets/images/banner2.jpg" alt="">
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="notice">
      <notice-bar left-icon="volume-o" background="white" :scrollable="false">
        <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :show-indicators="false"
        >
          <van-swipe-item><p>内容一</p></van-swipe-item>
          <van-swipe-item><p class="active">内容二</p></van-swipe-item>
          <van-swipe-item><p>内容三</p></van-swipe-item>
        </van-swipe>
      </notice-bar>
    </div>
    <div class="list">
      <div class="item" v-for="item in 5" :key="item">
        <div class="imgBox">
          <img src="../assets/images/showImg.jpg" alt="">
        </div>
        <div class="title">
          <p>
            我今天怎么这么好看，啦啦啦啦~~
          </p>
        </div>
        <div class="userInfo flex-center">
          <div class="info flex-align-center">
            <div class="icon">
              <img src="../assets/images/showImg.jpg" alt="">
            </div>
            <p class="name">花花是个小摩托</p>
          </div>
          <div class="collect iconfont icon-love_icon" v-if="true"></div>
          <div class="activeCollect iconfont icon-xihuan" v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Button as vanButton, Swipe as vanSwipe,
  SwipeItem as vanSwipeItem,NoticeBar  } from 'vant';
export default {
    name: 'Index',
    components:{vanButton,vanSwipe,vanSwipeItem,NoticeBar},
    data() {
        return {

        }
    }

}
</script>

<style lang="less" scoped>
  .main{
    .swipeItem{
      max-height: 170px;
      overflow: hidden;
      img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
    }
    .notice{
      margin:10px 0;
      .notice-swipe {
        height: 40px;
        p{
          line-height: 40px;
          margin: 0;
          color: @text-1-grey;
          .texthidden();
          &.active{
            color: @type-info;
          }
        }
      }
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      padding-left: 10px;
      .item{
        width: calc(50% - 10px);
        margin-bottom: 10px;
        margin-right: 10px;
        box-shadow: 1px 2px 5px @text-3-grey;
        border-radius: 6px;
        overflow: hidden;
        .imgBox{
          height: 220px;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
          }
        }
        .title{
          background-color: @page-bg-white;
          padding: 5px;
          p{
            .texthidden(@num:2);
            font-size: 14px;
          }
        }

        .userInfo{
          background-color: @page-bg-white;
          padding: 0 5px 5px 5px;
          justify-content: space-between;
          .info{
            .icon{
              width: 24px;
              height: 24px;
              border-radius: 50%;
              overflow: hidden;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .name{
              font-size: 12px;
              color: @text-2-grey;
              .texthidden();
              margin-left: 10px;
            }
          }
          .collect{
            font-weight: bold;
            color: @text-2-grey;
          }
          .activeCollect{
              color: @theme-coloe;
          }
        }
      }
    }
  }
</style>
