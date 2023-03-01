import React from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const router = useRouter();

  const [toggleMenu, setToggleMenu] = React.useState(false);

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Karaoke",
      path: "/karaoke",
    },
    {
      label: "Movie",
      path: "/movie",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Posts",
      path: "/posts",
    },
  ];

  const loginItems = [
    {
      label: "Login",
      path: "/login",
    },
    {
      label: "Register",
      path: "/register",
    },
  ];

  return (
    <nav className="bg__header">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between sm:items-center ">
            <div className="text-gray-300">
              <Link href="/">
                <Image src={logo} alt="logo" width={40} />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-3">
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold"
                      {...(router.pathname === item.path && {
                        className: "active",
                      })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block sm:ml-3">
              <ul className="flex space-x-4">
                {loginItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-bold"
                      {...(router.pathname === item.path && {
                        className: "active",
                      })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex relative">
            {!toggleMenu && (
              <HiMenuAlt4
                fontSize={28}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div
                className="bg__mobi z-10 fixed -top-0 -right-1 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
              >
                <li className="text-xl w-[32px] mt-2 mb-8 ">
                  <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>
                {navItems.map((item) => (
                  <li key={item.path} className="mt-2">
                    <Link
                      href={item.path}
                      className="hover:text-[#9ba1b5] mx-4 cursor-pointer my-2 text-lg text-gray-300 font-bold"
                      {...(router.pathname === item.path && {
                        className: "active",
                      })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <div className="w-11/12 mt-5">
                  <hr />
                </div>

                {loginItems.map((item) => (
                  <li key={item.path} className="mt-2">
                    <Link
                      href={item.path}
                      className="hover:text-[#9ba1b5] mx-4 cursor-pointer my-4 text-lg text-gray-300 font-bold"
                      {...(router.pathname === item.path && {
                        className: "active",
                      })}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
