import { createFileRoute } from "@tanstack/solid-router";
import UserModal from "../components/user-modal";
import { getUserLoaderData } from "../demo-data";

export const Route = createFileRoute("/users/$userId")({
  component: UserModal,
  loader: async ({ params }) => getUserLoaderData(params.userId),
});