import "./Post.css";

import { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import usePosts from "../../hooks/usePosts";
import { useEffect } from "react";
import { IsLikeSvg } from "../../assets/svg/IsLikeSvg";
import { UnLikeSvg } from "../../assets/svg/UnLikeSvg";
import { postLikeDislikeService } from "../../services";

export const Post = ({ post, posts, setPosts }) => {
  // const { likePost } = usePosts();
  const { token, user } = useContext(AuthContext);
  const [like, setLike] = useState(false);

  // useEffect(() => {
  //   const storedLike = localStorage.getItem("liked");
  //   if (storedLike) {
  //     setLike(JSON.parse(storedLike));
  //   }
  // }, []);

  const handleLike = async () => {
    const postId = post.id;

    const likeLike = { token, postId };
    // Obtenemos "liked" para saber si hemos creado o eliminado el like.
    const { liked } = await postLikeDislikeService(likeLike);
    // Obtenemos un nuevo array con todos los post del array de "posts" modificando unicamente el
    // post sobre el cual hemos dado like (o eliminado el like).
    const modifiedPosts = posts.map((currentPost) => {
      // Si el id del post actual coincide con el post que queremos moficiar...
      if (currentPost.id === postId) {
        // Cambiamos el valor de la propiedad "likes".
        if (liked) {
          currentPost.likes++;
          currentPost.userLikes = 1;
        } else {
          currentPost.likes--;
          currentPost.userLikes = 0;
        }
      }
      // Retornamos el post actual.
      return currentPost;
    });
    // Modificamos el array de posts para que se repinte el componente automticamente.
    setPosts([...modifiedPosts]);

    //setLike(!like);
    //localStorage.setItem("liked", !liked);
  };

  return (
    <article className="post">
      <div className="post-header">
        <Link className="user-link" to={`/users/${post.userId}`}>
          {post.name}
        </Link>
        <p>{moment(post.creationDate).format("MMM d, YYYY")}</p>
      </div>
      <img
        src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
        alt={post.id}
      />
      <div className="post-footer">
        <div className="post-like">
          <p>{post.likes} Likes</p>
          {user ? (
            <div
              onClick={() => {
                handleLike();
              }}
            >
              {!post.userLikes ? (
                <div>
                  <UnLikeSvg />
                </div>
              ) : (
                <div>
                  <IsLikeSvg />
                </div>
              )}
            </div>
          ) : null}
        </div>
        <p className="post-description">{post.description}</p>
      </div>
    </article>
  );
};
