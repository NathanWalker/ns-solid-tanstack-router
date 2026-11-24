import {
  createNativeScriptRouter,
  NativeScriptRouterProvider,
} from "@nativescript/tanstack-router/solid";
import { routeTree } from "./routeTree.gen";

// Create router
const router = createNativeScriptRouter({
  routeTree,
  initialPath: "/",
});

// Type registration
declare module "@nativescript/tanstack-router/solid" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <NativeScriptRouterProvider
      router={router}
      debug={true}
      actionBarVisibility="never"
    />
  );
};

export { App };
