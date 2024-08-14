"use client";

import { useState } from "react";

export default function Form() {
  // SEC 1 "TEMPLATE"
  const [documentTemplate, setDocumentTemplate] = useState("template1.docx");

  // SEC 2 "CONTRACT DETAILS"
  const [projectName, setProjectName] = useState("");
  const [projectNumber, setProjectNumber] = useState("");
  const [signatureDate, setSignatureDate] = useState("");
  const [signatureDay, setSignatureDay] = useState("");
  const [signatureDisplayedDate, setSignatureDisplayedDate] = useState("");
  const [editingDate, setEditingDate] = useState("");
  const [editingDay, setEditingDay] = useState("");
  const [editingDisplayedDate, setEditingDisplayedDate] = useState("");
  const [contractCity, setContractCity] = useState("");
  const [contractCountry, setContractCountry] = useState("");
  const [contractValueNumbers, setContractValueNumbers] = useState("");
  const [contractValueLetters, setContractValueLetters] = useState("");

  // SEC 3 "FIRST PARTY"
  const [governmentAgency, setGovernmentAgency] = useState("");
  const [governmentRepresentativeName, setGovernmentRepresentativeName] =
    useState("");
  const [
    governmentRepresentativePosition,
    setGovernmentRepresentativePosition,
  ] = useState("");
  const [governmentCity, setGovernmentCity] = useState("");
  const [governmentCountry, setGovernmentCountry] = useState("");

  // SEC 4 "SECOND PARTY"
  const [companyName, setCompanyName] = useState("");
  const [companyRepresentative, setCompanyRepresentative] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  // SEC 5 "BUSINESS DETAILS"

  // OTHER
  const [downloadUrl, setDownloadUrl] = useState("");
  const [includeClause1, setIncludeClause1] = useState(false);
  const [clause1Text, setClause1Text] = useState(
    "ويشار إليهما مجتمعين ب الطرفين أو الطرفان."
  );
  const [slideNum, setSlideNum] = useState(1);

  const convertToArabicNumbers = (input) => {
    const easternArabicNumerals = [
      "٠",
      "١",
      "٢",
      "٣",
      "٤",
      "٥",
      "٦",
      "٧",
      "٨",
      "٩",
    ];

    return input.replace(/[0-9]/g, (d) => easternArabicNumerals[d]);
  };

  const handelSignatureDateChange = (e) => {
    const selectedDate = e.target.value;
    setSignatureDate(selectedDate);

    // Convert the selected date to Arabic numerals
    const arabicDate = convertToArabicNumbers(selectedDate);
    setSignatureDisplayedDate(arabicDate);

    // Determine the day of the week in Arabic
    const date = new Date(selectedDate);
    const dayNames = [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    let dayName = dayNames[date.getDay()];

    setSignatureDay(dayName);
  };

  const handelEditingDateChange = (e) => {
    const selectedDate = e.target.value;
    setEditingDate(selectedDate);

    // Convert the selected date to Arabic numerals
    const arabicDate = convertToArabicNumbers(selectedDate);
    setEditingDisplayedDate(arabicDate);

    // Determine the day of the week in Arabic
    const date = new Date(selectedDate);
    const dayNames = [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];
    let dayName = dayNames[date.getDay()];

    setEditingDay(dayName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // TEMPLATE
        documentTemplate,

        // SEC 1 "CONTRACT DETAILS"
        projectName,
        projectNumber,
        signatureDate,
        signatureDay,
        editingDate,
        contractCity,
        contractCountry,
        contractValueNumbers,
        contractValueLetters,

        // SEC 2 "FIRST PARTY"
        governmentAgency,
        governmentRepresentativeName,
        governmentRepresentativePosition,
        governmentCity,
        governmentCountry,

        // SEC3 "SECOND PARTY"
        companyName,
        companyRepresentative,
        registrationNumber,
        companyAddress,
        phoneNumber,
        postalCode,
        email,

        // SEC 4 "BUSINESS DETAILS"
        includeClause1,
        clause1Text: includeClause1 ? clause1Text : "",
      }),
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  };

  return (
    <section className="max-w-[1300px] flex flex-col items-center pt-[5rem] mx-auto px-[1rem]">
      <div className="rounded-[.3rem] shadow-lg w-full py-[3rem] px-[1.5rem] bg-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          {/* ---------------------------------------------------------------
        -------------------------- TEMPLATE -------------------------------
        --------------------------------------------------------------- */}
          {slideNum == 1 && (
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="mb-[1.5rem] text-[2rem] text-main-color font-[700]">
                نوع العقد
              </h1>

              <div className="w-[70%] mt-[1.5rem]">
                <div className="flex flex-col w-full max-w-full gap-[.3rem]">
                  <select
                    value={documentTemplate}
                    onChange={(e) => setDocumentTemplate(e.target.value)}
                    className="w-full py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  >
                    <option value="">إختر القالب</option>
                    <option value="عقد_تقنية_المعلومات.docx">
                      عقد تقنية المعلومات
                    </option>
                    <option value="عقد_براءة_إختراع.docx">
                      عقد براءة اختراع
                    </option>
                    <option value="عقد_إيجار_ملكية.docx">
                      عقد ايجار ملكية
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
          ----------------- SEC 1 "CONTRACT DETAILS" ------------------------
          --------------------------------------------------------------- */}

          {slideNum == 2 && (
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="mb-[1.5rem] text-[2rem] text-main-color font-[700]">
                تفاصيل العقد
              </h1>

              <div className="w-[70%] mt-[1.5rem]">
                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">إسم المشروع:</label>
                  <input
                    type="text"
                    value={projectName}
                    placeholder="اسم المشروع وفقا لمنصة إعتماد"
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">رقم العقد:</label>
                  <input
                    type="text"
                    value={projectNumber}
                    placeholder="رقم العقد وفقا لمنصة إعتماد"
                    onChange={(e) => setProjectNumber(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex items-center gap-[1.5rem]">
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">تاريخ التوقيع:</label>
                    <input
                      type="date"
                      value={signatureDate}
                      placeholder="تاريخ توقيع العقد"
                      onChange={handelSignatureDateChange}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  {signatureDay && (
                    <div className="flex flex-col w-full gap-[.3rem]">
                      <label className="text-main-color">اليوم:</label>
                      <p>{signatureDay}</p>
                    </div>
                  )}

                  {signatureDisplayedDate && (
                    <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                      <label className="text-main-color">
                        تاريخ التوقيع بالأرقام العربية:
                      </label>
                      <p>{signatureDisplayedDate}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-[1.5rem]">
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">تاريخ التحرير:</label>
                    <input
                      type="date"
                      value={editingDate}
                      placeholder="تاريخ توقيع العقد"
                      onChange={handelEditingDateChange}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  {editingDay && (
                    <div className="flex flex-col w-full gap-[.3rem]">
                      <label className="text-main-color">اليوم:</label>
                      <p>{editingDay}</p>
                    </div>
                  )}

                  {editingDisplayedDate && (
                    <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                      <label className="text-main-color">
                        تاريخ التحرير بالأرقام العربية:
                      </label>
                      <p>{editingDisplayedDate}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-[1.5rem]">
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">المدينة:</label>
                    <input
                      type="text"
                      value={contractCity}
                      placeholder="المدينة"
                      onChange={(e) => setContractCity(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">الدولة:</label>
                    <input
                      type="text"
                      value={contractCountry}
                      placeholder="الدولة"
                      onChange={(e) => setContractCountry(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-[1.5rem]">
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">
                      قيمة العقد - أرقام:
                    </label>
                    <input
                      type="text"
                      value={contractValueNumbers}
                      placeholder="القيمة المالية للعقد - أرقام"
                      onChange={(e) => setContractValueNumbers(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">
                      قيمة العقد - كتابي:
                    </label>
                    <input
                      type="text"
                      value={contractValueLetters}
                      placeholder="القيمة المالية للعقد - كتابي"
                      onChange={(e) => setContractValueLetters(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
          ---------------------- SEC 2 "FIRST PARTY" ------------------------
          --------------------------------------------------------------- */}

          {slideNum == 3 && (
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="mb-[1.5rem] text-[2rem] text-main-color font-[700]">
                الطرف الأول
              </h1>

              <div className="w-[70%] mt-[1.5rem]">
                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">الجهة الحكومية:</label>
                  <input
                    type="text"
                    value={governmentAgency}
                    placeholder="اسم الجهة الحكومية"
                    onChange={(e) => setGovernmentAgency(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">
                    اسم ممثل الجهة الحكومية:
                  </label>
                  <input
                    type="text"
                    value={governmentRepresentativeName}
                    placeholder="اسم ممثل الجهة الحكومية"
                    onChange={(e) =>
                      setGovernmentRepresentativeName(e.target.value)
                    }
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">
                    منصب ممثل الجهة الحكومية:
                  </label>
                  <input
                    type="text"
                    value={governmentRepresentativePosition}
                    placeholder="منصب ممثل الجهة الحكومية"
                    onChange={(e) =>
                      setGovernmentRepresentativePosition(e.target.value)
                    }
                    className="w-full px-[1rem] py-[.5rem] text-right leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">المدينة:</label>
                  <input
                    type="text"
                    value={governmentCity}
                    placeholder="المدينة"
                    onChange={(e) => setGovernmentCity(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">الدولة:</label>
                  <input
                    type="text"
                    value={governmentCountry}
                    placeholder="الدولة"
                    onChange={(e) => setGovernmentCountry(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">Include Clause 1:</label>
                  <div className="flex items-center gap-[1rem]">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="includeClause1"
                        value="yes"
                        checked={includeClause1 === true}
                        onChange={() => setIncludeClause1(true)}
                        className="mr-[.5rem]"
                      />
                      نعم
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="includeClause1"
                        value="no"
                        checked={includeClause1 === false}
                        onChange={() => setIncludeClause1(false)}
                        className="mr-[.5rem]"
                      />
                      لا
                    </label>
                  </div>

                  {includeClause1 && (
                    <textarea
                      value={clause1Text}
                      onChange={(e) => setClause1Text(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
          --------------------- SEC 3 "SECOND PARTY" ------------------------
          --------------------------------------------------------------- */}

          {slideNum == 4 && (
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="mb-[1.5rem] text-[2rem] text-main-color font-[700]">
                الطرف الثاني
              </h1>

              <div className="w-[70%] mt-[1.5rem]">
                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">إسم الشركة:</label>
                  <input
                    type="text"
                    value={companyName}
                    placeholder="اسم الشركة"
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">ممثل الشركة:</label>
                  <input
                    type="text"
                    value={companyRepresentative}
                    placeholder="ممثل الشركة"
                    onChange={(e) => setCompanyRepresentative(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">عنوان الشركة:</label>
                  <input
                    type="text"
                    value={companyAddress}
                    placeholder="عنوان الشركة"
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
          -------------------- SEC 4 "BUSINESS DETAILS" ---------------------
          --------------------------------------------------------------- */}

          {/* {slideNum == 5 && <div></div>} */}

          {slideNum == 4 && (
            <button
              type="submit"
              className="px-[3rem] py-[.5rem] font-bold text-white bg-main-color rounded-[.4rem]"
            >
              تأكيد
            </button>
          )}
        </form>

        <div className="flex items-center justify-between mt-[3rem]">
          {slideNum < 4 && (
            <button
              onClick={() => {
                setSlideNum(slideNum + 1);
              }}
              className="px-[3rem] py-[.5rem] font-bold text-white bg-main-color rounded-[.4rem]"
            >
              التالي
            </button>
          )}

          {slideNum > 1 && (
            <button
              onClick={() => {
                setSlideNum(slideNum - 1);
              }}
              className="px-[3rem] py-[.5rem] font-bold text-white bg-main-color rounded-[.4rem]"
            >
              السابق
            </button>
          )}
        </div>

        <div className="flex items-center justify-center">
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
        </div>
      </div>
    </section>
  );
}
