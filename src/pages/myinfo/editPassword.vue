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
                <!-- 输入密码 -->
                <van-field v-model="password" type="text" label="输入密码"  placeholder="请输入密码" />
            </van-cell-group>
            <div class="btn">
                <van-button @click="submit" block type="warning">保存</van-button>
            </div>
        </div>

    </div>
</template>

<script>
    import {CheckboxGroup  as vanCheckboxGroup, Checkbox as vanCheckbox,Field as vanField,CellGroup as vanCellGroup,Button as vanButton } from 'vant'
    export default {
        name: "editPassword",
        components:{vanField,vanCellGroup,vanButton,vanCheckboxGroup,vanCheckbox},
        data() {
            return {
                phone: '',
                code:'',
                password:'',
            }
        },
        methods:{
            submit(){

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
            width: 100px;
            margin: 30px auto;
            margin-bottom: 60px;
            img{
                width: 100px;
                height: 100px;
            }
        }
        .btn{
            margin-top: 50px;
        }
    }
</style>