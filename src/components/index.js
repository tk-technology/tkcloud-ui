import Vue from 'vue'
import TKProportional from './proportional'

/* istanbul ignore next */
const Components = {  
  TKProportional
  }
Object.keys(Components).forEach(name => {  
Vue.component(name, Components[name])})
export default Components