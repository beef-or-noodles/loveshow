<template>
  <!--新增地址-->
  <div class="detail">
    <goback />
    <address-edit
      :area-list="areaList"
      :address-info="AddressInfo"
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { AddressEdit } from 'vant'
import area from '@/assets/common/area'
import goback from '@/components/layout/goback'
export default {
    name: 'Add',
    components: { AddressEdit, goback },
    data() {
        return {
            areaList: area,
            searchResult: [],
            AddressInfo: {
                id: 1,
                name: '姓名',
                tel: '15707691799',
                province: '四川省',
                city: '成都市',
                county: '武侯区',
                addressDerail: '详细地址',
                areaCode: '510104',
                isDefault: true
            }
        }
    },
    created() {
        const query = this.$route.query
        if (query.hasOwnProperty('id')) {
            console.log('是编辑')
        }
    },
    methods: {
        onSave(val) {
            console.log(val)
        },
        onDelete() {

        },
        onChangeDetail(val) {}
    }
}
</script>

<style lang="less" scoped>
    .detail{
        padding-top: 50px;
    }
</style>
