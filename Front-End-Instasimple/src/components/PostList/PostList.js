import "./PostList.css";

import { useContext } from "react";
import { postLikeDislikeService } from "../../services";
import { AuthContext } from "../../context/AuthContext";

import { Post } from "../Post/Post.js";

export const PostList = ({ posts, setPosts }) => {
  const { token } = useContext(AuthContext);

  const handleLike = async (id) => {
    const vote = { token, id };
    const { liked } = await postLikeDislikeService(vote);
    const modifiedPosts = posts.map((currentPost) => {
      if (currentPost.id === id) {
        if (liked) {
          console.log(liked);
          currentPost.likes++;
          currentPost.userLikes = 1;
        } else {
          console.log(liked);
          currentPost.likes--;
          currentPost.userLikes = 0;
        }
      }
      return currentPost;
    });
    setPosts([...modifiedPosts]);
  };

  return (
    <ul className="post-list">
      {posts &&
        posts.map((post) => {
          return (
            <li key={post.id}>
              <Post post={post} handleLike={() => handleLike(post.id)} />
            </li>
          );
        })}
    </ul>
  );
};
