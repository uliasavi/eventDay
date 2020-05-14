<template>
	<div class="travel">
		<div class="container">
			<div class="travel__title">Travel Information</div>
			<div class="travel__list">
				<div class="travel__item">
					<div class="travel__item__img"><img src="../assets/images/23.png" alt=""></div>
					<div class="travel__item__title">Venue</div>
					<div class="travel__item__text">Docklands Convention Centre 58 Wurundjeri Way Dablin, 3000</div>
				</div>
				<div class="travel__item">
					<div class="travel__item__img"><img src="../assets/images/24.png" alt=""></div>
					<div class="travel__item__title">Transport</div>
					<div class="travel__item__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</div>
				</div>
				<div class="travel__item">
					<div class="travel__item__img"><img src="../assets/images/25.png" alt=""></div>
					<div class="travel__item__title">Hotel & Restaurant</div>
					<div class="travel__item__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
  name: 'travel'
}
</script>

<style lang="scss">
	.travel{
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 100px 0;
		& .travel__title{
			color: #000;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 40px;
		}
		& .travel__list{
			display: flex;
			justify-content: space-between;
			align-items: center;
			@media(max-width: 720px){
				flex-direction:column;
			}
			& .travel__item{
				margin:50px;
				width: 25%;
				@media(max-width: 720px){
				width: 100%;
			}
				& .travel__item__img{}
				& .travel__item__title{
					color: #000;
					font-weight: 900;
					font-size: 30px;
					margin: 20px 0;
				}
				& .travel__item__text{
					width: 80%;
					margin:0 auto;
				}
			}
		}
	}

</style>