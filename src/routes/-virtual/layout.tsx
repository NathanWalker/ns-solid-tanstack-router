import { Outlet } from "@tanstack/solid-router";
import { Link } from "@nativescript/tanstack-router/solid";

export const Route = createFileRoute({
  component: VirtualRoutesLayout,
});

function VirtualRoutesLayout() {
  return (
    <>
      <actionbar title="Virtual Routes" />
      <scrollview class="bg-[#edf1f9] dark:bg-[#070d1b]">
        <stacklayout class="px-5 pt-4 pb-20" iosOverflowSafeAreaEnabled={false}>
          <label
            text="This subtree is declared inline in tsr.config.json, while the rest of the app still comes from physical file routes."
            class="text-[#4b5162] dark:text-[#a8b1c9] text-[16px] leading-[3]"
            textWrap={true}
          />

          <gridlayout columns="*, *" rows="auto" class="mt-4">
            <stacklayout col="0" class="mr-2">
              <Link to="/virtual">
                <label
                  text="Overview"
                  class="text-[#131722] dark:text-[#e5ebff] text-[16px] font-bold bg-white dark:bg-[#1a2540] rounded-2xl py-4 text-center"
                />
              </Link>
            </stacklayout>
            <stacklayout col="1" class="ml-2">
              <Link to="/virtual/inspector">
                <label
                  text="Inspector"
                  class="text-white text-[16px] font-bold bg-[#131722] dark:bg-[#2b3a63] rounded-2xl py-4 text-center"
                />
              </Link>
            </stacklayout>
          </gridlayout>

          <stacklayout class="mt-5 bg-white dark:bg-[#0f182d] rounded-[22] p-4">
            <Outlet />
          </stacklayout>
        </stacklayout>
      </scrollview>
    </>
  );
}