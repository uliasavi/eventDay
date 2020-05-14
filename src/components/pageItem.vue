<template>
			<div class="pages__speaker">
				<div class="speak__img">
					<img :src="require('../assets/images/'+ speaker_data.image)" alt="" width="100%">
					<div class="speak__title">{{speaker_data.name}}</div>
					<div class="speak__work">{{speaker_data.work}}</div>
				</div>
				<div class="speak__about">{{speaker_data.about}}</div>
			</div>
</template>
<script>
	export default{
		name: 'pageItem',
		props:{
    speaker_data:{
      type: Object,
      default(){return{}}
    }
  },
}
</script>

