import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { MdMenu, MdSearch } from "react-icons/md";
// import { ReactComponent as Logo } from "@/../public/next.svg"; // Adjust the path to your logo SVG

const Header = () => {
  return (
    <div className="border-b-4 border-gray-400 min-h-fit">
      <div className="flex items-center justify-between container mx-auto min-h-[100px] px-4">
        <ButtonPrimary>
          <MdMenu className="w-6 h-6" />
          <span>Meny</span>
        </ButtonPrimary>
        <div className="flex-grow flex justify-center">
          {/* <Logo className="h-12" /> */}
        </div>
        <ButtonPrimary>
          <span>Søk</span>
          <MdSearch className="w-6 h-6" />
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Header;
