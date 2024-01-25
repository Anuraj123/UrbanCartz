
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/Body/HomePage.js";
import Register from "./Components/UserLogin&Register/Register.js";
import NavBarAbout from "./Components/NavBars/NavBarAbout/NavBarAbout.js";
import NavBarSearch from './Components/NavBars/NavBarSearch/NavBarSearch.js'

import { Outlet } from 'react-router-dom';
import Login from "./Components/UserLogin&Register/Login.js";
function App() {
  return <>
  <NavBarAbout/>
<NavBarSearch/>
<Outlet/>
  </>;
}

export default App;
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App/>
      </>
    ),
    children: [
      {
        path: "/",
        element:<HomePage/>
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },

]);
