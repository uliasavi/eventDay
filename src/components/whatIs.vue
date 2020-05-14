<template>
  <div class="what">
    <div class="container">
      <div class="whatis">
        <div class="what__col">
          <img src="../assets/images/02.png" alt="" width="100%">
        </div>
        <div class="what__col">
          <div class="what__text">
            <div class="what__title">WHAT IS BUSINESS CONFERENCE 2019</div>
            <div class="what__subtitle">Where The Business World Meets</div>
            <div class="what__word">Conference dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
            <div class="what__btn">
              <button class="whatFirst">Buy Ticket</button>
              <button class="whatSecond">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'whatIs'
}
</script>

<style lang="scss">
  .whatis{
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    align-item: center;
    & .what__col{
      & .what__text{
        & .what__title{
          color: purple;
          text-transform: uppercase;
          font-size: 40px;
          font-weight: 900;
          margin-bottom: 10px;
        }
        & .what__subtitle{
          color: #000;
          font-size: 25px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        & .what__word{
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 30px;
        }
        & .what__btn{
          & .whatFirst{
            border: none;
            background-color: purple;
            color: #fff;
            font-size: 18px;
            border-radius: 5px;
            padding: 15px 20px;
            margin-right: 30px;
          }
          & .whatSecond{
             border: none;
             background-color: #32a852;
            color: #fff;
            font-size: 18px;
            border-radius: 5px;
            padding: 15px 20px;
            margin-right: 30px;
          }
        }
      }
    }

  }
  
</style>
