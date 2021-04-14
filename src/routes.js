import Home from "./pages/Home.svelte";
import Experience from "./pages/Experience.svelte";
import Project from "./pages/Project.svelte";
import NotFound from "./pages/NotFound.svelte";

export default {
    "/": Home,
    "/experience/:id": Experience,
    "/project/:id": Project,


    // The catch-all route must always be last
    "*": NotFound
};
