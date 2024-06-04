import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import TypeProjects from './pages/TypeProjects.vue';
import TechnologyProjects from './pages/TechnologyProjects.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/tecnologie-progetti/:slug',
      name: 'technologyProjects',
      component: TechnologyProjects
    },
    {
      path: '/tipo-progetti/:slug',
      name: 'typeProjects',
      component: TypeProjects
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    },
  ]
});

export { router };