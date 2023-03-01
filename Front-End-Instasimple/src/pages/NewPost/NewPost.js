import "./NewPost.css";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import usePosts from "../../hooks/usePosts";
import { sendPostService } from "../../services";

export const NewPost = () => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const { addPost } = usePosts();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      const post = await sendPostService({ data, token });
      addPost(post);
      e.target.reset();
      setImage(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="section-form">
      <div className="header-form">
        <h1>Create post</h1>
      </div>

      <form className="modal-form" onSubmit={handleForm}>
        <textarea
          name="description"
          rows="4"
          cols="50"
          id="description"
          placeholder="Add a description..."
        />

        <input
          type="file"
          name="image"
          placeholder="Image"
          id="image-file"
          accept={"image/*"}
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        {image ? (
          <figure>
            <img src={URL.createObjectURL(image)} alt="Preview" />
          </figure>
        ) : null}

        <button>Send Post</button>
      </form>
    </section>
  );
};
