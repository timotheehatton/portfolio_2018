import Vue from 'vue';

import Router from 'vue-router';
import Home from '@/components/home/Home';
import Trilatte3d from '@/components/cases/trilatte3d/Trilatte3d';
import Doctobot from '@/components/cases/doctobot/Doctobot';
import Wisestone from '@/components/cases/wisestone/Wisestone';
import Bmw from '@/components/cases/bmwi8/Bmwi8';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/trilatte-3d',
      name: 'trilatte 3d',
      component: Trilatte3d,
    },
    {
      path: '/doctobot',
      name: 'Doctobot',
      component: Doctobot,
    },
    {
      path: '/wise-stone',
      name: 'Wise Stone',
      component: Wisestone,
    },
    {
      path: '/bmw-i8',
      name: 'BMW i8',
      component: Bmw,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
