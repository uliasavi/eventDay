<template>
	<div class="blog">
		<div class="container">
			<div class="blog__title">From Our Blog</div>
			<div class="blog__list">
				<blogItem
				v-for="blog in blogs"
				:key="blog.num"
				v-bind:blog_data="blog"/>
			</div>
		</div>
	</div>
</template>

<script>
	import blogItem from './blog__item.vue'
	export default {
	name: 'blog',
	components:{
		blogItem
	},
	data(){
    return{
     blogs:[
       {image: '27.jpg', date: '14 Sep 2015', num: '1B', text: 'River stumble as Cruzeiro but fly high in table prove'},
       {image: '28.jpg', date: '14 Sep 2015', num: '2B', text: 'Brooklyn Beta was the most important conferen tristique'},
       {image: '29.jpg', date: '14 Sep 2015', num: '3B', text: 'Gallery porchetta as Cruzeiro but fly high in table proving'},
     ]
    }
  }
}
</script>

<style lang="scss">
	.blog{
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 100px 0;
		& .blog__title{
			color: #000;
			font-weight: 900;
			font-size: 40px;
			margin-bottom: 40px;
		}
		& .blog__list{
			display: flex;
			justify-content: space-between;
			align-items:center;
			@media(max-width: 850px){
				flex-direction:column;
			}
		}
	}
</style>