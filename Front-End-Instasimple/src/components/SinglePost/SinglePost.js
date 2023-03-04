import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  getSinglePostService,
  postLikeDislikeService,
} from "../../services/index";

import { Post } from "../Post/Post.js";
import { Loading } from "../Loading/Loading";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await getSinglePostService(token, id);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [token, id]);

  const handleLike = async () => {
    const id = post.id;
    const vote = { token, id };
    const { liked } = await postLikeDislikeService(vote);
    const currentPost = { ...post };
    if (liked) {
      currentPost.likes++;
      currentPost.userLikes = 1;
    } else {
      currentPost.likes--;
      currentPost.userLikes = 0;
    }
    setPost(currentPost);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="single-post">
      <Post post={post} handleLike={() => handleLike()} />
    </div>
  );
};
