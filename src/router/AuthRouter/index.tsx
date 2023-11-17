import { Route } from "react-router-dom";
import Login from "../../pages/Login";

export const AuthRouter = () => {
  return (
    <Route>
      <Route path="login" element={<Login />} />
    </Route>
  );
};
