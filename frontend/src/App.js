import NavBarAbout from "./Components/NavBars/NavBarAbout/NavBarAbout.js";

import { createBrowserRouter } from "react-router-dom";
import HomeBeforeLogin from "./Components/Body/HomeBeforeLogin.js";
import Register from "./Components/UserLogin&Register/Register.js";
import Login from "./Components/UserLogin&Register/Login.js";
function App() {
  return <></>;
}

export default App;
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomeBeforeLogin />
      </>
    ),
    children: [
      {
        path: "/",
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
]);
