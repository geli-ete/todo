import Vue from "vue";
import VueRouter from "vue-router";
import DigitalLibrary from "../views/DigitalLibrary.vue";
import BookAdd from "../views/BookAdd.vue";
import Todo from "../views/Todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Digital-Library",
    component: DigitalLibrary,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/digilib/addbook",
    component: BookAdd,
  },
  {
    path: "/todo",
    component: Todo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
