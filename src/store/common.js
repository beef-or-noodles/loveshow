/**
 * Created by HIAPAD on 2020/5/24.
 */
const state = {
    loading: false, //全局加载动画
    signShow:false, //未入住弹窗
}
const mutations = {
    setLoading: (state, type = false) => {
        state.loading = type
    },
    setSignShow: (state, type = false) => {
        state.signShow = type
    }
}
const getters = {
    getLoading: (state) => {
        return state.loading
    },
    getSignShow: (state) => {
        return state.signShow
    }
}
export default {
    state, mutations, getters
}
