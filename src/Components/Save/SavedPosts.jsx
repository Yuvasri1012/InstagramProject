import React from "react";
import { useSelector } from "react-redux";
import Post from "../HomePage/Post";
import Layout from "../Layout/Layout";

function SavedPosts() {
  const posts = useSelector((state) => state.posts);
  const savedPosts = posts.filter((post) => post.saved);

  return (
    // Bug fix: removed outer <div className="Saved"> wrapping Layout
    // that was causing layout/padding issues
    <Layout>
      <h2 style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "700" }}>
        Saved Posts
      </h2>

      {savedPosts.length === 0 ? (
        <p style={{ color: "gray", textAlign: "center", marginTop: "40px" }}>
          No saved posts yet.
        </p>
      ) : (
        savedPosts.map((post) => <Post key={post.id} post={post} />)
      )}
    </Layout>
  );
}

export default SavedPosts;