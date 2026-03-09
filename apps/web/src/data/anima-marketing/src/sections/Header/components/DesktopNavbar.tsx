import { Logo } from "@/components/Logo";
import { NavMenu } from "@/sections/Header/components/NavMenu";
import { AuthButtons } from "@/sections/Header/components/AuthButtons";

export const DesktopNavbar = () => {
  return (
    <div data-uid="0hdy2WSRPNMIB6rE" className="items-center box-border caret-transparent hidden h-[58px] w-full mx-auto md:flex">
      <Logo data-uid="pKYaliwcmxWchjum" />
      <NavMenu data-uid="itH3SsqtMX8Cx5yH" />
      <AuthButtons data-uid="iM6osS5AGbNbXAal" />
    </div>
  );
};
