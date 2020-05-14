<template>
<div class="header">
	<div class="container">
		<div class="header__body">
			<img src="../assets/images/logo.png" alt="">
			<input type="checkbox" class="header__open" id="checkmenu">
			<label for="checkmenu">Menu</label>
			<ul class="header__list" >
				<li class="header__item"><router-link to="/">Home</router-link></li>
				<li class="header__item"><router-link to="/speaking">SPEAKERS</router-link></li>
				<li class="header__item"><router-link to="/schedules">SCHEDULE</router-link></li>
				<li class="header__item"><router-link to="/pages">PAGES</router-link></li>
				<li class="header__item"><router-link to="/sponsor">SPONSORS</router-link></li>
				<li class="header__item"><router-link to="/subscribe">SHORTCODES</router-link></li>
			</ul>
			<button class="buy"><router-link to="/cost">Buy ticket</router-link></button>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name: 'headerY',
		methods:{
		}
	}
</script>

<style lang="scss">
label{
	color: #fff;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 900;
	cursor: pointer;
	display: none;
	overflow: hidden;
	@media(max-width: 1000px){
		display: block;
		overflow: visible;
	}
}
#checkmenu{
	display: none;
}
	.header{
		padding: 20px 0px;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
		background-image: url(../assets/images/01.jpg);
		background-size: cover;
	}
	.container{
		width: 80%;
		padding: 0 15px;
		margin: 0 auto;
	}
	.header__body{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		& img{
			@media(max-width: 500px){width: 100px;}
		}
	}
	.header__list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media(max-width: 1000px){
		font-size: 0;
		max-height: 0;
		overflow: hidden;
		flex-direction:column;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(22%);
		background-color: #333;
}
	}
	.header__item{
		list-style: none;
		margin-right: 15px;
		@media(max-width: 1000px){
			margin: 0;
			margin-bottom: 20px;
		}
	}
	.header__item a{
		text-decoration: none;
		text-transform: uppercase;
		color: #fff;
		font-weight: 700;
		font-size: 14px;
	}
	.buy{
		text-transform: uppercase;
		color: #fff;
		font-weight: 700;
		font-size: 14px;
		padding: 10px;
		background-color: orange;
		border: none;
		border-radius: 5px;
		@media(max-width: 720px){
      padding: 5px;
      font-size: 12px;
    }
	}
#checkmenu:checked ~ .header__list{
	max-height: 500px;
	font-size: 26px;
}

</style>