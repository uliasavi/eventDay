<template>
	<div class="speakingItem">
		<div class="speak__img">
			<img :src="require('../assets/images/'+ speaker_data.image)" alt="" width="100%">
			<div class="img__hover">
				<div class="hover__item instagram"><img src="../assets/images/instagram.svg" alt="" width="30px"></div>
				<div class="hover__item facebook"><img src="../assets/images/facebook.svg" alt="" width="30px"></div>
				<div class="hover__item in"><img src="../assets/images/instagram.svg" alt="" width="30px"></div>
				<div class="hover__item behance"><img src="../assets/images/facebook.svg" alt="" width="30px"></div>
			</div>
		</div>
		<div class="speak__title"><router-link :to="'/pages'">{{speaker_data.name}}</router-link></div>
		<div class="speak__work">{{speaker_data.work}}</div>
	</div>
</template>


<script>

export default {
  name: 'speakingItem',
  num: '',
  props:{
    speaker_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
}
</script>


<style lang="scss">
.speakingItem{
	width: 20%;
	margin: 2.5%;
	@media(max-width: 760px){
				width: 40%;
			}
	@media(max-width: 520px){
				width: 100%;
			}
	& .speak__img{
		position: relative;
		&:hover .img__hover{
			display: flex;
		}
		& .img__hover{
			visibility: inherit;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			display: none;
			justify-content: space-between;
			align-items:center;
			flex-wrap: wrap;
			& .hover__item{
				width: 50%;
				height: 32%;
				text-align: center;
				padding-top: 20%;
			}
				& .instagram{
					background-color: rgba(183, 61, 196, 0.8);
				}
				& .facebook{
					background-color: rgba(196, 61, 147, 0.8);
				}
				& .in{
					background-color: rgba(57, 113, 191, 0.8);
				}
				& .behance{
					background-color: rgba(24, 25, 26, 0.8);
				}
		}
	}
	& .speak__title{
		color: #fff;
		padding: 10px 0;
		font-weight: 900;
		font-size: 20px;
		text-transform: uppercase;
	}
	& .speak__work{
		color: #fff;
		font-size: 20px;
	}
}
</style>