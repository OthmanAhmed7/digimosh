import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-[1200px] flex mx-auto items-center py-[.5rem] lg:px-0 md:px-[8rem] px-[1rem]">
        <Image src="/img/logo.png" width={43} height={43} alt="page logo" />

        <ul className="flex mr-[3rem] gap-[1.2rem] border-l-[1px]">
          <li className="">
            <Link href="#">الرئيسية</Link>
          </li>
          <li className="text-slate-400 font-[300]">
            <Link href="#">المنتدي</Link>
          </li>
          <li className="ml-[.6rem] font-[300] text-slate-400">
            <Link href="#">تواصل معنا</Link>
          </li>
        </ul>

        <button className="mr-[.6rem] hidden md:block  font-[700] tracking-[-0.06rem] text-main-color">
          تسجيل الدخول
        </button>
      </div>
    </header>
  );
};

export default Header;
