<template>
	<div class="speaking">
		<div class="container">
			<div class="speaking__title">Who's Speaking?</div>
			<div class="speaking__table">
				<speakingItem
				v-for="speaker in SPEAKERS"
				:key="speaker.num"
				v-bind:speaker_data="speaker"
				/>
			</div>
		</div>
	</div>
</template>


<script>
import speakingItem from '../components/speakingItem.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'speaking',
  components:{
   speakingItem
  },
  data(){
    return{}
  },
  computed:{
    ...mapGetters([
    'SPEAKERS'
    ])
  },
  methods:{
    ...mapActions([
    'GET_SPEAKERS_FROM_API'
    ])
  },
  mounted(){
   this.GET_SPEAKERS_FROM_API()
  }
}
</script>

<style lang="scss">
	.speaking{
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/03.png);
		background-size: cover;
		padding: 150px 0;
		& .speaking__title{
			text-align: center;
			color: #fff;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 40px;
		}
		& .speaking__table{
			display: flex;
			justify-content: space-between;
			align-item: center;
			flex-wrap: wrap;
		}
	}
</style>