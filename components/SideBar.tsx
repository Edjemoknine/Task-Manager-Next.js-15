"use client";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import React from "react";
const Links = [
  { label: "Tasks", href: "/", icon: "" },
  { label: "Completed", href: "/completed", icon: "" },
  { label: "Important", href: "/important", icon: "" },
  { label: "Do it Now", href: "/now", icon: "" },
];

const SideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, [pathname]);

  return (
    <>
      <nav
        className={`${
          open ? "-left-[45%]" : "left-0"
        } fixed top-6 md:top-0 bottom-6 md:left-0  dark:text-gray-500 w-40 md:w-96  dark:bg-gray-800 flex flex-col justify-between border border-slate-400 dark:border-slate-800 md:relative duration-300 ease-in-out  bg-slate-200 text-gray-700 rounded-l-none rounded-r-xl md:rounded-2xl `}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden absolute top-24 border border-l-0 rounded-l-none border-slate-600 dark:bg-gray-800 -right-10 w-10 h-12 rounded-2xl flex justify-center items-center`}
        >
          {open ? <ChevronRight /> : <ChevronLeft />}
        </button>
        <div className="flex flex-col gap-3 p-6  items-center">
          <Image
            src={"/logo.jpg"}
            className="rounded-full object-contain"
            width={100}
            height={100}
            alt="Avatar"
          />

          <h1 className="flex flex-col  text-center md:text-lg">
            <span>Moknine</span>
            <span>Elhadj</span>
          </h1>
        </div>
        <div className="flex flex-col gap-3 text-center items-center ">
          {Links.map((link) => (
            <Link
              prefetch
              className={`${
                pathname === link.href
                  ? "text-blue-600 bg-slate-400 dark:bg-gray-700 font-semibold border-r-4 border-blue-500"
                  : ""
              } px-4 py-2 hover:bg-blue-900  w-full duration-300`}
              href={link.href}
              key={link.label}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-col gap-6 text-center items-center pb-6 ">
            <SignedIn>
              <UserButton />
            </SignedIn>{" "}
            <SignedOut>
              <>
                <Link
                  className={`${
                    pathname === "/login"
                      ? "text-blue-600 bg-slate-700 font-semibold border-r-4 border-blue-500"
                      : ""
                  } px-4 py-2 hover:bg-blue-900  w-full duration-300`}
                  href="/sign-in"
                >
                  Login
                </Link>
                <Link
                  className={`${
                    pathname === "/register"
                      ? "text-blue-600 bg-slate-700 font-semibold border-r-4 border-blue-500"
                      : ""
                  } px-4 py-2 hover:bg-blue-900  w-full duration-300`}
                  href="/sign-up"
                >
                  Register
                </Link>{" "}
              </>
            </SignedOut>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
