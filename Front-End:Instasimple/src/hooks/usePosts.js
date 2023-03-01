import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllService, postLikeDislikeService } from "../services/index";

const usePosts = (searchResults) => {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getAllService(searchResults, token);

      setPosts(data);
    };
    loadPosts();
  }, [searchResults]);

  const addPost = (data) => {
    setPosts([data, ...posts]);
  };

  const likePost = async (likeLike) => {
    return await postLikeDislikeService(likeLike);
  };

  return { posts, setPosts, addPost, likePost };
};

export default usePosts;
