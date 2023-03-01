import React from "react";
import Image from "next/image";
import next from "../public/next.svg";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="bg__header">
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.8] flex-initial justify-center items-center">
          <Link href="/">
            <Image src={next} alt="Picture of logo" width={150} height={150} />
          </Link>
        </div>

        <div className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <Link
            href="/karaoke"
            className="hover:text-[#9ba1b5] mx-4 cursor-pointer"
          >
            Karaoke
          </Link>
          <Link
            href="/phim-anh"
            className="hover:text-[#9ba1b5] mx-4 cursor-pointer"
          >
            Phim Ảnh
          </Link>
          <Link
            href="/video"
            className="hover:text-[#9ba1b5] mx-4 cursor-pointer"
          >
            Video
          </Link>
          <Link
            href="/tin-tuc"
            className="hover:text-[#9ba1b5] mx-4 cursor-pointer"
          >
            Tin Tức
          </Link>
          <Link
            href="/login"
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Login
          </Link>
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
              <Link
                href="/karaoke"
                className="hover:text-[#9ba1b5] mx-4 cursor-pointer my-2 text-lg"
              >
                Karaoke
              </Link>
              <Link
                href="/phim-anh"
                className="hover:text-[#9ba1b5] mx-4 cursor-pointer my-2 text-lg "
              >
                Phim Ảnh
              </Link>
              <Link
                href="/video"
                className="hover:text-[#9ba1b5] mx-4 cursor-pointer my-2 text-lg"
              >
                Video
              </Link>
              <Link
                href="/tin-tuc"
                className="hover:text-[#9ba1b5] mx-4 cursor-pointer my-2 text-lg"
              >
                Tin Tức
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
