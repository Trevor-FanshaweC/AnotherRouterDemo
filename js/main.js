// import your modules/components here
import LoginPage from "./modules/LoginPage.js";
import HomePage from "./modules/HomePage.js";
import ErrorPage from "./modules/ErrorPage.js";

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [ // vue will try to match the following routes
              // and render the appropriate component onto the page
        {   
            path: '/', // the location bar URL
            name: 'login', // the name of the route (for programmatic navigation)
            component: LoginPage // the component to render
        },

        {   
            path: '/home', // the location bar URL
            name: 'home', // the name of the route (for programmatic navigation)
            component: HomePage // the component to render
        },

        {   
            path: '/:pathMatch(.*)*', // the location bar URL
            name: 'error', // the name of the route (for programmatic navigation)
            component: ErrorPage // the component to render
        }


    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({
    methods: {
        tryRouterPush() {
            this.$router.push({ name: 'home'});
        }
    }
  })
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);  
  app.mount('#app');