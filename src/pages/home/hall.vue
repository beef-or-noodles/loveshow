<template>
    <div>
        <div class="typeItem">
            <dropdown-menu>
                <dropdown-item title="分类">
                    分类
                </dropdown-item>
                <dropdown-item title="拍客">
                    拍客
                </dropdown-item>
                <dropdown-item title="金额">
                    金额
                </dropdown-item>
                <dropdown-item title="赛选">
                    筛选
                </dropdown-item>
            </dropdown-menu>
        </div>
        <div class="list">
            <pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                >
                    <div class="item"
                         v-for="(item,index) in list"
                         :key="index"
                         @click="noticeClick(item)"
                    >
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
                            <div class="control">
                                <van-button size="small"
                                            color="#F45905"
                                            :disabled="true"
                                            type="default">
                                        申请
                                </van-button>
                            </div>
                        </div>
                    </div>
                </van-list>
            </pull-refresh>

        </div>
    </div>
</template>

<script>
    import {DropdownMenu, DropdownItem,Button as vanButton ,PullRefresh,List as vanList} from 'vant'
    export default {
        name: "hall",
        components:{DropdownMenu,DropdownItem,vanButton,vanList,PullRefresh},
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
            }
        },
        methods: {
            noticeClick(item){
              this.$router.push({path:`/notice_detail/${1}`})
            },
            onLoad() {
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
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
        }
    }
</script>

<style lang="less" scoped>
    .typeItem{
        position: sticky;
        top: 0;
        z-index: 999;
    }
    .list{
        padding: 10px;
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
    }
</style>