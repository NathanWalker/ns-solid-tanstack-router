import PostList from "../components/post-list";
import { getPostsLoaderData } from "../demo-data";

export const Route = createFileRoute({
  component: PostList,
  loader: async () => getPostsLoaderData(),
});