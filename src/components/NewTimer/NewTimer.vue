<template>
<div class="countdown">
        <div class="time-section">
            <span class="count" id="days">{{ Math.trunc(days) }}</span>
            <span class="units">days</span>
        </div>
        <div class="time-section">
            <span class="count" id="hours">{{ Math.trunc(hours) }}</span>
            <span class="units">hours</span>
    </div>
        <div class="time-section">
            <span class="count" id="minutes">{{ Math.trunc(minutes) }}</span>
            <span class="units">minutes</span>
        </div>
        <div class="time-section">
            <span class="count" id="seconds">{{ Math.trunc(seconds) }}</span>
        <span class="units">seconds</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTimer',
    props: {
        date: {
            type: String
        }
    },
    data() {
        return {
            now: 0,
            count: 0,
       }
    },
    methods: {
        timer_loop() {
            this.count++
            this.now = Math.trunc(new Date().getTime() / 1000)
            this.modifiedDate = Math.trunc(new Date(2020, 12, 10, 0, 0, 0, 0).getTime() / 1000)
            //console.log(this.now);
            this.count < 200 && setTimeout(this.timer_loop, 1000)
        },
    },
    mounted() {
        this.timer_loop()
    },
    computed: {
        seconds() {
            return (this.modifiedDate - this.now) % 60
        },
        minutes() {
            return ((this.modifiedDate - this.now) / 60) % 60
        },
        hours() {
            return ((this.modifiedDate - this.now) / 60 / 60) % 24
        },
        days() {
            return ((this.modifiedDate - this.now) / 60 / 60 / 24)
        },
    }
}
</script>

<style lang="scss">
    .countdown{
    margin-top: 8%;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .time-section{
    margin-right: 30px;
    text-transform: uppercase;
    color:#fff;
    font-weight: 900;
    font-size: 30px;
    display: flex;
    justify-content: space-berween;
    align-items:center;
    flex-direction: column;
     @media(max-width: 720px){
      font-size: 17px;
    }
    & .count{
      font-size: 50px;
      @media(max-width: 720px){
      font-size: 25px;
    }
    }
    & #days{
      color: pink;
    }
    & #hours{
      color: lime;
    }
    & #minutes{
      color: skyblue;
    }
    & #seconds{
      color:green;
    }
  }
</style>
