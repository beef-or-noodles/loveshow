<template>
    <div>
        <van-uploader :before-read="beforeRead" :after-read="afterRead">
            <slot></slot>
        </van-uploader>
        <Popup v-model="show">
            <div class="imgedit">
                <div class="control">
                    <van-button block @click="chanel" type="default">取消</van-button>
                    <van-button block @click="save" type="warning">确认</van-button>
                </div>
                <div class="cropper">
                    <vueCropper
                            ref="cropper"
                            :img="option.img"
                            :outputType="option.outputType"
                            :fixedBox="option.fixedBox"
                            :centerBox="option.centerBox"
                            :autoCrop="option.autoCrop"
                            :autoCropWidth="option.autoCropWidth"
                            :autoCropHeight="option.autoCropHeight"
                            :mode="option.mode"
                            :enlarge="2"
                    ></vueCropper>
                </div>
            </div>

        </Popup>
    </div>
</template>

<script>
    import {Uploader as vanUploader,Popup,Button as vanButton} from 'vant'
    import {VueCropper} from 'vue-cropper'
    export default {
        name: "upload",
        components:{vanUploader,VueCropper,Popup,vanButton},
        data() {
            return {
                show:false,
                option: {
                    img: "",
                    outputType: "png",
                    fixedBox: true,
                    centerBox: true,
                    autoCrop: true,
                    autoCropWidth: 200,
                    autoCropHeight: 200,
                    mode: "cover"
                },
            }
        },
        methods: {
            // 返回布尔值
            beforeRead(file) {
                if (file.type !== 'image/jpeg') {
                    Toast('请上传 jpg 格式图片');
                    return false;
                }
                return true;
            },
            // 文件选取完毕
            afterRead(file){
                this.show = true
                this.option.img = URL.createObjectURL(file.file);
            },
            // 取消
            chanel(){
                this.option.img = ""
                this.show = false
            },
            // 保存
            save(){
                this.$refs.cropper.getCropBlob((blob) => {
                    let time = new Date().getTime()
                    let name = time+'_pic'
                    let obj = {
                        file: this.blobToFile(blob,name,blob.type),
                        blob:blob,
                        url: window.URL.createObjectURL(blob)
                    }
                    this.$emit("saveImg",obj);
                    this.chanel()
                })
            },
           blobToFile(newBlob, fileName,type) {
               let files = new window.File([newBlob], fileName,{type:type})
               return files;
            }
        },
    }
</script>

<style lang="less" scoped>
.imgedit{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .control{
        display: flex;
        &>button{
            border-radius: 0;
        }
    }
    .cropper{
        flex: 1;
        width: 100vw;
    }
}
</style>