import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

import { PostList } from "../../components/PostList/PostList";
import { HeaderPageTitle } from "../../components/HeaderPageTitle/HeaderPageTitle";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const UserProfile = () => {
  const { id } = useParams();
  const { user, setPosts, loading, error } = useUser(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="user-profile">
      <HeaderPageTitle pageTitle={user.name} />
      <PostList posts={user.posts} setPosts={setPosts} />
    </section>
  );
};
