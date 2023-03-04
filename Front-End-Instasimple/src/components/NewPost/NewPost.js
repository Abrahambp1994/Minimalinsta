import "./NewPost.css";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import usePosts from "../../hooks/usePosts";
import { sendPostService } from "../../services";
import { useModal } from "../../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { PublicFeed } from "../../pages/PublicFeed/PublicFeed";

export const NewPost = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const { addPost } = usePosts();
  const [, setModal] = useModal();

  const handleForm = async (e) => {
    e.preventDefault();
    setModal(false);
    try {
      const data = new FormData(e.target);
      const post = await sendPostService({ data, token });
      addPost(post);
      e.target.reset();
      setImage(null);
      setModal(false);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="new-post">
      <h2>Add a post</h2>
      <form className="new-post-form" onSubmit={handleForm}>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Add a description..."
          rows="4"
          cols="50"
          required
        />
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              style={{ width: "100px" }}
              alt="Preview"
            />
          </figure>
        ) : null}
        <button>Send Post</button>
      </form>
    </section>
  );
};
