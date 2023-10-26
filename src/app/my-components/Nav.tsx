"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuTwitter, LuGithub, LuLinkedin } from "react-icons/lu";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Nav = ({ navLinks }: { navLinks?: any }) => {
  return (
    <nav className="flex w-screen py-2 sticky pr-10">
      <div className="w-3/6 lg:w-1/2 flex items-center"></div>
      <div className="w-full lg:w-1/2 flex justify-end gap-2">
        <div className=" w-full justify-end items-center gap-2 hidden sm:flex xl:w-4/5 ">
          <Link href="https://github.com/MVAodhan" target="_blank">
            <LuGithub className="w-[25px] h-[25px]" />
          </Link>
          <Link href="https://twitter.com/mvaodhan" target="_blank">
            <LuTwitter className="w-[25px] h-[25px] text-[#009DEB]" />
          </Link>
          <Link href="https://twitter.com/mvaodhan" target="_blank">
            <LuLinkedin className="w-[25px] h-[25px] text-[#1275b3]" />
          </Link>
        </div>
        {navLinks?.length > 1 ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/69143973?v=4" />
                <AvatarFallback>AH</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map((link: any) => (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href}>{link.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : null}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
