<template>
	<div class="sponsorItemPlatinum">
		<img :src="require('../assets/images/'+ Psponsor_data.image)" alt="">
	</div>
</template>


<script>
export default {
  name: 'sponsorItemPlatinum',
   props:{
    Psponsor_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
  return{}
  }
}
</script>
<style>
.sponsorItemPlatinum{
	margin:20px;
}
</style>