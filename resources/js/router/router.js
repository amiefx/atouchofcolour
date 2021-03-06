import Vue from 'vue'
import VueRouter from 'vue-router'

  import auth from './middleware/auth'
  import admin from './middleware/admin'
  import guest from './middleware/guest'
 import middlewarePipeline from './kernel/middlewarePipeline'

import store from '../store'



Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackPreload: true */ '../views/Home.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    { path: '/home', redirect: '/' },
    {
        path: '/painting-decorating',
        name: 'painting',
        component: () => import(/* webpackPreload: true */ '../views/Painting.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    { path: '/our-services', redirect: '/painting-decorating' },
    {
        path: '/interior-design',
        name: 'Interior',
        component: () => import(/* webpackPreload: true */ '../views/Interior.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/property-maintenance',
        name: 'property-maintenance',
        component: () => import(/* webpackPreload: true */ '../views/Maintenance.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/cleaning-services',
        name: 'cleaning-services',
        component: () => import(/* webpackPreload: true */ '../views/Cleaning.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import(/* webpackPreload: true */ '../views/Reviews.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import(/* webpackPreload: true */ '../views/About.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: () => import(/* webpackPreload: true */ '../views/Feedback.vue'),
        meta: {
            layout: 'mardom'
        }
    },

    // admin section
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/Dashboard.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/about',
        name: 'about',
        component: () => import('../views/admin/About.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/delivery',
        name: 'delivery',
        component: () => import('../views/admin/Delivery.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/faqs',
        name: 'faqs',
        component: () => import('../views/admin/Faqs.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/privacy',
        name: 'privacy',
        component: () => import('../views/admin/Privacy.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/order-return',
        name: 'order-return',
        component: () => import('../views/admin/Order-return.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/slides',
        name: 'slides',
        component: () => import('../views/admin/Slides.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/ratings',
        name: 'ratings',
        component: () => import('../views/admin/Ratings.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/notify',
        name: 'notify',
        component: () => import('../views/admin/notify.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/attribute-sets',
        name: 'attribute-sets',
        component: () => import('../views/admin/Attribute-sets.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/attributes',
        name: 'attributes',
        component: () => import('../views/admin/Attributes.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/categories',
        name: 'categories',
        component: () => import('../views/admin/Categories.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/coupons',
        name: 'coupons',
        component: () => import('../views/admin/Coupons.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/roles',
        name: 'roles',
        component: () => import('../views/admin/Roles.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/shipping',
        name: 'shipping',
        component: () => import('../views/admin/Shipping.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/social',
        name: 'social',
        component: () => import('../views/admin/Social.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/users',
        name: 'users',
        component: () => import('../views/admin/Users.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/products',
        name: 'admin-products',
        component: () => import('../views/admin/products/Index.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/products/:slug',
        name: 'admin-products-edit',
        component: () => import('../views/admin/products/Slug.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/orders',
        name: 'admin-orders',
        component: () => import('../views/admin/orders/Index.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/orders/:id',
        name: 'admin-order',
        component: () => import('../views/admin/orders/Id.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/orders/print/:id',
        name: 'admin-order',
        component: () => import('../views/admin/orders/print/Id.vue'),
        meta: {
            layout: '',
            middleware: [
                auth, admin
            ]
        }
    },
    {
        path: '/admin/reports',
        name: 'admin-reports',
        component: () => import('../views/admin/Reports.vue'),
        meta: {
            layout: 'admin',
            middleware: [
                auth, admin
            ]
        }
    },


    // Other Pages
    {
        path: '/about',
        name: 'about-us',
        component: () => import('../views/pages/About.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/contact',
        name: 'contact-us',
        component: () => import('../views/pages/Contact.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/delivery',
        name: 'deliveries',
        component: () => import('../views/pages/Delivery.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/faqs',
        name: 'faqss',
        component: () => import('../views/pages/Faqs.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/order-return',
        name: 'order-returns',
        component: () => import('../views/pages/Order-returns.vue'),
        meta: {
            layout: 'mardom'
        }
    },
    {
        path: '/privacy-plicy',
        name: 'privacy-plicy',
        component: () => import('../views/pages/Privacy.vue'),
        meta: {
            layout: 'mardom'
        }
    },

    // Accounts pages
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/account/Index.vue'),
        meta: {
            layout: 'khod',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/account/orders',
        name: 'my-orders',
        component: () => import('../views/account/Orders.vue'),
        meta: {
            layout: 'khod',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/account/reviews',
        name: 'my-reviews',
        component: () => import('../views/account/reviews.vue'),
        meta: {
            layout: 'khod',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/account/wishlist',
        name: 'my-wishlist',
        component: () => import('../views/account/wishlist.vue'),
        meta: {
            layout: 'khod',
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/account/order/:id',
        name: 'my-sing-order',
        component: () => import('../views/account/order/id.vue'),
        meta: {
            layout: 'khod',
            middleware: [
                auth
            ]
        }
    },

    // Auth and register
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/auth/SignIn.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/register.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../views/auth/forgot-password.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/password-reset',
        name: 'password-reset',
        component: () => import('../views/auth/password-reset.vue'),
        meta: {
            layout: 'mardom',
            middleware: [
                guest
            ]
        }
    },

    {
        path: '/404',
        component: () => import('../views/Error.vue'),
    },
    { path: '*', redirect: '/404' },

  ]

  const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
  })

//   router.beforeEach((to, from, next) => {
//       const token = localStorage.getItem('token') || null
//         window.axios.defaults.headers['Authorization'] = 'Bearer ' + token;
//         next();
//     })


// Method 1: Defining middleware in routes
router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
      return next()
    }

    const middleware = to.meta.middleware

    const context = {
      to,
      from,
      next,
      router,
      store
    }

    return middleware[0]({
      ...context, next: middlewarePipeline(context, middleware, 1)
    })
  })


export default router
