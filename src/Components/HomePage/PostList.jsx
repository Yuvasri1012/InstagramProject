import { useSelector } from "react-redux";
import Post from "./Post";

function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;