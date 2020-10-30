<template>
    <div class="info">
        <div class="title">
            <p>基本信息</p>
        </div>
        <div class="box">
            <van-cell title-class='itemaling' title="头像" is-link>
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <template #right-icon>
                    <upload @saveImg="saveImg">
                        <div class="imgBox">
                            <div class="headimg">
                                <img :src="userInfo.img" alt="" v-if="userInfo.img">
                                <van-icon v-else name="friends-o" />
                            </div>
                            <van-icon name="arrow" />
                        </div>
                    </upload>
                </template>
            </van-cell>
            <van-cell title="昵称 (必填)" @click="editName" is-link :value="userInfo.name"></van-cell>
            <van-cell title="性别" @click="editSex" is-link :value="userInfo.sex==1?'男':'女'"> </van-cell>
            <van-cell title="生日" is-link value="1990-01-01"> </van-cell>
            <van-cell title="所在城市" is-link value="四川-成都"> </van-cell>
            <van-cell title="行业" is-link value="女装"></van-cell>
            <van-cell title="常用拍客" is-link value="美女"></van-cell>
        </div>
        <div class="btn">
            <van-button type="warning" block>完成注册</van-button>
        </div>
        <van-popup v-model="editNamepopup"
                   :closeable="true"
                   position="bottom">
            <div class="popup">
               <div class="title">
                   <p>修改昵称</p>
               </div>
                <div class="box">
                    <van-field ref="username"
                               v-model="username"
                               label="昵称："
                               placeholder="请输入昵称"
                               maxlength="15"
                               show-word-limit
                    ></van-field>
                    <div class="hint">
                        <p>仅限中文、字母和数字</p>
                        <p>昵称一旦设定将无法更改，清谨慎选择</p>
                    </div>
                </div>
                <div class="btn">
                    <van-button @click="saveName" type="warning" block>保存</van-button>
                </div>
            </div>
        </van-popup>

        <!--选择性别-->
        <van-popup v-model="sexPopup"
                   position="bottom">
            <div class="box">
                <van-picker
                        title="性别"
                        show-toolbar
                        :columns="sexOpstion"
                        :default-index="defaultSex"
                        @confirm="onSexConfirm"
                        @cancel="onSexCancel"
                />
            </div>
        </van-popup>
    </div>
</template>

<script>
    import upload from '@/components/upload/upload'
    import {Picker as vanPicker,Field as vanField,Popup as vanPopup ,Cell as vanCell, Icon as vanIcon ,Button as vanButton} from 'vant'

    export default {
        name: "userinfo",
        components:{vanPicker,vanField,vanCell,vanIcon,vanButton,upload,vanPopup},
        data() {
            return {
                editNamepopup:false,
                sexPopup:false,
                username:'',
                userInfo:{
                    img:'',
                    name:"",
                    sex:2
                },

                defaultSex:0,
                sexOpstion:[{
                    value:1,
                    text:'男',
                    index:0
                },{
                    value:2,
                    text:'女',
                    index:1
                }]
            }
        },
        methods: {
            editName(){
              this.editNamepopup = true;
              this.username = this.userInfo.name
              setTimeout(()=>{
                  this.$refs.username.focus()
              },0)

            },
            saveImg(data) {
                console.log(data);
                this.userInfo.img = data.url
            },
            saveName(){
                this.userInfo.name = this.username
                this.editNamepopup = false
            },
            editSex(){
                this.sexPopup=true
                let arr = this.sexOpstion.filter((item)=>{
                    return this.userInfo.sex == item.value
                })
                if(arr.length){
                    this.defaultSex = arr[0].index
                }
            },
            /*性别选择*/
            onSexConfirm(picker, index){
                this.userInfo.sex = picker.value
                this.defaultSex = picker.index
                this.sexPopup = false
            },
            onSexCancel(picker, value, index){
                this.sexPopup = false
            }
        },
    }
</script>

<style lang="less" scoped>
.info{
    .title{
        font-weight: 500;
        padding: 15px;
    }
    .box{
        .itemaling{
            display: flex;
            align-items: center;
        }
        .imgBox{
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #969799;
            .headimg{
                width: 45px;
                height: 45px;
                overflow: hidden;
                border-radius: 50%;
                border: 1px solid #eaeaea;
                font-size: 30px;
                color: @text-3-grey;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: 100%;
                }
            }
        }
    }
    .btn{
        padding: 10px;
        margin-top: 30px;
    }
}
.popup{
    height: 300px;
    .title{
        padding: 15px;
    }
    .hint{
        color: @text-3-grey;
        font-size: 14px;
        padding: 15px;
    }
}
</style>