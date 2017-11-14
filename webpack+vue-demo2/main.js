// require('./style.css')
// var a=50;
// var b=50;

// document.write(a+b);

import Vue from 'vue';
import App from './view/app.vue';
new Vue({
	el:'#app',
	render:h=>h(App)
})

