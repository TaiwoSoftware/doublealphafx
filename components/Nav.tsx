"use client";
import List from "./List";
import CustomButton from "./ui/CustomButton";
import CustomDropdown from "./ui/CustomDropdown";
import Logo from "./ui/Logo";
import { NavMenu } from "@/types/types";

const Nav = () => {
  const handleClick = () => {
    alert("working");
  };
  return (
    <nav className="flex items-center customNav justify-between">
      <Logo />
      <ul className="flex gap-3">
        <List listItem="Account Management" />

        <CustomDropdown
          forwardedList="Auto Trading"
          Children={
            <>
              <div className="customDropdown">
                <List listItem="Taiwo" />
                <List listItem="Taiwo" />
                <List listItem="Taiwo" />
              </div>
            </>
          }
        />
      
      </ul>
      <CustomButton buttonInnerText="Get Started" handleClick={handleClick} />
    </nav>
  );
};

export default Nav;
