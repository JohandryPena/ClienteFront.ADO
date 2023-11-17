import catalogs from "../../helpers/catalogs";
import { useClient } from "../../hooks/useClient";
import { IModalUser } from "../../interfaces";
import Modal from "../Modal";
import SelectField from "../SelectField";
import TextFieldV1 from "../TextField";
import TextFieldPassword from "../TextFieldPassword";
import "./../../assets/css/modalUser.css";

export const ModalUser = ({
  type,
  isOpen,
  selected,
  onClose,
  handleUpdate,
}: IModalUser) => {
  const { state, error, onChange, handleClose, handleUser, handleChangeFiles } =
    useClient({
      type,
      selected,
      onClose,
      handleUpdate,
    });
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="card-body">
        <h5 className="card-title">{type} Cliente</h5>
        <div className="row">
          <div className="col-12 container-style-rounded">
            <div className="style-rounded d-flex justify-content-center align-items-center">
              <label
                className={`label-choose-file-floating ${
                  state.imagenBase64 && "uploaded"
                }`}
                htmlFor="files"
              >
                <div>
                  <div className="d-flex justify-content-center">
                    <svg
                      className={`${
                        state.imagenBase64 ? "fill-blue" : "fill-white"
                      }`}
                      width="50"
                      height="40"
                      viewBox="0 0 50 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M49.8848 11.7286C49.8848 9.08579 47.7439 6.94494 45.1012 6.94494H35.5339L35.0935 5.03969C34.4072 2.08963 31.7746 0 28.7426 0H21.1524C18.1204 0 15.4878 2.08963 14.8015 5.03969L14.3508 6.94494H4.78361C2.14085 6.94494 0 9.08579 0 11.7286V24.2561V34.8988C0 37.7158 2.28425 40 5.10115 40H44.7836C47.6005 40 49.8848 37.7158 49.8848 34.8988V24.2663V11.7286ZM24.9424 30.146C28.5992 30.146 31.5595 27.1857 31.5595 23.5288C31.5595 19.872 28.5992 16.9117 24.9424 16.9117C21.2855 16.9117 18.3252 19.872 18.3252 23.5288C18.3252 27.1857 21.2855 30.146 24.9424 30.146ZM9.97695 13.8489C9.97695 12.5275 8.90141 11.452 7.58003 11.452C6.2484 11.452 5.17286 12.5275 5.17286 13.8489C5.17286 15.1703 6.2484 16.2458 7.56978 16.2458C8.90141 16.2561 9.97695 15.1805 9.97695 13.8489ZM24.9424 11.7286C31.4571 11.7286 36.7426 17.0141 36.7426 23.5288C36.7426 30.0435 31.4571 35.3291 24.9424 35.3291C18.4277 35.3291 13.1421 30.0435 13.1421 23.5288C13.1421 17.0141 18.4277 11.7286 24.9424 11.7286Z"
                      />
                    </svg>
                  </div>
                  <span
                    className={`fw-semibold lh-lg ${
                      state.imagenBase64 && "text-white"
                    }`}
                  >
                    Subir Foto
                  </span>
                </div>
              </label>

              <input
                id="files"
                className="choose-file-floating"
                type="file"
                accept="image/png , image/jpeg, image/webp"
                onChange={(e) => handleChangeFiles(e.target.files as FileList)}
              />
              {state.imagenBase64 && (
                <img
                  className="image-style-rounded"
                  width="150"
                  height="150"
                  src={`data:image/jpeg;base64,${state.imagenBase64}`}
                />
              )}
            </div>
          </div>
          <div className="col-12 mt-2">
            <TextFieldV1
              label="Nombre"
              type="text"
              name="persona.nombre"
              placeholder="Ingrese su nombre"
              value={state.persona.nombre}
              onChange={onChange}
              readOnly={type === "Ver" || type === "Eliminar"}
            />
          </div>
          <SelectField
            label="Genero"
            name="persona.genero"
            className="col-6 mt-2"
            placeholder="Ingrese su Genero"
            value={state.persona.genero}
            options={catalogs.typeGender}
            onChange={onChange}
            readOnly={type === "Ver" || type === "Eliminar"}
          />
          <div className="col-6 mt-2">
            <TextFieldV1
              label="Edad"
              type="number"
              name="persona.edad"
              placeholder="Ingrese su edad"
              value={state.persona.edad as string}
              onChange={onChange}
              readOnly={type === "Ver" || type === "Eliminar"}
            />
          </div>
          <SelectField
            label="Tipo de Documento"
            name="persona.tipoIdentificacion"
            className="col-6  mt-2"
            placeholder="Tipo de Documento"
            value={state.persona.tipoIdentificacion as string}
            options={catalogs.typeDocument}
            onChange={onChange}
            readOnly={type === "Ver" || type === "Eliminar"}
          />
          <div className="col-6 mt-2">
            <TextFieldV1
              label="Numero de Documento"
              type="number"
              name="persona.identificacion"
              placeholder="Ingrese numero de documento"
              value={state.persona.identificacion as string}
              onChange={onChange}
              readOnly={type === "Ver" || type === "Eliminar"}
            />
          </div>
          <div className="col-6 mt-2">
            <TextFieldV1
              label="Direccion"
              type="text"
              name="persona.direccion"
              placeholder="Ingrese su direccion"
              value={state.persona.direccion}
              onChange={onChange}
              readOnly={type === "Ver" || type === "Eliminar"}
            />
          </div>
          <div className="col-6 mt-2">
            <TextFieldV1
              label="Telefono"
              type="number"
              name="persona.telefono"
              placeholder="Ingrese su numero de telefono"
              value={state.persona.telefono}
              onChange={onChange}
              readOnly={type === "Ver" || type === "Eliminar"}
            />
          </div>
          <div className="col-12 mt-2">
            <TextFieldPassword
              label="Contraseña"
              name="contraseña"
              placeholder="Ingrese su contraseña"
              value={state.contraseña}
              onChange={onChange}
              readOnly={type === "Ver" || type === "Eliminar"}
            />
          </div>
        </div>
        {error && <p className="card-text text-danger mt-4">{error}</p>}
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-light" onClick={handleClose}>
            Cerrar
          </button>
          {type !== "Ver" && (
            <button className="btn btn-primary" onClick={handleUser}>
              {type}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
