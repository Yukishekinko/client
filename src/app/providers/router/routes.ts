export const routes = [
    {
        component: () => import("@/pages/static/landing"),
        name: 'landing',
        path: '',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/static/about-me"),
        name: 'aboutme',
        path: '/about',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/static/contact-me"),
        name: 'contactme',
        path: '/contact',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/photoset"),
        name: 'photosetpage',
        path: '/photoset/:id',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/photoset_create"),
        name: 'photosetpage new',
        path: '/photoset/new',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/portfolio"),
        name: 'portfolio',
        path: '/portfolio',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/portfolio-create"),
        name: 'portfolio new',
        path: '/portfolio/new',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/authentication/sign-in"),
        name: 'sign in / login',
        path: '/authentication/signin',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/authentication/sign-up"),
        namme: 'sign up / registration',
        path: '/authentication/signup',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/admin-panel"),
        name: 'admin panel',
        path: '/management',
        meta: {
            'requiresAdmin': false
        }
    },
    {
        component: () => import("@/pages/portfolio-private"),
        name: 'portfolios',
        path: '/portfolio/:id'
    },
    {
        component: () => import("@/pages/preset/create"),
        name: 'new preset',
        path: '/preset/new'
    },
    {
        component: () => import("@/pages/preset/watch"),
        name: 'watch presets',
        path: '/preset'
    }
]