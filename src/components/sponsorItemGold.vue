<template>
	<div class="sponsorItemGold">
		<img :src="require('../assets/images/'+ Gsponsor_data.image)" alt="">
	</div>
</template>


<script>
export default {
  name: 'sponsorItemGold',
  props:{
    Gsponsor_data:{
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
.sponsorItemGold{
	margin:20px;
}
</style>