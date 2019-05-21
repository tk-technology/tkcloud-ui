import Vue from 'vue'
import TKProportional from './components/proportional'
import CircleProgress from './components/circleProgress'

/* istanbul ignore next */
const Components = {  
  TKProportional,
  CircleProgress
  }
Object.keys(Components).forEach(name => {  
Vue.component(name, Components[name])})
export default Components