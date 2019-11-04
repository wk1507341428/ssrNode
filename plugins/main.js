import Vue from 'vue'
import filters from '../filters'
import loading from './loading/loading'

Vue.use(loading)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))