import { Table } from "../../components/Table";
import { useTableClient } from "../../hooks/useTableClient";
import FooterTable from "../../components/FooterTable";
import ImgAvatar from "../../components/ImgAvatar";
import { ModalUser } from "../../components/ModalUser";
import "./../../assets/css/user.css";
import catalogs from "../../helpers/catalogs";

const User = () => {
  const {
    data,
    page,
    selected,
    typeModal,
    totalCount,
    isModalOpen,
    rowsPerPage,
    openModal,
    closeModal,
    handleUpdate,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTableClient();

  return (
    <section className="container">
      <div className="d-flex flex-row justify-content-between m-4">
        <h3>Tabla de Datos</h3>
        <button
          className="btn btn-primary"
          onClick={() => openModal("Crear", undefined)}
        >
          Crear Cliente
        </button>
      </div>
      <Table headers={headers}>
        {data.map((user, index) => (
          <tr key={index}>
            <td>
              <div className="table-tab-user">
                <ImgAvatar
                  src={user?.imagenBase64}
                  alt={user?.persona?.nombre}
                />
                <div className="info">
                  <span>{user?.persona?.nombre}</span>
                  <span>{user?.persona?.identificacion}</span>
                </div>
              </div>
            </td>
            <td>{user?.persona?.edad}</td>
            <td>
              {catalogs.typeGender.find(
                (gender) => gender.value === user?.persona?.genero
              )?.label || user?.persona?.genero}
            </td>
            <td>{user?.persona?.direccion}</td>
            <td className="table-tab-actions">
              <i onClick={() => openModal("Ver", user?.clienteId as number)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                </svg>
              </i>
              <i
                onClick={() =>
                  openModal("Actualizar", user?.clienteId as number)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 32 32"
                >
                  <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
                </svg>
              </i>
              <i
                onClick={() => openModal("Eliminar", user?.clienteId as number)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
                </svg>
              </i>
            </td>
          </tr>
        ))}
      </Table>
      <FooterTable
        page={page}
        total={totalCount}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />

      <ModalUser
        type={typeModal}
        isOpen={isModalOpen}
        selected={selected}
        onClose={closeModal}
        handleUpdate={handleUpdate}
      />
    </section>
  );
};

const headers = ["Nombre", "Edad", "Genero", "Dirección", "Acciones"];

export default User;
