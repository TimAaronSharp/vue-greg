<template>
    <div class="automotive">
        <router-link :to="{name: 'home'}">Return to Home</router-link>
        <div class="cars row">
            <div v-for="car in automotives" class="col-sm-4">
                <img :src="car.imgUrl" alt="a car">
                <p>Type: {{car.make}} - {{car.model}}</p>
                <router-link :to="{name: 'details', params: {carId: car.id}}">Description</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Automotive',
        data(){
            return {

            }
        },
        computed: {
            automotives(){
                return this.$store.state.automotives
            }
        }
    }
</script>

<style>

</style>