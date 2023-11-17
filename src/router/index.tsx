import { useContext } from "react";
import {
  Route,
  Navigate,
  // Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { PrivateRouter } from "./PrivateRouter";
import { SessionContext } from "../context/sessionContext";

const Router = () => {
  const session = useContext(SessionContext);

  const AuthRoutering = AuthRouter();
  const PrivateRoutering = PrivateRouter();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="auth" children={AuthRoutering} />

        {session?.session && <Route path="dash" children={PrivateRoutering} />}

        <Route path="/*" element={<Navigate replace to={"/auth/login"} />} />
        <Route path="/" element={<Navigate replace to={"/auth/login"} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
