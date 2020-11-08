<template>
  <!--地址列表-->
  <div>
    <address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { AddressList } from 'vant'
export default {
    name: 'List',
    components: { AddressList },
    data() {
        return {
            chosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ]
        }
    },
    methods: {
        onAdd() {
            console.log('添加地址')
            this.$router.push({ path: '/address_add' })
        },
        onEdit(item, index) {
            console.log('编辑地址')
            this.$router.push({ path: '/address_edit', query: { id: 1 }})
        }
    }
}
</script>
s
<style scoped>

</style>
