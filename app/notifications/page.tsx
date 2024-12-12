import React from "react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const urgence = [
  {
    id: 1,
    status: "Non pris en charge",
    date: "2021-10-10",
    intervention: "Intervention 1",
    lieux: "Lieux 1",
  },
];

export default function page() {
  return (
    <>
      <div className="border rounded-xl px-3 py-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">Notifications</h1>
          <p>Voici la liste de vos notifications pour cette semaine.</p>
        </div>
        <Table>
          <TableHeader className="bg-gray-600 ">
            <TableRow>
              <TableHead className=" text-white">Status</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Intervention</TableHead>
              <TableHead className=" text-white">lieux</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urgence.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link href={`notifications/urgence`}>{item.status}</Link>
                </TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.intervention}</TableCell>
                <TableCell>{item.lieux}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}