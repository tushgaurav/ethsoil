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

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 w-full  sticky top-0 z-10 max-w-full px-4 py-2   rounded-none shadow-md h-max  bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="logoBox">
          <Image src="/logo.png" width={150} height={20} alt="logo" />
        </div>
        <div className="navBox ml-auto">
          <Link href="#contact">
            <Button variant={"outline"} size={"lg"} className="text-xl" >Contact Us</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

