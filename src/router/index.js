
import { createRouter,createWebHistory } from "vue-router";
import routes from "@/router/routes";
 
const router = new createRouter({
    history:createWebHistory(),
    routes
})
 
export {
    router
}