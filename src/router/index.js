import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ToolsPage from '@/components/ToolsPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import CalculPage from '@/components/CalculPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import NextPage from '@/components/NextPage.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path:'/tool',
			component: ToolsPage
		},
		{
			path:'/About',
			component: AboutPage
		},
		{
			path:'/calcul',
			component: CalculPage
		},
		{
			path:'/contact',
			component: ContactPage
		},
		{
			path:'/NextPage',
			name:'next',
			component: NextPage
		},

	],
})

export default router