import { Link } from "@nativescript/tanstack-router/solid";

export const Route = createFileRoute({
  component: VirtualRoutesInspector,
});

function VirtualRoutesInspector() {
  return (
    <>
      <actionbar title="Virtual Route Inspector" iosLargeTitle={true} />
      <scrollview class="bg-[#edf1f9] dark:bg-[#070d1b]">
        <stacklayout class="px-5 pt-4 pb-8">
          <label
            text="Use virtual route config when you want route structure to come from configuration instead of directory shape. Here, /about and /posts still come from physical files, while /virtual and /virtual/inspector are mounted from tsr.config.json."
            class="text-[#4b5162] dark:text-[#a8b1c9] text-[15px] mt-2 leading-[3]"
            textWrap={true}
          />

          <stacklayout class="mt-4 bg-[#fdebe4] dark:bg-[#3f241c] rounded-[18] p-4">
            <label
              text="What this shows"
              class="text-[#dd6236] dark:text-[#ffb193] text-[16px] font-bold"
            />
            <label
              text="1. physical('.') keeps the normal file-based routes. 2. A virtual route entry adds /virtual. 3. Its children map to ignored files that are only used by the virtual config."
              class="text-[#6e4b40] dark:text-[#f6c8b5] text-[13px] mt-2 leading-[3]"
              textWrap={true}
            />
          </stacklayout>

          <Link to="/posts" class="mt-4">
            <label
              text="Back To Physical Routes"
              class="text-[#131722] dark:text-[#e5ebff] text-[16px] font-bold bg-[#f4f6fb] dark:bg-[#1a2540] rounded-2xl py-4 text-center"
            />
          </Link>
        </stacklayout>
      </scrollview>
    </>
  );
}
