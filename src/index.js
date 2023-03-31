import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js"
import MovieScreen from "./screens/MovieScreen.js";
import { parseRequestUrl } from "./utils.js";

// pour chaque url on lui associe un composant PageScreen qui sert à afficher la page correspondante.
const routes = {
    "/": HomeScreen,
    "/movie/:id": MovieScreen,
}
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : "/") + (request.id ? "/:id" : "") + (request.action ? `/${request.action}` : "");
    console.log(parseUrl)
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const root = document.getElementById("root");
    root.innerHTML = await screen.render();
    await screen.after_render();
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router)