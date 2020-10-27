<template>
    <!--通告详情-->
    <div class="pagedetail">
        <div class="item">
            <div class="pic">
                <img src="../../assets/images/showImg.jpg" alt="">
            </div>
            <div class="info">
                <div class="title">
                    <p class="t1">女装长库女装长库女装长库</p>
                    <p class="price">￥35</p>
                </div>
                <div class="tags">
                    <div class="tag">服装</div>
                    <div class="tag">女装</div>
                    <div class="tag">成都</div>
                    <div class="tag">服装</div>
                    <div class="tag">女装</div>
                    <div class="tag">成都</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">拍摄要求</div>
            <div class="box">
                <div class="taglist">
                    <div class="tag">视</div>
                    <p class="ti">10-15秒小视频</p>
                </div>
                <div class="taglist">
                    <div class="tag">脸</div>
                    <p class="ti">露脸</p>
                </div>
                <div class="taglist">
                    <div class="tag">拍</div>
                    <p class="ti">自拍/他拍均可</p>
                </div>
                <div class="taglist">
                    <div class="tag">景</div>
                    <p class="ti">外景</p>
                </div>
            </div>
            <div class="title">订单保障</div>
            <div class="box">
                <div class="colorTag c1">
                    不满意重拍
                </div>
                <div class="colorTag c2">
                    24小时出图
                </div>
                <div class="colorTag c3">
                    先行赔付
                </div>
            </div>
            <div class="title">选择拍客</div>
            <div class="box">
                <div class="taglist">
                    <div class="tag">视</div>
                    <p class="ti">10-15秒小视频</p>
                </div>
                <div class="taglist">
                    <div class="tag">脸</div>
                    <p class="ti">露脸</p>
                </div>
                <div class="taglist">
                    <div class="tag">拍</div>
                    <p class="ti">自拍/他拍均可</p>
                </div>
                <div class="taglist">
                    <div class="tag">景</div>
                    <p class="ti">外景</p>
                </div>
            </div>
        </div>
        <div class="shoppush">
            <div class="p_box">
                <p class="ti">发布商家</p>
                <div class="icon"><i class="iconfont icon-4"></i><p>已认证</p></div>
            </div>
            <div class="p_box shop_box">
                <div class="shop">
                    <div class="img">
                        <img src="../../assets/images/user_icon.png" alt="">
                    </div>
                    <p class="ti">陈贝贝是个小胖子</p>
                </div>
                <div class="icon"><i class="iconfont icon-baozhengjin"></i><p>保证金</p></div>
            </div>
        </div>
        <div class="btns">
            <div>
                <van-button
                        @click="goback"
                        block>
                    返回
                </van-button>
            </div>
            <div>
                <van-button color="#F45905"
                            :disabled="true"
                            block
                            type="default">
                    立即申请
                </van-button>
            </div>

        </div>

    </div>
</template>

<script>
    import {Button as vanButton} from 'vant'
    export default {
        name: "notice",
        components:{vanButton},
        data() {
            return {

            }
        },
        methods: {
            goback() {
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="less" scoped>
    .pagedetail{
        padding: 10px;
        .btns{
            position: fixed;
            width: 100%;
            bottom: 0;
             margin: 0 -10px;
             display: flex;
            &>div:nth-child(1){
                button{
                    border-color:white ;
                }
            }
            &>div{
                flex: 50%;
                button{
                    border-radius: 0;
                }
            }
        }
        .shoppush{
            margin: 10px 0;
            padding: 10px;
            margin-bottom: 30px;
            background-color: @page-bg-white;
            .p_box{
                display: flex;
                justify-content: space-between;
                .shop{
                    display: flex;
                    align-items: center;
                    .img{
                        width: 30px;
                        height: 30px;
                        overflow: hidden;
                        margin-right: 5px;
                        img{
                            width: 100%;
                        }
                    }
                    .ti{
                        color: @text-1-grey;
                    }
                }
                .icon{
                    display: flex;
                    align-items: center;
                    p{
                        font-size: 14px;
                        margin-left: 8px;
                        color: @text-2-grey;
                    }
                    .iconfont{
                        color: @type-success;
                    }
                }
                .ti{
                    font-size: 14px;
                }
                &.shop_box{
                    margin-top: 10px;
                    .iconfont{
                        color: @type-info;
                        font-size: 18px;
                    }
                }
            }
        }
        .content{
            margin-top: 10px;
            background-color: @page-bg-white;
            padding: 10px;
            .title{
                font-size: 14px;
                font-weight: 500;
            }
            .box{
                margin: 10px 0;
                display: flex;
                flex-wrap: wrap;
                .colorTag{
                    font-size: 14px;
                    width: 30%;
                    border-radius: 4px;
                    padding: 2px 0;
                    text-align: center;
                    &+div{
                        margin-left: 3%;
                    }
                    &.c1{
                        border: 1px solid #F45905;
                        background-color: rgba(244, 89, 5, .1);
                        color: #F45905;
                    }
                    &.c2{
                        border: 1px solid #FF0000;
                        background-color: rgba(255, 0, 0, .1);
                        color: #FF0000;
                    }
                    &.c3{
                        border: 1px solid #13AE01;
                        background-color: rgba(19, 174, 1, .1);
                        color: #13AE01;
                    }
                }
                .taglist{
                    color: @text-2-grey;
                    display: flex;
                    align-items: center;
                    flex: 50%;
                    margin-bottom: 10px;
                    .tag{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 17px;
                        height: 17px;
                        font-size: 13px;
                        border: 1px solid @text-3-grey;
                        margin-right: 5px;
                    }
                    .ti{
                        padding-left: 10px;
                    }
                }
            }
        }
    }
    .item{
        display: flex;
        padding: 10px;
        background-color: @page-bg-white;
        border-radius: 6px;
        margin-bottom: 10px;
        .shadow-down();
        .pic{
            margin-right: 10px;
            width: 80px;
            height: 80px;
            overflow: auto;
            img{
                width: 100%;
            }
        }
        .info{
            flex: 1;
            .control{
                text-align: right;
                text-align: right;
            }
            .title{
                display: flex;
                margin-bottom: 5px;
                .t1{
                    flex: 1;
                    font-weight: bold;
                }
                .price{
                    color: @price;
                    font-weight: bold;
                    font-size: 16px;
                }
            }
            .tags{
                display: flex;
                flex-wrap: wrap;
                .tag{
                    flex: 28%;
                    font-size: 14px;
                    border: 1px solid @text-3-grey;
                    border-radius: 50px;
                    text-align: center;
                    padding: 1px;
                    color: @text-2-grey;
                    margin-top: 5px;
                    margin-left: 3%;
                }
            }
        }
    }
</style>