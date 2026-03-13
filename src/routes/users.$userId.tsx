import UserModal from "../components/user-modal";
import { getUserLoaderData } from "../demo-data";

export const Route = createFileRoute({
  component: UserModal,
  loader: async ({ params }) => getUserLoaderData(params.userId),
});