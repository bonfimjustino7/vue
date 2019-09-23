<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c"/>
    </div>
</template>

<script>
import Contador from './Contador.vue' // Importando de forma local o contador

export default {
    components: { 'app-contador': Contador} // cadastrando na vue pra ser o usado o contador
}
</script>

<style>

</style>
