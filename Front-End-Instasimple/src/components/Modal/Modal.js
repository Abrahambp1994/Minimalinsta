import "./Modal.css";

import { useModal } from "../../context/ModalContext";

export const Modal = ({ children }) => {
  const [, setModal] = useModal();

  return (
    <div className="modal-window" onClick={() => setModal(null)}>
      <div className="modal-window-box" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
