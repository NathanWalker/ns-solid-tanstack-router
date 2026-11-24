import { createFileRoute } from "@tanstack/solid-router";
import PostList from "../components/post-list";
import { getPostsLoaderData } from "../demo-data";

export const Route = createFileRoute("/posts")({
  component: PostList,
  loader: async () => getPostsLoaderData(),
});