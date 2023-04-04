import "./Post.css";

import { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { IsLikeSvg } from "../../assets/svg/IsLikeSvg";
import { UnLikeSvg } from "../../assets/svg/UnLikeSvg";

export const Post = ({ post, handleLike }) => {
  const { user } = useContext(AuthContext);
  return (
    <article className="post">
      <div className="post-header">
        <Link className="user-link" to={`/users/${post.userId}`}>
          {post.name}
        </Link>
        <p>{moment(post.creationDate).format("LL")}</p>
      </div>
      <Link id="post-img-link" to={`/post/${post.id}`}>
        <img
          id="post-img"
          src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
          alt={post.id}
        />
      </Link>
      <div className="post-footer">
        <div className="post-like">
          <p>{post.likes} Likes</p>
          {user ? (
            <div
              onClick={() => {
                handleLike();
              }}
            >
              {!post.userLikes ? (
                <div>
                  <UnLikeSvg />
                </div>
              ) : (
                <div>
                  <IsLikeSvg />
                </div>
              )}
            </div>
          ) : null}
        </div>
        <p className="post-description">{post.description}</p>
      </div>
    </article>
  );
};
