import React from "react";
import Form from "@/components/Form";
import Sec1 from "@/components/Sec1";
import Sec2 from "@/components/Sec2";
import Sec3 from "@/components/Sec3";

const page = () => {
  return (
    <main className="bg-[#f9fafb]">
      <Sec1 />
      <Sec2 />
      <Form />
      <Sec3 />
    </main>
  );
};

export default page;
