import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleLike, toggleSave } from "../../features/posts/postsSlice";
import CommentModal from "../Comment/CommentModal";

import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import "./HomePage.css";

function Post({ post }) {
  const dispatch = useDispatch();

  // ⭐ Comment modal state
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  return (
    <>
      <div className="post">
        <div className="post-header">
          <div className="post-user">
            <div className="story-border">
              <img src={post.profile} alt={post.username} />
            </div>

            <div>
              <span>{post.username}</span>
              <p>{post.time}</p>
            </div>
          </div>

          <BsThreeDots />
        </div>

        {post.type === "image" ? (
          <img src={post.content} className="post-img" alt="" />
        ) : (
          <video controls className="post-video">
            <source src={post.content} type="video/mp4" />
          </video>
        )}

        <div className="icon-section">
          <div className="left-icons">
            {post.liked ? (
              <FaHeart
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => dispatch(toggleLike(post.id))}
              />
            ) : (
              <FaRegHeart
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(toggleLike(post.id))}
              />
            )}

            <p className="like">{post.likes}</p>

            {/* ⭐ Comment icon click */}
            <FaRegComment
              style={{ cursor: "pointer" }}
              onClick={() => setShowComments(true)}
            />

            <p className="comment-count">{commentCount}</p>

            <FiSend />
          </div>

          {post.saved ? (
            <FaBookmark
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(toggleSave(post.id))}
            />
          ) : (
            <FaRegBookmark
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(toggleSave(post.id))}
            />
          )}
        </div>

        <p className="caption">
          <strong>{post.username}</strong> {post.caption}
        </p>
      </div>

      {/* ⭐ Comment Modal render */}
      {showComments && (
        <CommentModal
          post={post}
          closeModal={() => setShowComments(false)}
          setCommentCount={setCommentCount}
        />
      )}
    </>
  );
}

export default Post;
