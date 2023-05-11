import Home from "../pages/Home";
import Cart from "../pages/Cart"
import Catelog from "../pages/Catalog";
import Product from "../pages/Product";

const publicRouters = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catelog },
    { path: '/catalog/:slug', component: Product },
];

const privateRouters = [];

export { publicRouters, privateRouters };
