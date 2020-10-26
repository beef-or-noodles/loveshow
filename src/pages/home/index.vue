<template>
    <div class="main">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <div class="swipeItem">
                    <img src="../../assets/images/banner1.jpg" alt="">
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swipeItem">
                    <img src="../../assets/images/banner2.jpg" alt="">
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
        <pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <van-skeleton title :row="5" :loading="skeletonLoading">
                    <div class="list">
                        <div class="item"
                             v-for="(item,index) in list"
                             :key="index"
                             @click="itemLink(item)"
                        >
                            <div class="imgBox">
                                <img alt="" v-lazy="item.img">
                            </div>
                            <div class="content">
                                <div class="title">
                                    <p v-if="item.type==2">
                                        我今天怎么这么好看，啦啦啦啦~~
                                    </p>
                                    <div class="tag" v-else>
                                        <p>拍客·美女</p>
                                    </div>
                                </div>
                                <div class="userInfo flex-center">
                                    <div class="info flex-align-center" @click.stop="userDetail(item)">
                                        <div class="icon">
                                            <img src="../../assets/images/showImg.jpg" alt="">
                                        </div>
                                        <p class="name">花花是个小摩托</p>
                                    </div>
                                    <div @click.stop="likeClick(item)">
                                        <div class="collect iconfont icon-love_icon" v-if="true"></div>
                                        <div class="activeCollect iconfont icon-xihuan" v-else></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-skeleton>

            </van-list>
        </pull-refresh>
    </div>
</template>

<script>
    import {
        Button as vanButton, Swipe as vanSwipe,
        SwipeItem as vanSwipeItem, NoticeBar, list as vanList, PullRefresh,
        Skeleton as vanSkeleton
    } from 'vant';
    import img from '../../assets/images/showImg.jpg'

    export default {
        name: 'Index',
        components: {vanButton, vanSwipe, vanSwipeItem, NoticeBar, vanList, PullRefresh, vanSkeleton},
        data() {
            return {
                list: [{
                    img: img,
                    type: 1, // 作品
                }, {
                    img: img,
                    type: 2, // 角色
                }],
                loading: false,
                finished: false,
                refreshing: false,
                skeletonLoading: false, //骨架屏
            };
        },
        created() {
            this.skeletonLoading = true
        },
        methods: {
            itemLink(item) {
                if (item.type == 2) {
                    this.$router.push({path: `/woker_detail/${1}`})
                } else {
                    this.$router.push({path: `/role_detail/${2}`})
                }
            },
            //模特详情跳转
            userDetail(item){
                this.$router.push({path:`myworke/${1}`})
            },
            // 模特喜欢按钮
            likeClick(item){

            },
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push({img: img, type: 1});
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                    this.skeletonLoading = false
                }, 1000);
            },
            onRefresh() {
                // 清空列表数据
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },
        },

    }
</script>

<style lang="less" scoped>
    .main {
        .swipeItem {
            max-height: 170px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .notice {
            margin: 10px 0;

            .notice-swipe {
                height: 40px;

                p {
                    line-height: 40px;
                    margin: 0;
                    color: @text-1-grey;
                    .texthidden();
                    font-size: 16px;

                    &.active {
                        color: @type-info;
                    }
                }
            }
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            padding-left: 10px;

            .item {
                width: calc(50% - 10px);
                margin-bottom: 10px;
                margin-right: 10px;
                box-shadow: 1px 2px 5px @text-3-grey;
                border-radius: 6px;
                overflow: hidden;

                .content {
                    background-color: @page-bg-white
                }

                .imgBox {
                    height: 220px;
                    overflow: hidden;

                    img {
                        display: block;
                        width: 100%;
                    }
                }

                .title {
                    background-color: @page-bg-white;
                    padding: 8px 5px;
                    height: 38px;
                    position: relative;
                    display: flex;
                    justify-content: center;

                    .tag {
                        position: absolute;
                        margin: 0 auto;
                        line-height: 34px;
                        border: 1px solid @text-3-grey;
                        font-size: 14px;
                        padding: 0 15px;
                        color: @text-1-grey;
                        margin-top: 0;
                    }

                    p {
                        .texthidden(@num:2);
                        font-size: 14px;
                    }
                }

                .userInfo {
                    background-color: @page-bg-white;
                    padding: 0 5px 5px 5px;
                    justify-content: space-between;

                    .info {
                        .icon {
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            overflow: hidden;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .name {
                            font-size: 12px;
                            color: @text-2-grey;
                            .texthidden();
                            margin-left: 10px;
                        }
                    }

                    .collect {
                        font-weight: bold;
                        color: @text-2-grey;
                    }

                    .activeCollect {
                        color: @theme-coloe;
                    }
                }
            }
        }
    }
</style>
