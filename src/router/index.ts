import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isNextViewLoading } from '@/stores/loadingHandler'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/music',
    name: 'Music Taste(s)',
    component: () => import('../views/MusicTastesView.vue')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import('../views/RecipesView.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/projects/school',
    name: 'School Projects',
    component: () => import('../views/projects/SchoolProjects.vue')
  },
  {
    path: '/projects/school/htl4_photo',
    name: 'Photography Project - HTL 4',
    component: () => import('../views/projects/HTL/4/PhotoProject.vue')
  },
  {
    path: '/projects/school/htl4_3d',
    name: '3D Project - HTL 4',
    component: () => import('../views/projects/HTL/4/BlenderProject.vue')
  },
  {
    path: '/projects/school/htl4_video',
    name: 'Video Project - HTL 4',
    component: () => import('../views/projects/HTL/4/VideoProject.vue')
  },
  {
    path: '/projects/school/htl4_audio-soundtrap',
    name: 'Audio: Soundtrap - HTL 4',
    component: () => import('../views/projects/HTL/4/AudioSoundtrapProject.vue')
  },
  {
    path: '/projects/school/htl4_audio-synchro',
    name: 'Audio: Syncing - HTL 4',
    component: () => import('../views/projects/HTL/4/AudioSynchroProject.vue')
  },
  {
    path: '/projects/school/htl4_design',
    name: 'Design - HTL 4',
    component: () => import('../views/projects/HTL/4/MEDTDesigns.vue')
  },
  {
    path: '/projects/school/htl5_3d',
    name: '3D Project - HTL 5',
    component: () => import('../views/projects/HTL/5/BlenderProject.vue')
  },
  {
    path: '/projects/school/htl5_pwa',
    name: 'Web Tech PWA Project - HTL 5',
    component: () => import('../views/projects/HTL/5/PWAProject.vue')
  },
  {
    path: '/projects/school/htl5_audio',
    name: 'Audio Project - HTL 5',
    component: () => import('../views/projects/HTL/5/AudioProject.vue')
  },
  {
    path: '/projects/school/htl5_video',
    name: 'Video Project - HTL 5',
    component: () => import('../views/projects/HTL/5/VideoProject.vue')
  },
  {
    path: '/projects/personal',
    name: 'Personal Projects',
    component: () => import('../views/projects/PersonalProjects.vue')
  },
  {
    path: '/projects/personal/soundtrap',
    name: 'Music: Soundtrap',
    component: () => import('../views/projects/Personal/MusicSoundtrap.vue')
  },
  {
    path: '/projects/personal/graphic-design_icons',
    name: 'Graphic Design: Icons',
    component: () => import('../views/projects/Personal/GraphicDesignIcons.vue')
  },
  {
    path: '/projects/personal/graphic-design_oc',
    name: 'Graphic Design: Original Creations',
    component: () => import('../views/projects/Personal/GraphicDesignOCs.vue')
  },
  {
    path: '/projects/personal/graphic-design_recreations',
    name: 'Graphic Design: Recreations',
    component: () => import('../views/projects/Personal/GraphicDesignRecreations.vue')
  },
  {
    path: '/projects/personal/github_eu-linux-locale',
    name: 'EU English Linux Locale',
    component: () => import('../views/projects/Personal/GitHubLinuxLocaleENEU.vue')
  },
  {
    path: '/connections',
    name: 'Connections',
    component: () => import('../views/ConnectionsView.vue')
  },
  {
    path: '/credits',
    name: 'Credits',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CreditsView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (!to.query.scrollTo) {
      return { left: 0, top: 0 }
    }
    return false
  }
})

router.beforeEach((to, from, next) => {
  isNextViewLoading.value = true
  document.title = `${String(to.name)} | Talon's Homepage`
  if (to.path === '/') document.title = "Talon's Homepage"
  next()
})

router.afterEach(() => {
  isNextViewLoading.value = false
})

router.onError(() => {
  isNextViewLoading.value = false
})

export default router
