import React, { PropsWithChildren } from "react";

import routesJson from "./routes.json";

const routes = routesJson as { [key: string]: string };

const MainPage = React.lazy(
  () => import(/* webpackChunkName: "main-page" */ "../pages/MainPage")
);

export type RouteType = {
  children: JSX.Element | PropsWithChildren<React.ReactNode>;
  strict?: boolean;
  path: string;
  routes?: { [index: string]: RouteType };
};

const Router: { [index: string]: RouteType } = {
  main: {
    children: <MainPage />,
    path: routes.main,
    strict: true,
  },
};

export default Router;
