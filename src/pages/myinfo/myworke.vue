<template>
    <!--我的作品-->
    <div>
        <div class="banner">
            <div class="userInfo">
                <div class="iconhead">
                    <img src="../../assets/images/showImg.jpg" alt="">
                </div>
                <div class="infobox">
                    <div class="name">
                        <p>花花是个小模特</p>
                    </div>
                </div>
                <goback postion="right"></goback>
            </div>
        </div>
        <div class="content">
            <div class="tables">
                <van-tabs v-model="activeName">
                    <van-tab title="TA的角色" name="1"></van-tab>
                    <van-tab title="往期作品" name="2"></van-tab>
                </van-tabs>
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
                                        <div class="info flex-align-center">
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
    </div>
</template>

<script>
    import img from '../../assets/images/showImg.jpg'
    import goback from '@/components/layout/goback'
    import {Tab as vanTab , Tabs as vanTabs,list as vanList, PullRefresh,
        Skeleton as vanSkeleton} from 'vant'
    export default {
        name: "myworke",
        components:{goback,vanTabs,vanTab, vanList, PullRefresh, vanSkeleton},
        data() {
            return {
                activeName: "1",
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
            }
        },
        methods: {
            itemLink(item) {
                if (item.type == 2) {
                    this.$router.push({path: `/woker_detail/${1}`})
                } else {
                    this.$router.push({path: `/role_detail/${2}`})
                }
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
    .banner{
        background: url("../../assets/images/workerbg.png");
        background-size: 100%;
        padding: 15px;
        min-height: 100px;
        .userInfo{
            display: flex;
            .iconhead{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .infobox{
                margin-left: 15px;
                flex: 1;
                .name{
                    color: white;
                    p{
                        font-size: 18px;
                    }
                }
            }
        }
    }
    .content{
        margin-top: -10px;
        .tables{
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            overflow: hidden;
            position: sticky;
            top: 0;
            z-index: 99;
        }
        .list {
            display: flex;
            flex-wrap: wrap;
            padding-left: 10px;
            margin-top: 15px;
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