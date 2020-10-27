<template>
    <!--优惠卷-->
    <div class="coupons">
<!--        <goback></goback>-->
        <div class="item" v-for="item in 15">
            <div class="price">
                <span class="symbol">￥</span>
                <span class="num">99</span>
            </div>
            <div class="text">
                <div class="ti">
                    首单寄拍任务优惠券
                </div>
                <div class="tiabs">
                    <p>平台新商家限用一次</p>
                    <p class="time">有效期至2020.12.31</p>
                </div>
            </div>
            <div class="checkbox">
                <div class="iconfont icon-xuanzhong"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import goback from '@/components/layout/goback'
    export default {
        name: "coupons",
        components:{goback}
    }
</script>

<style lang="less" scoped>
    .coupons{
        padding: 15px;
        box-sizing: border-box;
        .item{
            padding: 10px;
            background: white;
            color: @type-danger;
            border-radius: 4px;
            border: 1px dashed @type-danger;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            position: relative;
            .checkbox{
                position: absolute;
                top: 10px;
                right: 10px;
                width: 16px;
                height: 16px;
                border-radius:50%;
                border: 1px solid @text-2-grey;
                .iconfont{
                    display: none;
                }
            }
            &.active{
                .checkbox{
                    border: 1px solid @type-info;
                    .iconfont{
                        display: block;
                        color: @type-info;
                    }
                }
            }
            .price{
                width: 90px;
                .symbol{
                    font-size: 16px;
                    margin-right: 5px;
                }
                .num{
                    font-weight: bold;
                }
            }
            .ti{
                font-weight: bold;
                font-size: 14px;
            }
            .tiabs{
                display: flex;
                margin-top: 15px;
                p{
                    font-size: 12px;
                }
                .time{
                    margin-left: 15px;
                }
            }
        }
    }
</style>