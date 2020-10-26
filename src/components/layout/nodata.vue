<template>
    <!--无数据-->
    <div class="nodata" :style="{'margin-top':top+'px'}">
        <div class="icon">
            <i class="iconfont" :class="iconfont"></i>
        </div>
        <div class="txt">
            <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nodata",
        props: {
            top: {
                type: Number,
                default: 150
            },
            iconfont:{
                type: String,
                default: 'icon-wushuju'
            },
            title:{
                type: String,
                default: '没有数据'
            }
        },
    }
</script>

<style lang="less" scoped>
    .nodata{
        width: 100px;
        text-align: center;
        margin: 0 auto;
        .txt{
            margin-top: 10px;
            font-weight: 500;
        }
        .icon{
            display: inline-block;
            padding: 10px;
            background-color: @text-2-grey;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            .iconfont{
                font-size: 40px;
                color: white;
            }
        }

    }
</style>