import React from "react";
import { useSelector } from "react-redux";
import Post from "../HomePage/Post";
import Layout from "../Layout/Layout";

function SavedPosts() {
  const posts = useSelector((state) => state.posts);

  const savedPosts = posts.filter((post) => post.saved);

  return (
    <div className="Saved">
      <Layout>
        <h2>Saved Posts</h2>

        {savedPosts.length === 0 ? (
          <p>No saved posts</p>
        ) : (
          savedPosts.map((post) => <Post key={post.id} post={post} />)
        )}
      </Layout>
    </div>
  );
}

export default SavedPosts;
