import "./MyProfile.css";

import { PostList } from "../../components/PostList/PostList";
import { HeaderPageTitle } from "../../components/HeaderPageTitle/HeaderPageTitle";
import usePosts from "../../hooks/usePosts";

export const MyProfile = ({ user }) => {
  const { setPosts } = usePosts();
  return (
    <section className="my-profile">
      <HeaderPageTitle pageTitle={"My profile"} />
      <PostList posts={user.posts} setPosts={setPosts} />
    </section>
  );
};
