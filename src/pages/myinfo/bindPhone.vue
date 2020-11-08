<template>
    <!--绑定手机号-->
    <div class="page">
        <div>
            <div class="icon">
                <img src="../../assets/images/logo.png" alt="">
            </div>
            <van-cell-group>
                <van-field v-model="phone" type="tel" label="输入手机号"  placeholder="请输入手机号码"/>
                <van-field
                        v-model="code"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"
                >
                    <template #button>
                        <van-button size="small" type="warning">发送验证码</van-button>
                    </template>
                </van-field>
            </van-cell-group>
            <div class="btn">
                <van-button @click="submit" block type="warning">同意协议并注册成为商家</van-button>
                <div class="xy">
                    <van-checkbox checked-color="#07c160" v-model="xy"><p>已阅读并同意以下协议：</p></van-checkbox>
                    <p><span class="file">《法律文件》</span></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {CheckboxGroup  as vanCheckboxGroup, Checkbox as vanCheckbox,Field as vanField,CellGroup as vanCellGroup,Button as vanButton } from 'vant'
    export default {
        name: "bindPhone",
        components:{vanField,vanCellGroup,vanButton,vanCheckboxGroup,vanCheckbox},
        data() {
            return {
                phone: '',
                code:'',
                xy:false,
            }
        },
        methods:{
            submit(){
                this.$router.push({path:'/userinfo'})
            }
        }
    }
</script>

<style lang="less" scoped>
.page{
    background-color: white;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    .icon{
        background-color: @theme-coloe;
        width: 80px;
        margin: 30px auto;
        margin-bottom: 60px;
        img{
            width: 80px;
            height: 80px;
        }
    }
    .btn{
        margin-top: 50px;
        .xy{color: @text-1-grey;
            margin-top: 20px;
            display: flex;
            .file{
                color: @type-warning;
                font-weight: bold;
            }
        }
    }
}
</style>