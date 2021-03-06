// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import echarts from 'echarts';
import VueRouter from 'vue-router';
import Velocity from 'velocity-animate';
import routes from '../../routers/resumeRouter.js';
import App from './App';
/* eslint-disable no-new */
window.echarts=echarts;
Vue.use(VueRouter);
let router = new VueRouter({
  routes
});
let vm = new Vue({
	el: '#app',
	router,
	data: {
		noLowIe: true,
	},
	template: '<App />',
	components: {
		App
	}
});