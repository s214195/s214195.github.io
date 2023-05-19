import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged} from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: () => import ("../components/Main.vue")},
    {path: "/register", component: () => import ("../components/Register.vue")},
    {path: "/UserList", component: () => import ("../components/UserList.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {path: "/DoctorList", component: () => import ("../components/DoctorList.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {path: "/Map", component: () => import ("../components/Map.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {path: "/Camera", component: () => import ("../components/Camera.vue")},
    {path: "/SignIn", component: () => import ("../components/SignIn.vue")}
   
  ]
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) =>{
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/register");
    }
  } else {
    next();
  }
});

export default router;

