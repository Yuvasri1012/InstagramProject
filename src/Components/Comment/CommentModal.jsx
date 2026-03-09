import { useState } from "react";
import "./CommentModal.css";

function CommentModal({ post, closeModal, setCommentCount }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Add comment
  const handleComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      username: "you",
      text: comment,
      liked: false,
    };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);

    // ⭐ Post component க்கு count update
    setCommentCount(updatedComments.length);

    setComment("");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <p className="close-btn" onClick={closeModal}>
          X
        </p>

        <div className="modal-left">
          <img src={post.content} alt="" />
        </div>

        <div className="modal-right">
          {/* ⭐ Comment List */}
          <div className="comment-section">
            {/* Post caption */}
            <div className="comment caption-comment">
              <span className="caption-text">
                <strong>{post.username}</strong> {post.caption}
              </span>
            </div>

            {/* User comments */}
            {comments.map((c) => (
              <div key={c.id} className="comment">
                <span>
                  <strong>{c.username} : </strong> {c.text}
                </span>
              </div>
            ))}
          </div>

          {/* ⭐ Comment Input */}
          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button onClick={handleComment}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
