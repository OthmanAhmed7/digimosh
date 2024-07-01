import React from "react";

const Sec3 = () => {
  return (
    <section className="max-w-[1300px] mx-auto pt-[5rem] pb-[8rem]">
      <div>
        <h1 className="text-[1.5rem] mb-[1rem]">إستعراض اللوائح</h1>

        <div className="flex flex-col gap-[.5rem]">
          <div className="bg-white px-[1rem] py-[1.5rem] shadow-md rounded-[.4rem] mx-[1rem]">
            <p className="text-main-color font-[700]">
              نظام المنافسات والمشتريات الحكومية.
            </p>
          </div>
          <div className="bg-white px-[1rem] py-[1.5rem] shadow-md rounded-[.4rem] mx-[1rem]">
            <p className="text-main-color font-[700]">
              اللائحة التنفيذية لنظام المنافسات والمشتريات الحكومية.{" "}
            </p>
          </div>
          <div className="bg-white px-[1rem] py-[1.5rem] shadow-md rounded-[.4rem] mx-[1rem]">
            <p className="text-main-color font-[700]">
              نظام المنافسات والمشتريات الحكومية (القديم){" "}
            </p>
          </div>
          <div className="bg-white px-[1rem] py-[1.5rem] shadow-md rounded-[.4rem] mx-[1rem]">
            <p className="text-main-color font-[700]">
              اللائحة التنفيذية لنظام المنافسات والمشتريات الحكومية (القديم){" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
