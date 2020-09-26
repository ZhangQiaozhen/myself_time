<template>
  <div class="clock">
    <p class="mytext">Just di it !</p>
    <div class="clickimg">
      <img src="../assets/fonts/clock.png">
    </div>
    <div class="countdown">
      <span>{{min}} : {{sec}}</span>
    </div>
    <div class="controlls">
      <button :disabled="state==='start'"
              @click="start">开始</button>
      <button :disabled="state !== 'start'"
              @click="pause_clock">暂停</button>
      <button @click="goBack">返回</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./bus.js";
const states = {
  START: 'start',
  PAUSE: 'pause'
}
const clock_states = {
  WORK: 'work',
  REST: 'rest'
}
var second = 0
export default {
  data () {
    return {
      minute: '',
      // 倒计时的分/秒
      minutes: 0,
      seconds: second,
      //休息的时间
      break_value: '',
      // 清空的状态
      state: states.ATART,
      // 工作的状态
      clock_state: clock_states.WORK
    }
  },
  created () {
    eventBus.$on('studyMsg', (val) => {
      this.minute = val
      this.minutes = val
    })
    eventBus.$on('relexMsg', (value) => {
      this.break_value = value
    })
  },
  methods: {
    tick: function () {
      if (this.seconds === 0 && this.minutes !== 0) {
        this.minutes--;
        this.seconds = 59;
        return;
      } else if (this.minutes === 0 && this.seconds === 0) {
        // 判断工作还是休息
        this.clock_state = this.clock_state === clock_states.WORK ? clock_states.REST : clock_states.WORK;
        if (this.clock_state === clock_states.WORK) {
          this.minutes = minute;
          return;
        } else {
          this.minutes = this.break_value;
          return;
        }
      } else {
        this.seconds--;
        return;
      }
    },
    // 开始
    start: function () {
      this.state = states.START;
      this.Interval = setInterval(this.tick, 100);
    },
    // 暂停
    pause_clock: function () {
      this.state = states.PAUSE;
      clearInterval(this.Interval);
    },
    // 返回Home界面
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    //当分秒小于10的时候 前面加个'0'，否则直接返回
    min: function () {
      if (this.minutes < 10) {
        return '0' + this.minutes;
      }
      return this.minutes;
    },
    sec: function () {
      if (this.seconds < 10) {
        return '0' + this.seconds;
      }
      return this.seconds;
    }
  },
  beforeDestroy () {
    eventBus.$off('studyMsg', this.val)
    eventBus.$off('relexMsg', this.val)
  }
}
</script>

<style lang="less" scoped>
.mytext {
  font-family: "FangSong";
  padding: 20px 30px;
}
.clock {
  background-image: url("../assets/fonts/laptop.png");
  background-repeat: no-repeat;
  background-position: 5% 15%;
  background-size: 300px 300px;
  background-color: #11112e;
  height: 100%;
  color: #eeeeee;
}
.clickimg img {
  width: 350px;
  position: absolute;
  left: 660px;
  top: 115px;
}
.countdown {
  font-size: 50px;
  position: absolute;
  left: 756px;
  top: 260px;
  text-shadow: 1px 1px 6px #ffffff;
}
.controlls {
  padding: 0 10px;
  border-radius: 10px;
  border: 2px solid #de87a0;
  box-shadow: 1px 1px 4px #de87a0;
  position: absolute;
  left: 677px;
  top: 470px;
  button {
    font-family: "FangSong";
    width: 76px;
    height: 46px;
    border-radius: 10px;
    background-color: #11112e;
    color: #de87a0;
    font-size: 22px;
    margin: 20px 10px;
    text-shadow: 1px 1px 2px #de87a0;
    cursor: pointer;
  }
}
</style>
