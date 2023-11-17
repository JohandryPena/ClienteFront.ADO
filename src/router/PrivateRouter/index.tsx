import { Outlet, Route } from "react-router-dom";
import User from "../../pages/User";
import Layout from "../../layout/ui";
import { getClientes } from "../../services/user.services";

const ContentRouter = (
  <Layout>
    <Outlet />
  </Layout>
);

export const PrivateRouter = () => {
  return (
    <Route element={ContentRouter}>
      <Route
        path="user"
        element={<User />}
        loader={async ({ request }: { request: Request }) => {
          return await getClientes(request);
        }}
      />
    </Route>
  );
};
