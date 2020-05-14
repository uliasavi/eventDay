<template>
	<div class="sponsor">
		<div class="container">
			<div class="sponsor__title">Our Event Sponsors</div>
			<div class="sponsor__subtitle">Check Who Makes This Event Possible!</div>
			<div class="sponsor_platinum">
				<div class="sponsor__list__title">Platinum Sponsors</div>
				<div class="sponsor__list">
					<sponsorItemPlatinum 
					v-for="Psponsor in Psponsors"
					:key="Psponsor.num"
					v-bind:Psponsor_data="Psponsor"/>
				</div>
			</div>
			<div class="sponsor_gold">
				<div class="sponsor__list__title">Gold Sponsors</div>
				<div class="sponsor__list">
					<sponsorItemGold
					v-for="Gsponsor in Gsponsors"
					:key="Gsponsor.num"
					v-bind:Gsponsor_data="Gsponsor"
					/>
				</div>
			</div>
			<button class="sponsor__btn">Become a Sponsor</button>
		</div>
	</div>
</template>


<script>
	import sponsorItemPlatinum from '../components/sponsorItemPlatinum.vue'
	import sponsorItemGold from '../components/sponsorItemGold.vue'
export default {
  name: 'sponsor',
  components:{
		sponsorItemPlatinum,
		sponsorItemGold
  },
  data(){
    return{
     Psponsors:[
       {image: '15.png', num: '1P'},
       {image: '16.png', num: '2P'},
       {image: '17.png', num: '3P'}
     ],
     Gsponsors:[
       {image: '18.png', num: '1G'},
       {image: '19.png', num: '2G'},
       {image: '20.png', num: '3G'},
       {image: '21.png', num: '4G'}
     ]
    }
  }

}
</script>


<style lang="scss">
	.sponsor{
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/22.jpg);
		background-size: cover;
		padding: 100px 0;
		text-align: center;
		& .sponsor__title{
			color: #000;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 40px;
		}
		& .sponsor__subtitle{
			color: #000;
			font-size: 20px;
			margin-bottom: 40px;
		}
		& .sponsor_platinum, .sponsor_gold{
			margin-bottom: 70px;
				& .sponsor__list__title{
					color: #000;
					font-weight: 900;
					font-size: 30px;
					margin-bottom: 40px;
				}
				& .sponsor__list{
					display: flex;
					justify-content: space-between;
					align-items:center;
					flex-wrap: wrap;
				}
		}
		& .sponsor__btn{
				border: none;
				background-color: green;
				color: #fff;
				font-size: 18px;
				border-radius: 5px;
				padding: 15px 20px;
				margin-right: 30px;
		}
	}

</style>