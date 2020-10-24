<template>
  <div class="main">
    <van-button type="primary">主要按钮</van-button>
    <p class="txt">文字</p>
  </div>
</template>

<script>
import {Button as vanButton} from 'vant';
export default {
    name: 'Index',
    components:{vanButton},
    data() {
        return {

        }
    }

}
</script>

<style lang="less" scoped>
  .main{
    height: 300px;
  }
  .txt{
    font-size: 16px;
  }
</style>
