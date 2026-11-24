import { createFileRoute } from "@tanstack/solid-router";
import About from "../components/about";

export const Route = createFileRoute("/about")({
  component: About,
});