<template>
	<div class="footers">
		<div class="container">
			<div class="footer__logo"><img src="../assets/images/31.png" alt=""></div>
			<div class="footer__text">© 2015 YOUR COMPANY. ALL RIGHTS RESERVED. DESIGNED BY <span>THEMEUM</span></div>
			<div class="footer__list">
				<a href="#"><img src="../assets/images/instagram.svg" alt="" width="20px"></a>
				<a href="#"><img src="../assets/images/facebook.svg" alt="" width="20px"></a>
				<a href="#"><img src="../assets/images/facebook.svg" alt="" width="20px"></a>
				<a href="#"><img src="../assets/images/facebook.svg" alt="" width="20px"></a>
			</div>
		</div>
	</div>
</template>

<script>
export default{
  name: 'footers'
}
</script>

<style lang="scss">
.footers{
		width: 100%;
		background-color: #2e343d;
		text-align: center;
		padding: 70px 0;
		margin-top: 70px;
		& .footer__logo{

		}
		& .footer__text{
			margin: 30px 0;
			color: #b3b1ad;
		}
		& .footer__list{

		}
}

</style>