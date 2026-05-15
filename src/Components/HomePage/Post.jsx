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
          <BsThreeDots style={{ cursor: "pointer" }} />
        </div>

        {post.type === "image" ? (
          <img src={post.content} className="post-img" alt={post.caption} />
        ) : (
          <video controls className="post-video">
            <source src={post.content} type="video/mp4" />
          </video>
        )}

        <div className="icon-section">
          <div className="left-icons">
            {/* Bug fix: like icon + correct class name */}
            <div className="icon-with-text">
              {post.liked ? (
                <FaHeart
                  style={{ color: "red", cursor: "pointer", fontSize: "22px" }}
                  onClick={() => dispatch(toggleLike(post.id))}
                />
              ) : (
                <FaRegHeart
                  style={{ cursor: "pointer", fontSize: "22px" }}
                  onClick={() => dispatch(toggleLike(post.id))}
                />
              )}
              {/* Bug fix: was className="like", should be "like-count" */}
              <span className="like-count">{post.likes}</span>
            </div>

            {/* Comment */}
            <div className="icon-with-text">
              <FaRegComment
                style={{ cursor: "pointer", fontSize: "22px" }}
                onClick={() => setShowComments(true)}
              />
              {/* Bug fix: only show count if > 0 */}
              {commentCount > 0 && (
                <span className="like-count">{commentCount}</span>
              )}
            </div>

            <FiSend style={{ fontSize: "22px", cursor: "pointer" }} />
          </div>

          {/* Save */}
          {post.saved ? (
            <FaBookmark
              style={{ cursor: "pointer", fontSize: "22px" }}
              onClick={() => dispatch(toggleSave(post.id))}
            />
          ) : (
            <FaRegBookmark
              style={{ cursor: "pointer", fontSize: "22px" }}
              onClick={() => dispatch(toggleSave(post.id))}
            />
          )}
        </div>

        <p className="caption">
          <strong>{post.username}</strong> {post.caption}
        </p>
      </div>

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