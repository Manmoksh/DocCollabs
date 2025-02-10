import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <header className={cn("header", className)}>
      <Link href="/" className="md:flex-1 flex items-center">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
        />
        <h1 className="text-white text-xl font-medium hidden md:block">
          DocCollabs
        </h1>
      </Link>
      {children}
    </header>
  );
};

export default Header;
