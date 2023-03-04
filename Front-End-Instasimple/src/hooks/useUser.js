import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserDataService } from "../services";

export const useUser = (id) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const setPosts = (posts) => {
    setUser({
      ...user,
      posts,
    });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getUserDataService(id, token);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id, token]);

  return { user, setPosts, error, loading };
};
