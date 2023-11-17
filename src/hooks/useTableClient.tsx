import { useLoaderData } from "react-router-dom";
import { IGetPagination } from "../interfaces";
import { usePagination } from "./usePagination";
import { useState } from "react";

export const useTableClient = () => {
  const loaderData = useLoaderData() as IGetPagination;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<number>();
  const [typeModal, setTypeModal] = useState(
    "" as "Crear" | "Actualizar" | "Eliminar" | "Ver"
  );
  const openModal = (
    type: "Crear" | "Actualizar" | "Eliminar" | "Ver",
    id: number | undefined
  ) => {
    setIsModalOpen(true);
    setTypeModal(type);
    setSelected(id);
  };
  const closeModal = () => setIsModalOpen(false);

  const {
    page,
    lastUpdate,
    rowsPerPage,
    searchParams,
    handleUpdate,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination();

  return {
    data: loaderData?.regsitros || [],
    page,
    selected,
    typeModal,
    totalCount: loaderData?.totalRegistros || 0,
    lastUpdate,
    isModalOpen,
    rowsPerPage,
    searchParams,
    openModal,
    closeModal,
    handleUpdate,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
