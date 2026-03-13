import PostDetail from "../components/post-detail";
import { getPostDetailLoaderData } from "../demo-data";

export const Route = createFileRoute({
  component: PostDetail,
  loader: async ({ params }) => getPostDetailLoaderData(params.postId),
});