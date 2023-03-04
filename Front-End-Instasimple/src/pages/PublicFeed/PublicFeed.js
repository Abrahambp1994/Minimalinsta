import usePosts from "../../hooks/usePosts";

import { PostList } from "../../components/PostList/PostList.js";
import { HeaderPageTitle } from "../../components/HeaderPageTitle/HeaderPageTitle";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const PublicFeed = () => {
  const { posts, setPosts, error, loading } = usePosts();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="public-feed">
      <HeaderPageTitle pageTitle={"Latest posts"} />
      <PostList posts={posts} setPosts={setPosts} />
    </section>
  );
};
