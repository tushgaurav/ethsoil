import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <div
        className={`transition-all duration-500 ${scrolled ? "opacity-0" : "opacity-100"
          }  w-full bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg `}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="logoBox">
            <Image src="/logo.png" width={150} height={20} alt="logo" />
          </div>
          <div className="navBox">
            <Link href="#contact" className="text-gray-100 px-4 -z-30">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
