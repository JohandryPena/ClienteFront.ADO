import { useContext, useState } from "react";
import { getClienteLoagueado, postSignup } from "../services/auth.services";
import { useForm } from "./useForm";
import { toast } from "sonner";
import { SessionContext } from "../context/sessionContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useLogin = () => {
  const { user, password, onChange } = useForm({
    user: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const session = useContext(SessionContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "" || password === "")
      return toast.error("Todos los campos son obligatorios");
    const promise = async (): Promise<void> => {
      try {
        setLoading(true);
        const { token } = await postSignup({
          persona: {
            identificacion: user,
          },
          contraseña: password,
        });
        const data = await getClienteLoagueado(token);
        session?.handleSession({ token });
        userContext?.handleUser(data);
        navigate("/dash/user?pagina=1&noRegistro=10");
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    toast.promise(promise(), {
      loading: "Loading...",
      success: () => "Inicio de sesión exitoso.",
      error: () => "Datos Invalidos.",
    });
  };

  return {
    user,
    loading,
    password,
    onChange,
    handleLogin,
  };
};
