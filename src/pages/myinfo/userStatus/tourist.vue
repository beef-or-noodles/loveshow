<template>
    <!--游客-->
    <div class="tourist">
        <div class="listItem">
            <p class="hint">身份设置完成后不可更改</p>
        </div>
        <div class="listItem">
            <div class="box">
                <div class="left">
                    <div class="icon">
                        <img src="../../../assets/images/shop_icon.png" alt="">
                    </div>
                    <p class="name">商家</p>
                </div>
                <div class="right">
                    <p class="title">发布通告</p>
                    <p class="abs">海量拍客供你挑选，获得最满意的图片</p>
                </div>
            </div>
        </div>
        <div class="listItem">
            <div class="box">
                <div class="left">
                    <div class="icon">
                        <img src="../../../assets/images/user_icon.png" alt="">
                    </div>
                    <p class="name">拍客</p>
                </div>
                <div class="right">
                    <p class="title">完成任务</p>
                    <p class="abs">不限量的任务等你完成，获取丰厚奖金</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tourist"
    }
</script>

<style lang="less" scoped>
    .tourist{
        padding: 10px;
        .listItem{
            border-radius: 5px;
            background-color: @page-bg-white;
            padding: 15px;
            box-sizing: border-box;
            margin-bottom: 10px;
            .hint{
                font-size: 16px;
                color: #E76234;
                text-align: center;
            }
            .box{
                display:flex;
                .left{
                    margin-right: 10px;
                }
                .icon{
                    width: 80px;
                    height: 80px;
                    img{
                        width: 100%;
                    }
                }
                .name{
                    font-size: 16px;
                    font-weight: 500;
                    text-align: center;
                }
                .title{
                    font-size: 18px;
                    font-weight: 500;
                    margin-top: 10px;
                }
                .abs{
                    font-size: 12px;
                    color: @text-2-grey;
                    margin-top: 30px;
                }
            }
        }
    }
</style>