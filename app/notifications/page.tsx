"use client";
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
import { useRouter } from "next/navigation";

const urgence = [
  {
    id: 1,
    status: "SOS-AI",
    date: "Il y a 20 secondes",
    intervention: "Intervention sur feux de vehicule",
    lieux: "Yopougon koweit",
  },
];

export default function Page() {
  const router = useRouter();
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
              <TableHead className=" text-white">Sources</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Intervention</TableHead>
              <TableHead className=" text-white">lieux</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {urgence.map((item) => (
              <TableRow key={item.id} onClick={() => router.push("/urgence")}>
                <TableCell>
                  <Link href={`notifications/urgence`}>{item.status}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`notifications/urgence`}>{item.date}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`notifications/urgence`}>
                    {item.intervention}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={`notifications/urgence`}>{item.lieux}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
