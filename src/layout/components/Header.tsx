import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import "./../../assets/css/dropdown.css";
import { SessionContext } from "../../context/sessionContext";
import ImgAvatar from "../../components/ImgAvatar";

export const Header = () => {
  const userContext = useContext(UserContext);
  const sessionContext = useContext(SessionContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="container container-header-user">
        <h1 className="title">CRUD</h1>
        <div className="container-user">
          <ImgAvatar
            src={userContext?.user?.imagenBase64}
            alt={userContext?.user?.persona?.nombre}
          />
          <div
            className="container-user-info dropdown-container"
            onClick={handleToggle}
          >
            <span>{userContext?.user?.persona.nombre}</span>
            <span>{userContext?.user?.persona.identificacion}</span>
            {isOpen && (
              <ul className="dropdown-list">
                <li onClick={() => sessionContext?.logout()}>Cerrar Sesion</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
