import "./FilterResults.css";

import { useState } from "react";
import usePosts from "../../hooks/usePosts";

import { PostList } from "../../components/PostList/PostList";
import { FilterPostsForm } from "../../components/FilterPostsForm/FilterPostsForm";
import { Loading } from "../../components/Loading/Loading";

export const FilterResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { posts, setPosts, loading } = usePosts(searchResults);

  if (loading) return <Loading />;

  return (
    <section className="filter-results">
      <div className="filter-results-header">
        <FilterPostsForm setSearchResults={setSearchResults} />
      </div>
      <PostList posts={posts} setPosts={setPosts} />
    </section>
  );
};
