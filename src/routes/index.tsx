
import { createBrowserRouter } from "react-router-dom";

import { Home } from '../pages/home'
import { SignIn } from "../pages/sign-in";
import { CreateTask } from "../pages/tasks/create";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/tasks/create',
    element: <CreateTask />
  },
]);