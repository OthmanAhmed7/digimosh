"use client";

import { useState } from "react";
import moment from "moment-hijri";

export default function Form() {
  // "TEMPLATE"
  const [documentTemplate, setDocumentTemplate] = useState("template1.docx");

  // SEC 1 "CONTRACT DETAILS"
  const [projectName, setProjectName] = useState("");
  const [projectNumber, setProjectNumber] = useState("");
  const [signatureDate, setSignatureDate] = useState("");
  const [signatureDay, setSignatureDay] = useState("");
  const [signatureArabicDate, setSignatureArabicDate] = useState("");
  const [signatureHijriDate, setSignatureHijriDate] = useState("");
  const [editingDate, setEditingDate] = useState("");
  const [editingDay, setEditingDay] = useState("");
  const [editingArabicDate, setEditingArabicDate] = useState("");
  const [editingHijriDate, setEditingHijriDate] = useState("");
  const [contractCity, setContractCity] = useState("");
  const [contractCountry, setContractCountry] = useState("");
  const [contractValueNumbers, setContractValueNumbers] = useState("");
  const [contractValueLetters, setContractValueLetters] = useState("");

  // SEC 2 "FIRST PARTY"
  const [governmentAgency, setGovernmentAgency] = useState("");
  const [governmentRepresentativeName, setGovernmentRepresentativeName] =
    useState("");
  const [
    governmentRepresentativePosition,
    setGovernmentRepresentativePosition,
  ] = useState("");
  const [governmentCity, setGovernmentCity] = useState("");
  const [governmentCountry, setGovernmentCountry] = useState("");

  // SEC 3 "SECOND PARTY"
  const [companyName, setCompanyName] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [companyCountry, setCompanyCountry] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyRepresentativeName, setCompanyRepresentativeName] =
    useState("");
  const [
    companyRepresentativeNationality,
    setCompanyRepresentativeNationality,
  ] = useState("");
  const [companyRepresentativeID, setCompanyRepresentativeID] = useState("");
  const [nationalIDNumber, setNationalIDNumber] = useState("");
  const [residenceNumber, setResidenceNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [postOfficeCode, setPostOfficeCode] = useState("");
  const [email, setEmail] = useState("");

  // SEC 4 "BUSINESS DETAILS"
  const [bullets, setBullets] = useState([]);
  const [currentBullet, setCurrentBullet] = useState("");
  const [shortWorkDescription, setShortWorkDescription] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [implementationDuration, setImplementationDuration] = useState("");
  const [implementationDurationType, setImplementationDurationType] =
    useState("");
  const [businessStartDate, setBusinessStartDate] = useState("");
  const [businessStartDateCustomize, setBusinessStartDateCustomize] =
    useState("");
  const [
    businessStartArabicDateCustomize,
    setBusinessStartArabicDateCustomize,
  ] = useState("");
  const [businessStartHijriDateCustomize, setBusinessStartHijriDateCustomize] =
    useState("");
  const [businessStartDateSignature, setBusinessStartDateSignature] =
    useState(signatureDate);
  const [businessStartDaySignature, setBusinessStartDaySignature] =
    useState(signatureDay);
  const [
    businessStartArabicDateSignature,
    setBusinessStartArabicDateSignature,
  ] = useState(signatureArabicDate);
  const [businessStartHijriDateSignature, setBusinessStartHijriDateSignature] =
    useState(signatureHijriDate);

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
    setBusinessStartDateSignature(selectedDate);

    // Convert the selected date to Arabic numerals
    const arabicDate = convertToArabicNumbers(selectedDate);
    setSignatureArabicDate(arabicDate);
    setBusinessStartArabicDateSignature(arabicDate);

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
    setBusinessStartDaySignature(dayName);

    // Convert the Gregorian date to Hijri date
    const hijriDate = moment(selectedDate, "YYYY-MM-DD").format(
      "iYYYY/iMM/iDD"
    );
    const arabicHijriDate = convertToArabicNumbers(hijriDate);
    setSignatureHijriDate(arabicHijriDate);
    setBusinessStartHijriDateSignature(arabicHijriDate);
  };

  const handelEditingDateChange = (e) => {
    const selectedDate = e.target.value;
    setEditingDate(selectedDate);

    // Convert the selected date to Arabic numerals
    const arabicDate = convertToArabicNumbers(selectedDate);
    setEditingArabicDate(arabicDate);

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

    // Convert the Gregorian date to Hijri date
    const hijriDate = moment(selectedDate, "YYYY-MM-DD").format(
      "iYYYY/iMM/iDD"
    );
    const arabicHijriDate = convertToArabicNumbers(hijriDate);

    setEditingHijriDate(arabicHijriDate);
  };

  const handelBusinessStartDateCustomize = (e) => {
    const selectedDate = e.target.value;
    setBusinessStartDateCustomize(selectedDate);

    // Convert the selected date to Arabic numerals
    const arabicDate = convertToArabicNumbers(selectedDate);
    setBusinessStartArabicDateCustomize(arabicDate);

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

    setBusinessStartDateCustomize(dayName);

    // Convert the Gregorian date to Hijri date
    const hijriDate = moment(selectedDate, "YYYY-MM-DD").format(
      "iYYYY/iMM/iDD"
    );
    const arabicHijriDate = convertToArabicNumbers(hijriDate);

    setBusinessStartHijriDateCustomize(arabicHijriDate);
  };

  const handleAddBullet = () => {
    if (currentBullet.trim() !== "") {
      setBullets([...bullets, currentBullet]);
      setCurrentBullet("");
    }
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
        signatureHijriDate,
        signatureArabicDate,
        editingDate,
        editingDay,
        editingArabicDate,
        editingHijriDate,
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
        companyAddress,
        companyCity,
        companyCountry,
        companyRepresentativeName,
        companyRepresentativeNationality,
        companyRepresentativeID,
        nationalIDNumber,
        residenceNumber,
        passportNumber,
        phoneNumber,
        postalCode,
        postOfficeCode,
        email,

        // SEC 4 "BUSINESS DETAILS"
        bullets,
        shortWorkDescription,
        workDescription,
        implementationDuration,
        implementationDurationType,
        businessStartArabicDateCustomize,
        businessStartHijriDateCustomize,
        businessStartArabicDateSignature,
        businessStartHijriDateSignature,
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

                  {signatureArabicDate && (
                    <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                      <label className="text-main-color">
                        تاريخ التوقيع بالأرقام العربية:
                      </label>
                      <p>{signatureArabicDate}</p>
                    </div>
                  )}

                  {signatureHijriDate && (
                    <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                      <label className="text-main-color">
                        تاريخ التوقيع بالتقويم الهجري:
                      </label>
                      <p>{signatureHijriDate}</p>
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

                  {editingArabicDate && (
                    <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                      <label className="text-main-color">
                        تاريخ التحرير بالأرقام العربية:
                      </label>
                      <p>{editingArabicDate}</p>
                    </div>
                  )}

                  {editingHijriDate && (
                    <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                      <label className="text-main-color">
                        تاريخ التوقيع بالتقويم الهجري:
                      </label>
                      <p>{editingHijriDate}</p>
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
                      type="number"
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
                بيانات الطرف الأول{" "}
                <small className="text-sm">(الجهة الحكومية)</small>
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

                <div className="flex items-center justify-center gap-[1.5rem]">
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
                بيانات الطرف الثاني{" "}
                <small className="text-sm">(المتعاقد)</small>
              </h1>

              <div className="w-[70%] mt-[1.5rem]">
                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">إسم المتعاقد:</label>
                  <input
                    type="text"
                    value={companyName}
                    placeholder="اسم المتعاقد"
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">
                    عنوان المتعاقد الدائم:
                  </label>
                  <input
                    type="text"
                    value={companyAddress}
                    placeholder="عنوان المتعاقد الدائم"
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex items-center justify-center gap-[1.5rem]">
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">
                      مدينة تأسيس المتعاقد:
                    </label>
                    <input
                      type="text"
                      value={companyCity}
                      placeholder="اسم المدينة التي أسست فيها المتعاقد"
                      onChange={(e) => setCompanyCity(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">
                      دولة تأسيس المتعاقد:
                    </label>
                    <input
                      type="text"
                      value={companyCountry}
                      placeholder="اسم الدولة التي أسست فيها المتعاقد"
                      onChange={(e) => setCompanyCountry(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">اسم ممثل المتعاقد:</label>
                  <input
                    type="text"
                    value={companyRepresentativeName}
                    placeholder="اسم ممثل المتعاقد"
                    onChange={(e) =>
                      setCompanyRepresentativeName(e.target.value)
                    }
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">
                    جنسية ممثل المتعاقد:
                  </label>
                  <input
                    type="text"
                    value={companyRepresentativeNationality}
                    placeholder="جنسية ممثل المتعاقد"
                    onChange={(e) =>
                      setCompanyRepresentativeNationality(e.target.value)
                    }
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>

                <div className="flex gap-[1.5rem] items-center justify-center">
                  <div className="flex flex-col w-full max-w-full gap-[.3rem]">
                    <label>بطاقة هوية ممثل المتعاقد</label>
                    <select
                      value={companyRepresentativeID}
                      onChange={(e) =>
                        setCompanyRepresentativeID(e.target.value)
                      }
                      className="w-full py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    >
                      <option value="">إختر من التالي</option>
                      <option value="بطاقة الهوية الوطنية">
                        بطاقة الهوية الوطنية
                      </option>
                      <option value="الإقامة">الإقامة</option>
                      <option value="جواز السفر">جواز السفر</option>
                    </select>
                  </div>

                  {companyRepresentativeID == "بطاقة الهوية الوطنية" && (
                    <div className="flex flex-col w-full gap-[.3rem]">
                      <label className="text-main-color">
                        رقم بطاقة الهوية الوطنية:
                      </label>
                      <input
                        type="number"
                        value={nationalIDNumber}
                        placeholder="رقم بطاقة الهوية الوطنية"
                        onChange={(e) => setNationalIDNumber(e.target.value)}
                        className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                      />
                    </div>
                  )}

                  {companyRepresentativeID == "الإقامة" && (
                    <div className="flex flex-col w-full gap-[.3rem]">
                      <label className="text-main-color">رقم الإقامة:</label>
                      <input
                        type="number"
                        value={residenceNumber}
                        placeholder="رقم الإقامة"
                        onChange={(e) => setResidenceNumber(e.target.value)}
                        className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                      />
                    </div>
                  )}

                  {companyRepresentativeID == "جواز السفر" && (
                    <div className="flex flex-col w-full gap-[.3rem]">
                      <label className="text-main-color">رقم جواز السفر:</label>
                      <input
                        type="number"
                        value={passportNumber}
                        placeholder="رقم جواز السفر"
                        onChange={(e) => setPassportNumber(e.target.value)}
                        className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-[1.5rem] items-center justify-center">
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">
                      رقم هاتف المتعاقد:
                    </label>
                    <input
                      type="text"
                      value={phoneNumber}
                      placeholder="رقم هاتف المتعاقد"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">ص.ب:</label>
                    <input
                      type="text"
                      value={postOfficeCode}
                      placeholder="صندوق البريد الخاص بالمتعاقد"
                      onChange={(e) => setPostOfficeCode(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>

                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">الرمز البريدي:</label>
                    <input
                      type="text"
                      value={postalCode}
                      placeholder="الرمز البريدي الخاص بالمتعاقد"
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">البريد الإلكتروني:</label>
                  <input
                    type="email"
                    value={email}
                    placeholder="البريد الإلكتروني"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------
          -------------------- SEC 4 "BUSINESS DETAILS" ---------------------
          --------------------------------------------------------------- */}

          {slideNum == 5 && (
            <div className="flex flex-col items-center justify-center w-full mb-[1.5rem]">
              <h1 className="mb-[1.5rem] text-[2rem] text-main-color font-[700]">
                تفاصيل الأعمال
              </h1>

              <div className="flex flex-col w-[70%] gap-[.3rem]">
                <label className="text-main-color">وصف موجز للأعمال:</label>
                <textarea
                  onChange={(e) => {
                    setShortWorkDescription(e.target.value);
                  }}
                  className="w-full px-[1rem] py-[1.5rem] mb-[1rem] leading-tight text-gray-700 border rounded shadow outline-none"
                ></textarea>
              </div>

              <div className="flex flex-col w-[70%] gap-[.3rem]">
                <label className="text-main-color">وصف الأعمال:</label>
                <textarea
                  onChange={(e) => {
                    setWorkDescription(e.target.value);
                  }}
                  className="w-full px-[1rem] py-[3.5rem] mb-[1rem] leading-tight text-gray-700 border rounded shadow outline-none"
                ></textarea>
              </div>

              <div className="flex flex-col w-[70%] gap-[.3rem] mb-[.5rem]">
                <label className="text-main-color">إضافة بنود:</label>
                <div className="flex items-center gap-[1rem]">
                  <input
                    type="text"
                    value={currentBullet}
                    onChange={(e) => setCurrentBullet(e.target.value)}
                    placeholder="أدخل نقطة"
                    className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddBullet}
                    className="px-4 py-2 text-white rounded-lg bg-main-color"
                  >
                    إضافة
                  </button>
                </div>
              </div>

              <ul className="w-[70%] text-right list-disc list-inside mb-[1rem]">
                {bullets.map((bullet, index) => (
                  <li key={index} className="text-gray-700">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex gap-[1.5rem] items-center justify-center w-[70%]">
                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">مدة إنتهاء الأعمال:</label>
                  <select
                    value={implementationDurationType}
                    onChange={(e) =>
                      setImplementationDurationType(e.target.value)
                    }
                    className="w-full py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  >
                    <option value="">إختر من التالي</option>
                    <option value="يوم">يوم </option>
                    <option value="أسبوع">أسبوع</option>
                    <option value="شهر">شهر</option>
                    <option value="سنة">سنة</option>
                  </select>
                </div>

                {implementationDurationType && (
                  <div className="flex flex-col w-full gap-[.3rem]">
                    <label className="text-main-color">المدة:</label>
                    <input
                      type="number"
                      value={implementationDuration}
                      placeholder="مدة تنفيذ الأعمال"
                      onChange={(e) =>
                        setImplementationDuration(e.target.value)
                      }
                      className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center justify-center w-[70%]">
                <div className="flex flex-col w-full gap-[.3rem]">
                  <label className="text-main-color">
                    تاريخ البدء بتنفيذ الأعمال:
                  </label>
                  <select
                    value={businessStartDate}
                    onChange={(e) => setBusinessStartDate(e.target.value)}
                    className="w-full py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                  >
                    <option value="">إختر من التالي</option>
                    <option value="تاريخ معين">تاريخ معين </option>
                    <option value="تاريخ توقيع العقد">تاريخ توقيع العقد</option>
                  </select>
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  {businessStartDate == "تاريخ معين" && (
                    <div className="flex items-center gap-[1.5rem]">
                      <div className="flex flex-col w-full gap-[.3rem]">
                        <label className="text-main-color">
                          تاريخ بدء تنفيذ الأعمال:
                        </label>
                        <input
                          type="date"
                          value={businessStartDateCustomize}
                          placeholder="تاريخ توقيع العقد"
                          onChange={handelBusinessStartDateCustomize}
                          className="w-full px-[1rem] py-[.5rem] leading-tight text-gray-700 border rounded shadow outline-none mb-[1.5rem]"
                        />
                      </div>

                      {businessStartDateCustomize && (
                        <div className="flex flex-col w-full gap-[.3rem]">
                          <label className="text-main-color">اليوم:</label>
                          <p>{businessStartDateCustomize}</p>
                        </div>
                      )}

                      {businessStartArabicDateCustomize && (
                        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                          <label className="text-main-color">
                            التاريخ الميلادي لبدء تنفيذ الأعمال:
                          </label>
                          <p>{businessStartArabicDateCustomize}</p>
                        </div>
                      )}

                      {businessStartHijriDateCustomize && (
                        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                          <label className="text-main-color">
                            التاريخ الهجري لبدء تنفيذ الأعمال:
                          </label>
                          <p>{businessStartHijriDateCustomize}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col w-full gap-[.3rem]">
                  {businessStartDate == "تاريخ توقيع العقد" && (
                    <div className="flex items-center gap-[1.5rem]">
                      <div className="flex flex-col w-full gap-[.3rem]">
                        <label className="text-main-color">
                          تاريخ بدء تنفيذ الأعمال:
                        </label>
                        <p>{businessStartDateSignature}</p>
                      </div>

                      {businessStartDaySignature && (
                        <div className="flex flex-col w-full gap-[.3rem]">
                          <label className="text-main-color">اليوم:</label>
                          <p>{businessStartDaySignature}</p>
                        </div>
                      )}

                      {businessStartArabicDateSignature && (
                        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                          <label className="text-main-color">
                            التاريخ الميلادي لبدء تنفيذ الأعمال:
                          </label>
                          <p>{businessStartArabicDateSignature}</p>
                        </div>
                      )}

                      {businessStartHijriDateSignature && (
                        <div className="flex flex-col w-full max-w-sm gap-[.3rem]">
                          <label className="text-main-color">
                            التاريخ الهجري لبدء تنفيذ الأعمال:
                          </label>
                          <p>{businessStartHijriDateSignature}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {slideNum == 5 && (
            <button
              type="submit"
              className="px-[3rem] py-[.5rem] font-bold text-white bg-main-color rounded-[.4rem]"
            >
              تأكيد
            </button>
          )}
        </form>

        <div className="flex items-center justify-between mt-[3rem]">
          {slideNum < 5 && (
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
                download={`${companyName}_لشركة_${documentTemplate}.docx`}
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
