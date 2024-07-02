"use client"; // This directive is required for Client Components in Next.js

import { useState } from "react";

export default function Form() {
  const [documentTemplate, setDocumentTemplate] = useState("template1.docx");
  const [companyName, setCompanyName] = useState("");
  const [companyRepresentative, setCompanyRepresentative] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        documentTemplate,
        companyName,
        companyRepresentative,
        registrationNumber,
        companyAddress,
        phoneNumber,
        postalCode,
        email,
      }),
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  };

  return (
    <section className="flex flex-col items-center pt-[5rem] px-[1rem]">
      <h1 className="mb-[1.5rem] text-[2rem] text-main-color font-[700]">
        أدخل بيانات الشركة
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">إختر القالب:</label>
          <select
            value={documentTemplate}
            onChange={(e) => setDocumentTemplate(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          >
            <option value="عقد_تقنية_المعلومات.docx">
              عقد تقنية المعلومات
            </option>
            <option value="عقد_براءة_إختراع.docx">عقد براءة اختراع</option>
            <option value="عقد_إيجار_ملكية.docx">عقد ايجار ملكية</option>
          </select>
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">إسم الشركة:</label>
          <input
            type="text"
            value={companyName}
            placeholder="اسم الشركة"
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">ممثل الشركة:</label>
          <input
            type="text"
            value={companyRepresentative}
            placeholder="ممثل الشركة"
            onChange={(e) => setCompanyRepresentative(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">رقم التسجيل:</label>
          <input
            type="text"
            value={registrationNumber}
            placeholder="رقم التسجيل"
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">البريد الإلكترونى:</label>
          <input
            type="email"
            value={email}
            placeholder="البريد الإلكتروني"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">عنوان الشركة:</label>
          <input
            type="text"
            value={companyAddress}
            placeholder="عنوان الشركة"
            onChange={(e) => setCompanyAddress(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">رقم الهاتف:</label>
          <input
            type="tel"
            value={phoneNumber}
            placeholder="رقم الهاتف"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] text-right leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
          <label className="text-main-color">الرمز البريدي:</label>
          <input
            type="text"
            value={postalCode}
            placeholder="الرمز البريدي"
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
          />
        </div>

        <button
          type="submit"
          className="px-[3rem] py-[.5rem] font-bold text-white bg-main-color rounded-[.4rem]"
        >
          تأكيد
        </button>
      </form>
      {downloadUrl && (
        <div className="mt-6">
          <a
            href={downloadUrl}
            download={`${companyName} لشركة ${documentTemplate}.docx`}
            className="px-[3rem] py-[.5rem] font-bold text-white rounded-[.4rem] bg-main-color"
          >
            تنزيل الملف
          </a>
        </div>
      )}
    </section>
  );
}
