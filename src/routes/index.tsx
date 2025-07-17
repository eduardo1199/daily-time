
import { createBrowserRouter } from "react-router-dom";

import { Home } from '../pages/home'
import { SignIn } from "../pages/sign-in";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
]);