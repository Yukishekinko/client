export const routes = [
    {
        component: () => import("@/pages/landing"),
        name: 'landing',
        path: '',
    },
    {
        component: () => import("@/pages/about-me"),
        name: 'aboutme',
        path: '/about'
    },
    {
        component: () => import("@/pages/contact-me"),
        name: 'contactme',
        path: '/contact'
    },
    {
        component: () => import("@/pages/photoset_protected"),
        name: 'photosetpage',
        path: '/photoset/:id'
    },
    {
        component: () => import("@/pages/photoset_create"),
        name: 'photosetpage',
        path: '/photoset/new'
    },
    {
        component: () => import("@/pages/portfolio"),
        name: 'portfolio',
        path: '/portfolio'
    },
    {
        component: () => import("@/pages/portfolio-create"),
        name: 'portfolio new',
        path: '/portfolio/new'
    },
    {
        component: () => import("@/pages/authentication/sign-in"),
        name: 'sign in / login',
        path: '/authentication/signin'
    },
    {
        component: () => import("@/pages/authentication/sign-up"),
        namme: 'sign up / registration',
        path: '/authentication/signup',
    },
    {
        component: () => import("@/pages/admin-panel"),
        name: 'admin panel',
        path: '/management'
    }
]