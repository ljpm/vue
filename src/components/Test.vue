<template>
	<div>
		<h1>Test component</h1>
	</div>
</template>

<script>
	export default { 
		data() {
			return {  
			title: 'Hola vuejs',	
		}

		},
		methods: {

		},
		props: {
			msg:{
				type: String
			}
		}
	}
</script>

<style>
	.list{
		color: red;
	}

</style>