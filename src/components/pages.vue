<template>
	<div class="pages" id="speaks">
		<div class="container">
			<pageItem v-for="(speaker, index) in SPEAKERS.slice(0, 1)"
				:key="index"
				v-bind:speaker_data="speaker"/>
		</div>
	</div>
</template>


<script>
import pageItem from './pageItem.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'pages1',
  components:{
     pageItem
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
	.pages{
		padding: 200px 0;
		width: 100%;
		height: 100%;
		background-color: #2e343d;
		display: flex;
		justify-content: space-between;
		color: #fff;
		font-size: 20px;
		& .pages__speaker{
			display: flex;
			justify-content: space-between;
			align-items:center;
			& .speak__title{
				margin-top: 20px;
			}
		}
		& .speak__about{
			margin-left: 20px;
			width: 40%;
		}
	}
</style>