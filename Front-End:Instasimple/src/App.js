import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useModal } from "./context/ModalContext";

import { Header } from "./components/Header/Header";
import { PublicFeed } from "./pages/PublicFeed/PublicFeed";
import { FilterResults } from "./pages/FilterResults/FilterResults";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
/**
 * Añadir Errors y loadings
 * Meter modo noche (opcional)
 */

function App() {
  const { user } = useContext(AuthContext);
  const [modal] = useModal();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PublicFeed />} />
        <Route path="/filter" element={<FilterResults />} />
        <Route path="/users/:id" element={<UserProfile />} />
        {user ? (
          <Route path="/user" element={<MyProfile user={user} />} />
        ) : null}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
      {modal && <Modal>{modal}</Modal>}
    </div>
  );
}

export default App;
