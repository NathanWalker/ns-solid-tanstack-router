import { createFileRoute } from "@tanstack/solid-router";
import Home from "../components/home";
import { getHomeLoaderData } from "../demo-data";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => getHomeLoaderData(),
});