import React from "react";
import { FaSearch } from "react-icons/fa";

const Sec2 = () => {
  return (
    <section className="max-w-[1300px] mx-auto pt-[5rem] px-[1rem]">
      <div className="flex flex-col items-center">
        <h1 className="text-[1.8rem] text-main-color mb-[2rem]">إبدأ البحث</h1>

        <div className="bg-white py-[2.5rem] px-[1.5rem] flex flex-col md:flex-row gap-[1.5rem] shadow-lg rounded-[.3rem] w-full">
          <div className="flex-1">
            <h3 className="text-red-500 font-[400] mb-[1.5rem]">
              استخدم كلمة واحدة فقط لنتائج أفضل
            </h3>

            <input
              type="text"
              placeholder="كلمة البحث"
              className="border py-[.3rem] px-[1rem] w-full"
            />

            <button className="flex items-center gap-[.3rem] text-white bg-main-color mt-[3rem] px-[3.5rem] py-[.5rem] rounded-[.5rem]">
              بحث
              <FaSearch />
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-[.5rem]">
            <div className="flex items-start gap-[.5rem]">
              <input type="checkbox" className="w-[15px] h-[15px] mt-[3px]" />
              <p className="font-[700]">نظام المنافسات والمشتريات الحكومية.</p>
            </div>
            <div className="flex items-start gap-[.5rem]">
              <input type="checkbox" className="w-[15px] h-[15px] mt-[3px]" />
              <p className="font-[700]">
                اللائحة التنفيذية لنظام المنافسات والمشتريات الحكومية.
              </p>
            </div>
            <div className="flex items-start gap-[.5rem]">
              <input type="checkbox" className="w-[15px] h-[15px] mt-[3px]" />
              <p className="font-[700]">
                نظام المنافسات والمشتريات الحكومية{" "}
                <span className="text-red-500">(القديم)</span>
              </p>
            </div>
            <div className="flex items-start gap-[.5rem]">
              <input type="checkbox" className="w-[15px] h-[15px] mt-[3px]" />
              <p className="font-[700]">
                اللائحة التنفيذية لنظام المنافسات والمشتريات الحكومية{" "}
                <span className="text-red-500">(القديم)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
