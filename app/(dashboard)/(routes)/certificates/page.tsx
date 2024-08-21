import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/icon-badge";
import { CheckCircle } from "lucide-react";

const CertificatesPage = async () => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const certificates = await db.certificate.findMany({
    where: {
      userId,
    },
    include: {
      course: true,
    },
  });

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white border border-gray-200">
          <TableHeader>
            <TableRow className="bg-gray-100 border-b">
              <TableHead className="px-4 py-2">Certificate</TableHead>
              <TableHead className="px-4 py-2">Course</TableHead>
              <TableHead className="px-4 py-2">Completed in</TableHead>
              <TableHead className="px-4 py-2">Status</TableHead>
              <TableHead className="px-4 py-2">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certificates.length > 0 ? (
              certificates.map((certificate) => (
                <TableRow
                  key={certificate.id}
                  className="border-b hover:bg-gray-50"
                >
                  <TableCell className="px-4 py-2">
                    {certificate.name}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {certificate.course.title}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {new Date(certificate.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <IconBadge
                        icon={CheckCircle}
                        variant="success"
                        size="sm"
                      />
                      <span className="text-emerald-700 font-medium">
                        Valid
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-4 items-center ">
                    <a
                      target="_blank"
                      href={certificate.url}
                      className="px-2 py-3 text-sm inline-block w-[150px] text-center bg-gray-800/90 text-white rounded-md"
                    >
                      View Certificate
                    </a>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CertificatesPage;
