<template>
    <!--消息-->
    <div class="message">
        <div class="nav">
            <div class="box">
                <div class="icon i1">
                    <span class="iconfont icon-xiaoxi1"></span>
                </div>
                <p>订单消息</p>
            </div>
            <div class="box">
                <div class="icon i2">
                    <span class="iconfont icon-lingdang"></span>
                </div>
                <p>系统消息</p>
            </div>
            <div class="box" @click="show = true">
                <div class="icon i3">
                    <span class="iconfont icon-headset"></span>
                </div>
                <p>联系客服</p>
            </div>
        </div>
        <pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <van-skeleton title :row="5" :loading="skeletonLoading">
                    <div class="messageList">
                        <div class="item" v-for="item in list">
                            <div class="icon">
                                <img src="../../assets/images/logo.png" alt="">
                            </div>
                            <div class="text">
                                <div class="title">
                                    <p class="ti">系统消息</p>
                                    <p class="time">10月11日 23:11</p>
                                </div>
                                <div class="content">
                                    亲爱的游客，小P提醒你尽快完成身份设置，开启你的拍客秀哦
                                </div>
                            </div>
                        </div>
                    </div>
                </van-skeleton>
            </van-list>
        </pull-refresh>
        <vanPopup v-model="show" position="bottom" :closeable="true">
            <div class="vanPopup">
                <div class="title">你的留言</div>
                <div class="vancontent">
                    <div class="textarea">
                        <van-field
                                v-model="message"
                                rows="5"
                                type="textarea"
                                maxlength="200"
                                placeholder="请尽可能详细的描述您的问题或者意见"
                                show-word-limit
                        />
                    </div>
                    <div class="textphone">
                        <van-field
                                v-model="phone"
                                required
                                label="手机号"
                                placeholder="请输入手机号"
                                error-message=""
                        />
                    </div>
                    <div class="btntxt">
                        <van-button type="warning" block>提 交</van-button>
                        <p class="txt">我们会尽快回复，清注意查看</p>
                    </div>
                    <div class="copyright">
                        © 拍客秀
                    </div>
                </div>
            </div>
        </vanPopup>
    </div>
</template>

<script>
    import {
        Tab as vanTab, Tabs as vanTabs, list as vanList, PullRefresh,
        Skeleton as vanSkeleton, Popup as vanPopup, Field as vanField,
        Button as vanButton
    } from 'vant'
    export default {
        name: "message",
        components: {vanButton,vanField,vanPopup ,vanTabs, vanTab, vanList, PullRefresh, vanSkeleton},
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                skeletonLoading: false, //骨架屏
                show:false,
                message:'',
                phone:''
            }
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push({type: 1});
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
    .message {

    }

    .nav {
        display: flex;
        justify-content: space-between;
        background-color: white;
        padding: 15px 25px;
        margin-bottom: 10px;

        .box {
            text-align: center;

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 46px;
                height: 46px;
                border-radius: 6px;
                color: white;
                margin: 0 auto;

                &.i1 {
                    background-color: #00CC6A;
                }

                &.i2 {
                    background-color: #E76234;
                }

                &.i3 {
                    background-color: #2995E6;
                }

                .iconfont {
                    font-size: 26px;
                }
            }

            p {
                margin-top: 5px;
            }
        }
    }

    .messageList {
        background-color: white;
        padding: 10px 15px;

        .item {
            padding: 10px;
            display: flex;

            .icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: @theme-coloe;
                margin-right: 10px;

                img {
                    width: 100%;
                }
            }

            .text {
                flex: 1;

                .title {
                    display: flex;
                    justify-content: space-between;

                    .ti {
                        font-size: 16px;
                        font-weight: 500;
                    }

                    .time {
                        color: @text-2-grey;
                    }
                }

                .content {
                    margin-top: 5px;
                    font-size: 14px;
                    color: @text-1-grey;
                    padding-bottom: 15px;
                    border-bottom: 1px solid #e9e9e9;
                }
            }
        }
    }
    .vanPopup{
        height: 80vh;
        .iphonex();
        padding: 0 15px;
        position: relative;
        overflow: auto;
        .title{
            font-size: 16px;
            padding: 15px;
        }
        .textarea{
            background-color: #f7f7f7;
            border-radius: 4px;
            margin-bottom: 15px;
            &>div{
                background: none;
            }
        }
        .textphone{
            background-color: #f7f7f7;
            margin-bottom: 30px;
            &>div{
                background: none;
            }
        }
        .btntxt{
            text-align: center;
            .txt{
                font-size: 12px;
                color: @text-3-grey;
                margin-top: 15px;
            }
        }
        .copyright{
            margin-top: 50px;
            text-align: center;
            font-size: 12px;
            color: @text-3-grey;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform:translate(-50%,-50%);
        }
    }
</style>