import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        automotives: {
            'lk34kl4lk234blk23b4bjk': {
                id: 'lk34kl4lk234blk23b4bjk',
                make: 'For',
                model: 'Mustard',
                color: 'grey poupon',
                description: 'Do you have this car? Its grey poupon get it!!!',
                imgUrl: 'http://loremflickr.com/200/200/car'
            },
            'lk34kwsefdceev234blk23b4bjk': {
                id: 'lk34kwsefdceev234blk23b4bjk',
                make: 'Cevy',
                model: 'Oregon',
                color: 'Tree',
                description: "Smells of coffee and beard oil",
                imgUrl: 'http://loremflickr.com/200/200/car'
            },
            'lk34kl4lk235sef541b4125bjk': {
                id: 'lk34kl4lk235sef541b4125bjk',
                make: 'Doge',
                model: 'Bark',
                color: 'Much Happy',
                description: "Such speed, fastness, wow!",
                imgUrl: 'http://loremflickr.com/200/200/car'
            }

        },
        properties: {
            'dsakjfh3skdhjf': {
                id: 'dsakjfh3skdhjf',
                model: "Rambler",
                year: 1976,
                color: 'Brown',
                floors: 3,
                bedrooms: 4,
                bathrooms: 2,
                imgUrl: 'http://loremflickr.com/200/200/house'
            },
            'dsakjfh3skdd97': {
                id: 'dsakjfh3skdd97',
                model: "Duplex",
                year: 1960,
                color: 'White',
                floors: 2,
                bedrooms: 3,
                bathrooms: 1,
                imgUrl: 'http://loremflickr.com/200/200/house'
            },
            'dsakjfh3sk245f': {
                id: 'dsakjfh3sk245f',
                model: "Mansion",
                year: 2017,
                color: 'Gold',
                floors: 5,
                bedrooms: 37,
                bathrooms: 25,
                imgUrl: 'http://loremflickr.com/200/200/house'
            }
        }
    },
    mutations: {},
    actions: {}
})

export default store