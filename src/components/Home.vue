<template>
  <div class="bg">
    <p class="mytext">This is my moment.</p>
    <img class="one"
         src="../assets/fonts/rose1.png">
    <img class="two"
         src="../assets/fonts/rose2.png">
    <img class="three"
         src="../assets/fonts/rose3.png">
    <!-- 学习时长 -->
    <label class="study">学习时间：
      <select name="1"
              v-model="studyNum">
        <option value=""
                disabled
                selected
                hidden>请选择学习时间</option>
        <option v-for="item in minutes"
                :key="item.studyNum"
                :value="item.studyNum">{{item.label}}</option>
      </select>
    </label>
    <!-- 休息时长 -->
    <label class="relex">休息时间：
      <select name="2"
              v-model="relexNum">
        <option value=""
                selected
                disabled
                hidden>请选择休息时间</option>
        <option v-for="ritem in relextime"
                :key="ritem.relexNum"
                :value="ritem.relexNum">{{ritem.relexLabel}}</option>
      </select>
    </label>
    <!-- 开始 -->
    <el-button @click="goTime"
               class="btn"
               plain>我要开始学习啦~</el-button>
  </div>
</template>

<script>
import { eventBus } from "./bus.js";
export default {
  data () {
    return {
      minutes: [
        { "label": "15", "studyNum": 15 },
        { "label": "25", "studyNum": 25 },
        { "label": "35", "studyNum": 35 },
        { "label": "45", "studyNum": 45 },
        { "label": "55", "studyNum": 55 }
      ],
      relextime: [
        { "relexLabel": 5, "relexNum": 5 },
        { "relexLabel": 10, "relexNum": 10 }
      ],
      studyNum: '',
      relexNum: '',
    }
  },
  beforeDestroy () {
    eventBus.$emit('studyMsg', this.studyNum);
    eventBus.$emit("relexMsg", this.relexNum);
  },
  methods: {
    goTime () {
      this.$router.push('./time')
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  font-family: "FangSong";
  height: 100%;
  background-color: #090a34;
  color: aliceblue;
  font-size: 20px;
}
.mytext {
  font-family: "FangSong";
  padding: 20px 30px;
  font-size: 16px;
}
img {
  opacity: 0.8;
}
.one {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 6%;
  top: 63%;
  opacity: 0.3;
}
.two {
  width: 150px;
  height: 150px;
  position: absolute;
  right: 4%;
  bottom: 70%;
  opacity: 0.3;
}
.three {
  height: 150px;
  position: absolute;
  left: 55%;
  top: 45.8%;
  opacity: 0.3;
}
select {
  font-family: "FangSong";
  border-radius: 3px;
  width: 180px;
  height: 25px;
  font-size: 17px;
  cursor: pointer;
}
.study {
  position: absolute;
  left: 40%;
  top: 33%;
}
.relex {
  position: absolute;
  left: 40%;
  top: 40%;
}
.btn {
  background-color: #ac0303;
  position: absolute;
  left: 50%;
  top: 50%;
  color: #eeeeee;
  font-size: 18px;
  font-family: "FangSong";
}
</style>
