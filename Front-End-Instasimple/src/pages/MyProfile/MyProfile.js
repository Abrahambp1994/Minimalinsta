import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getMyDataService } from "../../services";

import { PostList } from "../../components/PostList/PostList";
import { HeaderPageTitle } from "../../components/HeaderPageTitle/HeaderPageTitle";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const MyProfile = () => {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await getMyDataService(token);
        setPosts(data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [token]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="my-profile">
      <HeaderPageTitle pageTitle={"My profile"} />
      <PostList posts={posts} setPosts={setPosts} />
    </section>
  );
};
