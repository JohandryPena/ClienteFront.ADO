import { useEffect, useState } from "react";
import { IClient, User } from "../interfaces";
import { useForm } from "./useForm";
import {
  deleteClientesById,
  getClientesById,
  postClientes,
  putClientes,
} from "../services/user.services";
import { toast } from "sonner";
import { getBase64 } from "../helpers/getBase64";

export const useClient = ({
  type,
  selected,
  onClose,
  handleUpdate,
}: IClient) => {
  const { state, setState, onChange } = useForm(initState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormat = (data: User) => {
    return {
      ...data,
      persona: {
        ...data.persona,
        edad: parseInt(data.persona.edad as string),
        tipoIdentificacion: parseInt(data.persona.tipoIdentificacion as string),
        identificacion: parseInt(data.persona.identificacion as string),
      },
    };
  };

  const handleView = async () => {
    try {
      if (!selected) return;
      const response = await getClientesById(selected);
      if ("mensaje" in response) {
        setError(response.mensaje);
        toast.error(response.mensaje);
      } else {
        setState({ ...initState, ...response });
      }
    } catch (error) {
      toast.error("Error al obtener el cliente");
    }
  };

  const handleCrearUser = () => {
    const promise = async (): Promise<void> => {
      try {
        setLoading(true);
        setError("");
        const response = await postClientes(handleFormat(state));
        if ("mensaje" in response) {
          setError(response.mensaje);
          throw new Error(response.mensaje);
        } else {
          handleUpdate();
          handleClose();
        }
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    toast.promise(promise(), {
      loading: "Loading...",
      success: () => "Cliente creado exitosamente.",
      error: () => "Error al crear el cliente.",
    });
  };

  const handleUpdateUser = () => {
    const promise = async (): Promise<void> => {
      try {
        setLoading(true);
        setError("");
        if (!selected) throw new Error("No se ha seleccionado un cliente");
        await putClientes(selected, handleFormat(state));
        handleUpdate();
        handleClose();
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    toast.promise(promise(), {
      loading: "Loading...",
      success: () => "Cliente actualizado exitosamente.",
      error: () => "Error al actualizar el cliente.",
    });
  };

  const handleDeleteUser = () => {
    const promise = async (): Promise<void> => {
      try {
        setLoading(true);
        setError("");
        if (!selected) throw new Error("No se ha seleccionado un cliente");
        await deleteClientesById(selected);
        handleUpdate();
        handleClose();
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    toast.promise(promise(), {
      loading: "Loading...",
      success: () => "Cliente actualizado exitosamente.",
      error: () => "Error al actualizar el cliente.",
    });
  };

  const handleUser = () => {
    switch (type) {
      case "Crear":
        handleCrearUser();
        break;
      case "Actualizar":
        handleUpdateUser();
        break;
      case "Eliminar":
        handleDeleteUser();
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    onClose();
    setError("");
    setState(initState);
    setLoading(false);
  };

  const handleChangeFiles = async (files: FileList) => {
    if (files.length === 0) return;
    const base64 = await getBase64(files[0]);
    const image = base64 as string;
    onChange(image.split(",")[1] as string, "imagenBase64");
  };

  useEffect(() => {
    if (type !== "Crear") {
      handleView();
    }
  }, [selected, type]);

  return {
    state,
    error,
    loading,
    onChange,
    handleUser,
    handleClose,
    handleChangeFiles,
  };
};

const initState: User = {
  clienteId: undefined,
  persona: {
    nombre: "",
    genero: "",
    edad: "",
    tipoIdentificacion: "",
    identificacion: "",
    direccion: "",
    telefono: "",
  },
  imagenBase64: "",
  contraseña: "",
};
