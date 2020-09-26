<template name="slide">
  <div class="bg">
    <p class="text1">I'm just a normal person who is fighting for the future and far away.</p>
    <span>
      <img class="pic"
           src="..\assets\fonts\pig.png">
      <p class="text2">冲 呀 ~ ~ ~</p>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: ""
    }
  },
  created () {
    this.jumpPage()
  },
  methods: {
    jumpPage () {
      const timejump = 1;
      if (!this.timer) {
        this.count = timejump
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            this.$router.push('/home')
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  height: 100%;
  background-color: #081c3b;
  text-align: center;
  .text1 {
    font-family: "FangSong";
    color: #eee;
    position: absolute;
    left: 2%;
    top: 2%;
  }
  .text2 {
    font-family: "FangSong";
    display: inline-table;
    font-size: 33px;
    color: #eeeeee;
    box-shadow: #eee;
    position: absolute;
    left: 48%;
    top: 53%;
    transform: translate(25%, -239%);
  }
}
.pic {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-90%, -78%);
}
</style>
