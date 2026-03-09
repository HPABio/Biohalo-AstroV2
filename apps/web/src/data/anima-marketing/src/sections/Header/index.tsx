import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";
import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";

export const Header = () => {
  return (
    <header data-uid="bV2j5Tsg69vkUOVe"
      aria-label="Main"
      className="sticky box-border caret-transparent z-40 border-slate-300/10 border-b border-solid top-0 after:accent-auto after:backdrop-blur-md after:bg-[oklab(0_0_0_/_0.6)] after:bg-[url('https://resend.com/static/texture-btn.png')] after:box-border after:caret-transparent after:text-zinc-100 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-inter"
    >
      <div data-uid="ah9Dd4I3C1954Uyf" className="relative box-border caret-transparent max-w-screen-lg w-full z-10 mx-auto px-6 md:max-w-screen-xl">
        <MobileNavbar data-uid="CcCMXhWNpdzG3CKH" />
        <DesktopNavbar data-uid="hQnMJR77x5sWiXgU" />
      </div>
      <div data-uid="1KTxO15NrMbgtOHd" className="absolute box-border caret-transparent flex justify-center w-full z-50 left-0"></div>
    </header>
  );
};
