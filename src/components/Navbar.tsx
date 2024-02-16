"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";


const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-6 fixed w-full bg-transparent shadow-md">
        <div className="logoBox">
          <h1 className="font-bold text-xl">Logo</h1>
        </div>
        <div className="navBox ml-auto">
          <h2>Contact</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
