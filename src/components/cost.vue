<template>
	<div class="cost">
		<div class="container">
			<div class="price">
				<div class="price__item">
					<div class="price__item__cost">$39<span>/day</span><br>PERSONAL</div>
					<ul class="price__item__ul">
						<li>Entrance</li>
						<li>Coffee Break</li>
						<li>Certificate</li>
						<li>Workshop</li>
					</ul>
					<button class="price__item__btn">Buy ticket</button>
				</div>
				<div class="price__item">
					<div class="price__item__cost">$89<span>/day</span><br>BUSINESS</div>
					<ul class="price__item__ul">
						<li>Entrance</li>
						<li>Coffee Break</li>
						<li>Certificate</li>
						<li>Workshop</li>
					</ul>
					<button class="price__item__btn">Buy ticket</button>
				</div>
				<div class="price__item">
					<div class="price__item__cost">$189<span>/day</span><br>PREMIUM</div>
					<ul class="price__item__ul">
						<li>Entrance</li>
						<li>Coffee Break</li>
						<li>Certificate</li>
						<li>Workshop</li>
					</ul>
					<button class="price__item__btn">Buy ticket</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cost'
}
</script>

<style lang="scss">
	.cost{
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/26.jpg);
		background-size: cover;
		text-align: center;
		margin-top:90px;
		& .price{
			display: flex;
			justify-content: space-beetween;
			align-items: center;
			@media(max-width: 920px){
				flex-direction:column;
			}
			& .price__item{
				width: 30%;
				margin: 0 2.5%;
				padding: 70px 30px;
				@media(max-width: 920px){
				width: 100%;
			}
				& .price__item__cost{
						font-size: 40px;
						color: #fff;
						font-weight: 700;
						text-transform: uppercase;
						margin-bottom: 40px;
						@media(max-width: 1000px){
							font-size: 20px;
						}
						& span{
							font-size: 20px;
							font-weight: 400;
						}
				}
				& .price__item__ul{
						font-size: 20px;
						color: #fff;
						text-transform: uppercase;
						list-style: none;
						padding-left: 0;
						margin-bottom: 80px;
						& li{
								margin:25px 0;
						}
				}
				& .price__item__btn{
					border: none;
					background-color: #fff;
					color: #000;
					font-size: 18px;
					border-radius: 5px;
					padding: 15px 20px;
				}
				&:hover{
					background-color: rgba(255, 119, 0, 0.5);

				}
			}
		}
	}
</style>