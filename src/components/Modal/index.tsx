import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root");
  const modalContainer = document.createElement("div");

  useEffect(() => {
    if (modalRoot && modalContainer) {
      modalRoot.appendChild(modalContainer);

      // Cleanup function
      return () => {
        modalRoot.removeChild(modalContainer);
      };
    }
  }, [modalContainer, modalRoot]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
