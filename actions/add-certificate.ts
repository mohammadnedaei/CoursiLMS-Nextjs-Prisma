import { db } from "@/lib/db";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

interface AddCertificateProps {
  userId: string;
  courseId: string;
  courseTitle: string;
}

export const addCertificate = async ({
  userId,
  courseId,
  courseTitle,
}: AddCertificateProps) => {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: height,
      color: rgb(0.95, 0.95, 0.95),
    });

    page.drawText(`Certificate of Completion`, {
      x: 50,
      y: height - 80,
      size: 30,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0),
    });

    page.drawText(`This certifies that ${userId}`, {
      x: 50,
      y: height - 140,
      size: 20,
      color: rgb(0, 0, 0),
    });

    page.drawText(`has successfully completed the course: ${courseTitle}`, {
      x: 50,
      y: height - 180,
      size: 18,
      color: rgb(0, 0, 0),
    });

    const currentDate = new Date().toLocaleDateString();
    page.drawText(`Date: ${currentDate}`, {
      x: 50,
      y: height - 220,
      size: 18,
      color: rgb(0, 0, 0),
    });
    // Add a sample signature text
    page.drawText(`Signature:`, {
      x: 50,
      y: height - 280,
      size: 18,
      color: rgb(0, 0, 0),
    });

    page.drawText(`John Doe`, {
      x: 150,
      y: height - 280,
      size: 18,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    const pdfDir = path.join(process.cwd(), "public", "certificates");
    const pdfPath = path.join(pdfDir, `${userId}_${courseId}_certificate.pdf`);

    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }

    fs.writeFileSync(pdfPath, pdfBytes);

    const certificate = await db.certificate.create({
      data: {
        userId: userId,
        courseId: courseId,
        name: `Completed ${courseTitle}`,
        url: `/certificates/${userId}_${courseId}_certificate.pdf`,
      },
    });

    return certificate;
  } catch (error) {
    console.log("[ADD_CERTIFICATE]", error);
    return null;
  }
};
