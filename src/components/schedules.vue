<template>
	<div class="schedules">
		<img src="../assets/images/12.png" alt="" class="schedules__img1">
		<img src="../assets/images/13.png" alt="" class="schedules__img2">
		<img src="../assets/images/14.png" alt="" class="schedules__img3">
		<div class="container">
			<div class="schedules__title">Event Schedules</div>
			<div class="schedules__subtitle">Saturday, 10 December 2019</div>
			<table bgcolor="#f0f0f0" frame="void" cellpadding="10px" rules="rows" bordercolor="#a8a8a8">
				<tr class="name__row"><th>#</th><th  class="table__left">SESSION</th><th>SPEAKER(S)</th><th>TIME</th><th>VENUE</th></tr>
				<tr><td>1</td><td class="table__left">OPENING REMARKS</td><td>JEFF SEVERIN</td><td>08:45 AM</td><td>ROOM A</td></tr>
				<tr><td>2</td><td class="table__left">INTRODUCTION TO WP</td><td>JAMIE WEN</td><td>09:00 AM</td><td>ROOM B</td></tr>
				<tr><td>3</td><td class="table__left">GETTING STARTED WITH WP</td><td>WILLIAM JOHN</td><td>11:00 AM</td><td>ROOM C</td></tr>
				<tr><td>4</td><td class="table__left">WP THEME DEVELOPMENT</td><td>WILLIAM JOHN</td><td>02:00 PM</td><td>ROOM D</td></tr>
				<tr><td>5</td><td class="table__left">PLUGIN DEVELOPMENT</td><td>RUTH R. SMITH</td><td>03:00 PM</td><td>ROOM E</td></tr>
			</table>
			<button class="schedules__btn">More Schedules</button>
		</div>

	</div>
</template>

<script>
export default {
	name: 'schedules'
}
</script>

<style lang="scss">
	.schedules{
		position: relative;
		width: 100%;
		padding: 150px 0px;
		text-align: center;
		& .schedules__img1{
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 0;
		}
		& .schedules__img2{
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: 0;
		}
		& .schedules__img3{
			position: absolute;
			top: 0;
			right: 0;
			z-index: 0;
		}
		& .schedules__title{
			position: relative;
			z-index: 2;
			color: #000;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 40px;
		}
		& .schedules__subtitle{
			position: relative;
			z-index: 2;
			color: #000;
			font-weight: 700;
			font-size: 20px;
			margin-bottom: 40px;

		}
		& table{
			position: relative;
			z-index: 2;
			width: 80%;
			margin: 0 auto;
			margin-bottom: 50px;
			@media(max-width: 720px){
				font-size: 12px;
			}
			& .name__row{
				background-color: #dcdfe3;
			}
			& .table__left{
				text-align: left;
				padding-left: 30px;
			}
		}
		& .schedules__btn{
				border: none;
				background-color: orange;
				color: #fff;
				font-size: 18px;
				border-radius: 5px;
				padding: 15px 20px;
				margin-right: 30px;
				@media(max-width: 720px){
				font-size: 12px;
			}
		}
	}
</style>