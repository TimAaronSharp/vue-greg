<template>
    <div class="properties">
        <router-link :to="{name: 'home'}">Return to Home</router-link>
        <div class="house row">
            <div v-for="house in properties" class="col-sm-4">
                <img :src="house.imgUrl" alt="a house">
                <p>{{house.color}} - {{house.year}} - {{house.model}}</p>
                <router-link :to="{name: 'propertydetails', params: {houseId:house.id}}">Description</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'properties',
        data() {
            return {

            }
        },
        computed: {
            properties(){
                return this.$store.state.properties
            }
        }
    }
</script>

<style>
</style>