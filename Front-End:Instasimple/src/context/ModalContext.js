import { createContext, useContext, useState } from 'react';

// Creamos el contexto.
const ModalContext = createContext(null);

// Creamos un componente que rodeará al resto de componentes de nuestra app.
const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);

    return (
        <ModalContext.Provider value={[modal, setModal]}>
            {children}
        </ModalContext.Provider>
    );
};

// Hook para utilizar el contexto.
const useModal = () => {
    return useContext(ModalContext);
};

// Exportamos el provider y el modal.
export { ModalProvider, useModal };