<template>
	<div class="blog__item">
		<div class="blog__img"><img :src="require('../assets/images/'+ blog_data.image)" alt="" width="100%"></div>
		<div class="blog__date">{{blog_data.date}}</div>
		<div class="blog__text">{{blog_data.text}}</div>
	</div>

</template>

<script>
	export default {
	name: 'blogItem',
	props:{
    blog_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
}
</script>

<style lang="scss">
.blog__item{
	width: 30%;
	text-align: left;
	@media(max-width: 850px){
		width: 100%;
			}
	& .blog__img img{
		width: 100%;
	}
	& .blog__date{
		color: purple;
		font-size: 20px;
		margin: 20px 0;
		letter-spacing:-1px;
	}
	& .blog__text{
		font-size: 25px;
		margin: 20px 0;
		font-weight: 900;
		letter-spacing:-1px;
	}
}
</style>