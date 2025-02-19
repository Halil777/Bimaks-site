import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const Products = lazy(() => import("./products/Products"));
export const About = lazy(() => import("./about/About"));
