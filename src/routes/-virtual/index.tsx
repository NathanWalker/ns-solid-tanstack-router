import { Link } from "@nativescript/tanstack-router/solid";

export const Route = createFileRoute({
  component: VirtualRoutesOverview,
});

function VirtualRoutesOverview() {
  return (
    <>
      <actionbar title="Mixed File-Based Routing" iosLargeTitle={true} />
      <scrollview class="bg-[#edf1f9] dark:bg-[#070d1b]">
        <stacklayout class="px-5 pt-4 pb-8">
          <label
            text="This screen is mounted by the virtualRouteConfig object in tsr.config.json. It keeps the app's physical routes intact while adding a code-declared subtree under /virtual."
            class="text-[#4b5162] dark:text-[#a8b1c9] text-[15px] mt-2 leading-[3]"
            textWrap={true}
          />

          <stacklayout class="mt-4 bg-[#f4f6fb] dark:bg-[#1a2540] rounded-[18] p-4">
            <label
              text="tsr.config.json"
              class="text-[#131722] dark:text-[#f2f6ff] text-[16px] font-bold"
            />
            <label
              text='"virtualRouteConfig": { "type": "root", "children": [ { "type": "physical", ... }, { "type": "route", "path": "virtual", ... } ] }'
              class="text-[#5f687b] dark:text-[#9aa7c7] text-[13px] mt-2 leading-[3]"
              textWrap={true}
            />
          </stacklayout>

          <Link to="/virtual/inspector" class="mt-4">
            <label
              text="Open Inspector"
              class="text-white text-[16px] font-bold bg-[#131722] dark:bg-[#2b3a63] rounded-2xl py-4 text-center"
            />
          </Link>
        </stacklayout>
      </scrollview>
    </>
  );
}
