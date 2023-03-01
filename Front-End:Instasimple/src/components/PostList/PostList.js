import "./PostList.css";

import { Post } from "../Post/Post.js";

// PROBLEMA RARO: por alguna razón, si no pongo el condicional {posts && post.map etc} no me lee los posts en la page de UserProfile

export const PostList = ({ posts, setPosts }) => {
  return (
    <ul className="post-list">
      {posts &&
        posts.map((post) => {
          console.log(post);
          return (
            <li key={post.id}>
              <Post post={post} posts={posts} setPosts={setPosts} />
            </li>
          );
        })}
    </ul>
  );
};
