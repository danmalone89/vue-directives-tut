import Vue from 'vue'
import App from './App.vue'

Vue.directive('colorChanger', {
  bind(el, binding) {
    let mainColor = 'white';
    let secondaryColor = binding.value.color
    el.addEventListener('mouseenter', function() {
      el.style.cursor = 'pointer'
      el.style.background = secondaryColor
    })
    el.addEventListener('mouseleave', function() {
      el.style.background = mainColor
    })
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
