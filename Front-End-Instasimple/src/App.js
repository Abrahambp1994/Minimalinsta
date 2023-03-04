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
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { SinglePost } from "./components/SinglePost/SinglePost";

function App() {
  const { user } = useContext(AuthContext);
  const [modal] = useModal();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<PublicFeed />} />
        <Route exact path="/filter" element={<FilterResults />} />
        <Route exact path="/users/:id" element={<UserProfile />} />
        <Route exact path="/post/:id" element={<SinglePost />} />
        {user ? (
          <Route exact path="/user" element={<MyProfile user={user} />} />
        ) : null}
      </Routes>
      <Footer />
      {modal && <Modal>{modal}</Modal>}
    </div>
  );
}

export default App;
