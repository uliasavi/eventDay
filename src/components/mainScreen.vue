<template>
  <div class="mainScreen">
  <div class="main">
    <img src="../assets/images/01.jpg" alt="">
    <div class="container">
      <NewTimer/>
      <h1>Business Conference 2019</h1>
      <h2>10 - 12 DECEMBER, 2020, DUBLIN</h2>
    </div>
  </div>
        <whatIs/>
        <speaking/>
        <schedules/>
        <sponsor/>
        <travel/>
        <cost/>
        <blog/>
        <subscribe/>
        
    </div>
  
</template>

<script>
import NewTimer from '../components/NewTimer/NewTimer.vue'
import whatIs from '../components/whatIs.vue'
import speaking from '../components/speaking.vue'
import schedules from '../components/schedules.vue'
import sponsor from '../components/sponsor.vue'
import travel from '../components/travel.vue'
import cost from '../components/cost.vue'
import blog from '../components/blog.vue'
import subscribe from '../components/subscribe.vue'
export default {
  name: 'mainScreen',
  components:{
    NewTimer,
    whatIs,
    speaking,
    schedules,
    sponsor,
    travel,
    cost,
    blog,
    subscribe
  }
}
</script>


<style lang="scss">
  .main{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 18% 0px;
  }
  .main img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  h1{
    position: relative;
    z-index: 2;
    text-align: left;
    text-transform: uppercase;
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 10px;
    @media(max-width: 720px){
      font-size: 40px;
    }
  }
  h2{
    position: relative;
    z-index: 2;
    text-align: left;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    letter-spacing:-1px;
    @media(max-width: 720px){
      font-size: 20px;
    }
  }
</style>
