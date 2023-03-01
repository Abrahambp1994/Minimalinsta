import "./PublicFeed.css";

import usePosts from "../../hooks/usePosts";

import { PostList } from "../../components/PostList/PostList.js";
import { HeaderPageTitle } from "../../components/HeaderPageTitle/HeaderPageTitle";

export const PublicFeed = () => {
  const { posts, setPosts } = usePosts();
  return (
    <section className="public-feed">
      <HeaderPageTitle pageTitle={"Latest posts"} />
      <PostList posts={posts} setPosts={setPosts} />
    </section>
  );
};
