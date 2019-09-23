<template>
    <v-footer class="pa-3" app>
			<v-spacer></v-spacer>
			<div>{{ nome }} &copy; {{ new Date().getFullYear() }}</div>
		</v-footer>
</template>
<script>
    export default {
        props: ['nome'],
        data(){
            return {

            }
        }
    }
</script>