import { createFileRoute } from "@tanstack/solid-router";
import PostDetail from "../components/post-detail";
import { getPostDetailLoaderData } from "../demo-data";

export const Route = createFileRoute("/posts/$postId")({
  component: PostDetail,
  loader: async ({ params }) => getPostDetailLoaderData(params.postId),
});