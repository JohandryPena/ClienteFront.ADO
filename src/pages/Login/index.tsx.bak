import { Link } from "react-router-dom";
import TextFieldV1 from "../../components/TextField";
import { useLogin } from "../../hooks/useLogin";
import TextFieldPassword from "../../components/TextFieldPassword";

const Login = () => {
  const { user, password, onChange, handleLogin } = useLogin();

  return (
    <section className="container-login">
      <div className="container">
        <div className="row justify-content-sm-center h-100">
          <div
            className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9"
            style={{ width: "100%" }}
          >
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Iniciar Sesion</h1>
                <div className="row">
                  <div className="col-18 ">
                    <TextFieldV1
                      label="Usuario"
                      type="text"
                      name="user"
                      placeholder="Usuario"
                      value={user}
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-12 mt-2">
                    <TextFieldPassword
                      label="Contraseña"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-12">
                    <Link to="/auth/forgot" className="float-end">
                      Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <div className="col-12 mt-2">
                    <div className=" mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary ms-auto float-end"
                        onClick={handleLogin}
                      >
                        Iniciar Sesion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  ¿No tiene una cuenta?{" "}
                  <Link to="/auth/register">Create una</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
