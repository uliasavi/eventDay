<template>
	<div class="subscribe">
		<div class="container">
			<div class="subscribe__title">Sign Up For Our Newsletter</div>
			<form action="" class="subscribe__form">
				<input type="email" placeholder="Your email address" class="subscribe__email">
				<input type="submit" value="Subscribe" class="subscribe__btn">
			</form>
		</div>
	</div>

</template>

<script>
	export default {
	name: 'subscribe'
}
</script>

<style lang="scss">
.subscribe{
	width: 100%;
	height: 100%;
	background-image: url(../assets/images/46.jpg);
	background-size: cover;
	padding: 200px 0;
	text-align: center;
	& .subscribe__title{
			color: #fff;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 40px;
	}
	& .subscribe__form{
		margin: 0 auto;
		width: 50%;
		display: flex;
		justify-content: space-around;
		@media(max-width: 970px){
				flex-direction:column;
				align-items:center;
			}
		& .subscribe__email{
				width: 80%;
				margin-right: 20px;
				border-radius: 5px;
				border: none;
				padding: 10px 15px;
				@media(max-width: 970px){
				margin-bottom: 20px;
				width: 100%;
			}
		}
		& .subscribe__btn{
			border: none;
			background-color: #32a852;
			color: #fff;
			font-size: 18px;
			border-radius: 5px;
			padding: 15px 20px;
			margin-right: 30px;
			@media(max-width: 970px){
				width: 40%;
			}
			@media(max-width: 770px){
				width: 60%;
			}
		}

	}
}
</style>