import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export async function POST(req) {
  const {
    documentTemplate,
    companyName,
    companyRepresentative,
    registrationNumber,
    companyAddress,
    phoneNumber,
    postalCode,
    email,
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
    company_name: companyName,
    company_representative: companyRepresentative,
    registration_number: registrationNumber,
    company_address: companyAddress,
    phone_number: phoneNumber,
    postal_code: postalCode,
    email: email,
    clause1: includeClause1 ? clause1Text : "",
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
