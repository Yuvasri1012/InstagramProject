import Layout from "../Layout/Layout";
import Story from "../HomePage/Story";
import PostList from "../HomePage/PostList";


function InstaHomePage() {
  return (
    <Layout>
      <Story />
      <PostList />
    </Layout>
  );
}

export default InstaHomePage;