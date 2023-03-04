import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllService } from "../services/index";

const usePosts = (searchResults) => {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getAllService(searchResults, token);
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [searchResults, token]);

  const addPost = (data) => {
    setPosts([data, ...posts]);
  };

  return { posts, setPosts, addPost, loading, error };
};

export default usePosts;
