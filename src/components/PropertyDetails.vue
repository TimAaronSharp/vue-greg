<template>
    <div class="propertydetails">
        <router-link :to="{name: 'home'}">Return to Home</router-link>
        <div v-if="house">
            <img :src="house.imgUrl" alt="">
            <p>{{house.color}} - {{house.year}} - {{house.model}}</p>
            <p>Floors: {{house.floors}}</p>
            <p>Bedrooms: {{house.bedrooms}}</p>
            <p>Bathrooms: {{house.bathrooms}}</p>
        </div>
        <div v-else>CANNOT FIND THAT PROPERTY</div>
    </div>
</template>

<script>
    export default {
        name: 'propertydetails',
        data() {
            return {
                id: this.$route.params.houseId
            }
        },
        computed: {
            house() {
                return this.$store.state.properties[this.$route.params.houseId]
            }
        }
    }
</script>

<style>
</style>