import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserDataService } from "../services";

export const useUser = (id) => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const setPosts = (posts) => {
    setUser({
      ...user,
      posts,
    });
  };

  useEffect(() => {
    const loadUser = async () => {
      const data = await getUserDataService(id, token);
      setUser(data);
    };

    loadUser();
  }, [id]);

  return { user, setPosts };
};
