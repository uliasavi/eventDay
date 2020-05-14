<template>
	<div class="countdown">
		<div class="time-section">
			<span class="count" id="days">{{CountDate}}</span>
			<span class="units">days</span>
		</div>
		<div class="time-section">
			<span class="count" id="hours">{{CountHours}}</span>
			<span class="units">hours</span>
	</div>
		<div class="time-section">
			<span class="count" id="minutes">{{CountMinutes}}</span>
			<span class="units">minutes</span>
		</div>
		<div class="time-section">
			<span class="count" id="seconds">{{CountSeconds}}</span>
		<span class="units">seconds</span>
		</div>
	</div>
</template>

<script>

export default {
  name: 'timer',

    data: () => ({
        // Дата хранится в виде числа. Не обязательно в state компонента. Но и в других местах тоже
        date: 1580558031264,
        EventDay: new Date(2020, 10, 10, 0, 0, 0, 0),

    }),
    
    computed: {
        localeDate() {
            return (new Date(this.date)).toLocaleDateString()
        },
        CountDate(){
          var date = new Date();
          var endYear = new Date('12-10-2020'); // Set day and month
          endYear.setFullYear(date.getFullYear()); // Set year to this year
          var daysLeftPred = (endYear.getTime() - date.getTime())/ (1000*3600*24);
          var daysLeft = Math.floor(daysLeftPred);
          return(daysLeft)
        },
        CountHours(){
          var date = new Date();
          var endYear = new Date('12-10-2020'); // Set day and month
          endYear.setFullYear(date.getFullYear()); // Set year to this year
          var hoursLeftPred = (endYear.getTime() - date.getTime())/ (1000*3600);
          var hoursLeft = Math.floor(hoursLeftPred);
          var diffHours = hoursLeft - this.CountDate*24
          return(diffHours)
        },
         CountMinutes(){
          var date = new Date();
          var endYear = new Date('12-10-2020'); // Set day and month
          endYear.setFullYear(date.getFullYear()); // Set year to this year
          var minutesLeftPred = (endYear.getTime() - date.getTime())/ (1000*60);
          var minutesLeft = Math.floor(minutesLeftPred);
          var diffMinutes = minutesLeft - this.CountHours*60 - this.CountDate*24*60
          return(diffMinutes)
        },
        CountSeconds(){
          var date = new Date();
          var endYear = new Date('12-10-2020'); // Set day and month
          endYear.setFullYear(date.getFullYear()); // Set year to this year
          var secondsLeftPred = (endYear.getTime() - date.getTime())/ (1000);
          var secondsLeft = Math.floor(secondsLeftPred);
          var diffseconds = secondsLeft - this.CountMinutes*60 -this.CountHours*3600 - this.CountDate*24*3600
          return(diffseconds)
        },
    },
    methods:{
    },
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
      font-size: 20px;
    }
    & .count{
      font-size: 50px;
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