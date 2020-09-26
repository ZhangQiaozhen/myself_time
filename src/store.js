import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        minutes: [],
        studyNum: '',
        relextime: [],
        relexNum: ''
    },
    mutations: {
        initMinutes(state, minutes) {
            state.minutes = minutes
        },
        setStudyNum(state, studyNum) {
            state.studyNum = studyNum
        },

        initRelex(state, relextime) {
            state.relextime = relextime
        },
        setRelexNum(state, relexNum) {
            state.relexNum = relexNum
        },
        minusOne(state) {
            state.studyNum--
        }
    },
    actions: {
        getMinutes(context) {
            Axios.get('/minutes.json').then(({ data }) => {
                console.log(data);
                context.commit('initMinutes', data)
            })
        },
        getRelex(context) {
            Axios.get('/relex.json').then(({ data }) => {
                console.log(data);
                context.commit('initRelex', data)
            })
        }
    },
    // getters: {
    //     // 承载变化的studyNum
    //     getStudyNum(state) {
    //         return state.studyNum;
    //     },
    //     // 操作变化
    //     showMinute(state) {
    //         return state.studyNum--;
    //     }
    // }

})