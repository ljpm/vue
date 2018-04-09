// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Test from './components/Test';
import User from './components/User';
import Post from './components/Post';
import Err from './components/Error';


const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	{
		path: '/',
		component: User

	},
	{
		path: '/test',
		component: Test
	},
	{
		path: '/:id',
		component: Post
	},
	{
		path: '*',
		component: Err
	}
	]

});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app')
