<template>
	<v-app>		
		<app-navegador />
		
		<app-menu />

		<app-slide />	

		<app-rodape nome="Curso Vue JS"/>
		
	</v-app>
</template>

<script>

import Navegador from './Navegador.vue'
import Menu from './Menu.vue'
import Slide from './Slide.vue'
import Rodape from './Rodape.vue'

export default {
	components: {
		'app-navegador': Navegador,
		'app-menu': Menu,
		'app-slide': Slide,
		'app-rodape': Rodape
	},

	data() {
		return {			
			
		}
	}
}
</script>
