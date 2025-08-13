import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // index("routes/home.tsx"),
  index("routes/index.tsx"),
  route("register", "routes/auth/register.tsx"),
  route("login", "routes/auth/login.tsx"),
  route("faq", "routes/faq.tsx"),
  route("products", "routes/products.tsx"),
] satisfies RouteConfig;

//dadakdhalwpad
