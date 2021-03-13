import { lazy } from "react";
const Home = lazy(() => import("src/containers/HomePage"));
const Example = lazy(() => import("src/containers/ExamplePage"));
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
    isProtect: true,
    isPublic: false,
  },
  {
    url: "/example",
    components: Example,
    isExact: false,
    isProtect: false,
    isPublic: true,
  },
  // SET THIS IN BOTTOM FOR PAGE NOT FOUND
  {
    url: "/page-not-found",
    components: NotFound,
    isExact: true,
    isProtect: true,
    isPublic: true,
    isSystem: true,
  },
];

const router = [...appRoute];

export default router;
