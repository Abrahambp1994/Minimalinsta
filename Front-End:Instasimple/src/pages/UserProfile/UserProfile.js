import "./UserProfile.css";

import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import usePosts from "../../hooks/usePosts";

import { PostList } from "../../components/PostList/PostList";
import { HeaderPageTitle } from "../../components/HeaderPageTitle/HeaderPageTitle";

export const UserProfile = () => {
  const { id } = useParams();
  const { user, setPosts } = useUser(id);
  return (
    <section className="user-profile">
      <HeaderPageTitle pageTitle={user.name} />
      <PostList posts={user.posts} setPosts={setPosts} />
    </section>
  );
};
