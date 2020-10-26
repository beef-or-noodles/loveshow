<template>
    <!--拍客订单-->
    <div>
        <div class="tables">
            <van-tabs v-model="activeName">
                <van-tab title="全部" name="1"></van-tab>
                <van-tab title="待确认" name="2"></van-tab>
                <van-tab title="进行中" name="3"></van-tab>
                <van-tab title="已完成" name="4"></van-tab>
                <van-tab title="已发布" name="5"></van-tab>
            </van-tabs>
        </div>
        <div class="content">
            <nodata title="没有相关订单"></nodata>
        </div>
    </div>
</template>

<script>
    import nodata from '@/components/layout/nodata'
    import {Tab as vanTab , Tabs as vanTabs} from 'vant'
    export default {
        name: "userOrder",
        components:{
            vanTab,vanTabs,nodata
        },
        data() {
            return {
                activeName: '1'
            }
        },
    }
</script>

<style lang="less" scoped>
    .tables{
        position: sticky;
        top: 0;
    }
</style>