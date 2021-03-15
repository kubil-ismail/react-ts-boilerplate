import { lazy } from "react";
const Home = lazy(() => import("src/containers/HomePage"));
const Home2 = lazy(() => import("src/containers/HomePage2"));
const Home3 = lazy(() => import("src/containers/HomePage3"));
const NotFound = lazy(() => import("src/containers/NotFoundPage"));

/*
------------------------------------------------
REACT ROUTER RULE REGISTER
------------------------------------------------
{
  url: "/", //Main path of page
  components: Example, //Page components
  isExact: true, // Set exact page
  isProtect: true, // Login required
  isPublic: false, //Display only if not under login
}
*/

const appRoute = [
  {
    url: "/",
    components: Home,
    isExact: true,
    isProtect: false,
    isPublic: true,
  },
  {
    url: "/favorites",
    components: Home2,
    isExact: true,
    isProtect: false,
    isPublic: true,
  },
  {
    url: "/nearby",
    components: Home3,
    isExact: true,
    isProtect: false,
    isPublic: true,
  },
  {
    url: "/page-not-found",
    components: NotFound,
    isExact: true,
    isProtect: false,
    isPublic: false,
    isSystem: true,
  },
];

const router = [...appRoute];

export default router;
