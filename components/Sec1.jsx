import React from "react";

const Sec1 = () => {
  return (
    <section className="bg-[#e9ecef] w-full">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center pt-[3.5rem] pb-[6rem]">
        <p className="text-[1.6rem] font-[400]">
          اسأل وجاوب وشاركنا معرفتك في منتدى المشتريات الحكومية.
        </p>

        <div className="flex items-center gap-[.2rem] mt-[3rem]">
          <button className="px-[1rem] py-[.5rem] bg-main-color text-white font-[400]">
            زيارة المنتدى
          </button>
          <button className="px-[1rem] py-[.5rem] bg-main-color text-white font-[400]">
            التسجيل
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
