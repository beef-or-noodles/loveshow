<template>
    <!--商家或者·拍客-->
    <div class="tourist">
        <div class="listItem">
            <div class="title">
                常用工具
            </div>
            <div class="box">
                <div class="toolnav">
                    <div class="item">
                        <i class="iconfont icon-shezhi"></i>
                        <p>个人资料</p>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-dizhi"></i>
                        <p>我的地址</p>
                    </div>
                    <div class="item" @click="$router.push({path:'/collent'})">
                        <i class="iconfont icon-love_icon"></i>
                        <p>收藏</p>
                    </div>
                    <div class="item message">
                        <i class="iconfont icon-xiaoxi"></i>
                        <p>消息</p>
                        <span class="hintnum">2</span>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-youhuijuan2"></i>
                        <p>优惠卷</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="listItem">
            <div class="title">
                我的钱包
                <p class="btnprice">进入钱包 <i class="iconfont icon-xiangyou1"></i></p>
            </div>
            <div class="box">
                <div class="withdraw">
                    <div class="item">
                        <p class="money m1">36523.00</p>
                        <p class="hint">总金额</p>
                    </div>
                    <div class="item">
                        <p class="money m2">36523.00</p>
                        <p class="hint">已提现</p>
                    </div>
                    <div class="item">
                        <p class="money m3">36523.00</p>
                        <p class="hint">未提现</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="listItem">
            <div class="title">
                我的角色
                <p class="hint">最多可以创建8个角色，接拍不同类型的任务</p>
            </div>
            <div class="box">
                <div class="role">
                    <div class="item" v-for="(item,index) in roleList"
                    :key="index">
                        <i class="iconfont" :class="[item.icon]"
                           :style="{background:item.background,color:item.color}"
                        ></i>
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="listItem">
            <div class="title">
                我的认证
            </div>
            <div class="box">
                <div class="auth">
                    <div class="item">
                        <i class="iconfont icon-shimingrenzheng"></i>
                        <p>实名认证</p>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-renlianshibie"></i>
                        <p>人脸识别</p>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-baozhengjin"></i>
                        <p>保障金</p>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-4"></i>
                        <p>商家验证</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shop",
        data() {
            return {
                roleList: [{
                    id:1,
                    icon:'icon-meinv',
                    color:'white',
                    background:'#D54062',
                    text:'美女'
                },{
                    id:2,
                    icon:'icon-nvbao',
                    color:'white',
                    background:'#FFA36C',
                    text:'女宝'
                },{
                    id:3,
                    icon:'icon-funv',
                    color:'white',
                    background:'#EBDC87',
                    text:'大妈'
                },{
                    id:4,
                    icon:'icon-maomi',
                    color:'white',
                    background:'#799351',
                    text:'猫咪'
                },{
                    id:5,
                    icon:'icon-shuaige',
                    color:'',
                    background:'',
                    text:'帅哥'
                },{
                    id:6,
                    icon:'icon-nanbao',
                    color:'',
                    background:'#FFA36C',
                    text:'男宝'
                },{
                    id:7,
                    icon:'icon-zhongnianren',
                    color:'',
                    background:'#EBDC87',
                    text:'大爷'
                },{
                    id:8,
                    icon:'icon-gougou1',
                    color:'',
                    background:'#799351',
                    text:'狗狗'
                }]
            }
        },
    }
</script>

<style lang="less" scoped>
    .tourist{
        padding: 10px;
        .listItem {
            border-radius: 5px;
            background-color: @page-bg-white;
            padding: 15px;
            box-sizing: border-box;
            margin-bottom: 10px;
            .title{
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                font-weight: bold;
                .btnprice{
                    font-size: 12px;
                    font-weight: 400;
                    color: @text-2-grey;
                    i{
                        font-size: 12px;
                    }
                }
                .hint{
                    font-weight: 400;
                     font-size: 12px;
                    color: @text-2-grey;
                }
            }
        }
        .auth{
            display: flex;
            &>div{
                text-align: center;
                width: 25%;
                margin-top: 10px;
                i{
                    font-size: 24px;
                    color: #06AE64;
                }
                p{
                    font-size: 12px;
                    margin-top: 5px;
                    color: @text-1-grey;
                }
            }
        }
        .role{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            &>div{
                text-align: center;
                width: 25%;
                margin-top: 15px;
                .iconfont{
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    border-radius: 50%;
                    background-color: #dadada;
                    width: 40px;
                    height: 40px;
                    margin: 0 auto;
                }
                p{
                    font-size: 12px;
                    margin-top: 5px;
                    color: @text-1-grey;
                }
            }
        }
        .withdraw{
            display: flex;
            justify-content: space-around;
            margin-top: 15px;
            text-align: center;
            .money{
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 5px;
                &.m1{
                    color: @type-info;
                }
                &.m2{
                    color: @type-danger;
                }
                &.m3{
                    color: @type-success;
                }
            }
            .hint{
                font-size: 12px;
            }
        }
        .toolnav{
            display: flex;
            justify-content: space-around;
            margin-top: 5px;
            .icon-shezhi{
                color: #FFB400;
            }
            .icon-dizhi{
                color: #3a93df;
            }
            .icon-love_icon{
                 color: #ff6600;
             }
            .icon-xiaoxi{
                color: #48bd1b;
            }
            .icon-youhuijuan2{
                color: #c600ff;
            }
            &>div{
                text-align: center;
                position: relative;
                i{
                    font-weight: bold;
                    font-size: 24px;
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
                    top: 8px;
                }
                p{
                    font-size: 12px;
                    color: @text-1-grey;
                }
            }
        }
    }
</style>