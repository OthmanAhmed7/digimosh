import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export async function POST(req) {
  const {
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
    includeClause1,
    clause1Text,
  } = await req.json();

  // Load the existing document
  const docPath = path.resolve("public", documentTemplate);
  const docBuffer = fs.readFileSync(docPath);
  const zip = new PizZip(docBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Replace placeholder text with the form data
  doc.setData({
    // SEC 1 "CONTRACT DETAILS"
    project_name: projectName,
    project_number: projectNumber,
    signature_date: signatureDate,
    signature_day: signatureDay,
    signature_arabic_date: signatureArabicDate,
    signature_hijri_date: signatureHijriDate,
    editing_date: editingDate,
    editing_day: editingDay,
    editing_arabic_date: editingArabicDate,
    editing_hijri_date: editingHijriDate,
    contract_city: contractCity,
    contract_country: contractCountry,
    contract_value_numbers: contractValueNumbers,
    contract_value_letters: contractValueLetters,

    // SEC 2 "FIRST PARTY"
    government_agency: governmentAgency,
    government_representative_name: governmentRepresentativeName,
    government_representative_position: governmentRepresentativePosition,
    government_city: governmentCity,
    government_country: governmentCountry,

    // SEC 3 "SECOND PARTY"
    company_name: companyName,
    company_address: companyAddress,
    company_city: companyCity,
    company_country: companyCountry,
    company_representative_name: companyRepresentativeName,
    company_representative_nationality: companyRepresentativeNationality,
    company_representative_ID: companyRepresentativeID,
    national_ID_number: nationalIDNumber,
    residence_number: residenceNumber,
    passport_number: passportNumber,
    phone_number: phoneNumber,
    postal_code: postalCode,
    post_office_code: postOfficeCode,
    email: email,
    clause1: includeClause1 ? clause1Text : "",

    // SEC 4 "BUSINESS DETAILS"
    bullets: bullets.join("\n"),
  });

  try {
    doc.render();
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Document rendering failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const newDocBuffer = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });

  const encodedFileName = encodeURIComponent(
    `${companyName}_لشركة_${documentTemplate}.docx`
  );

  return new NextResponse(newDocBuffer, {
    headers: {
      "Content-Disposition": `attachment; filename*=UTF-8''${encodedFileName}`,
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  });
}
