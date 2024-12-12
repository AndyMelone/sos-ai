"use client";

import React from "react";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <>
      <div className="border-b pb-4">
        <h1 className="text-2xl font-semibold mb-4">
          Urgence : 🚨 Icendit de vehicule a YOP
        </h1>
        <div className="justify-between flex">
          <div className="flex gap-2">
            <Button className="bg-red-600 hover:bg-red-400">Urgent</Button>
            <Button>Incendit</Button>
          </div>
          <div className="mx-5">
            <Button variant={"outline"} className="bg-slate-200 border">
              Valider
            </Button>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="">
          <span className="font-semibold">Date:</span> 2021-10-10 - 12:00
        </p>
        <p className="mt-4">
          <span className="font-semibold">Localisation:</span> Yopougon gesco
          mondon 2 batiment 3
        </p>
        <p className="mt-4">
          <span className="font-semibold">Adresse geographique:</span> 5.352
          3.979
        </p>
        <p className="mt-4">
          <span className="font-semibold">Distance depuis la base:</span> 549
          mètres
        </p>

        <p className="mt-4">
          <span className="font-semibold">Risque potenciel:</span> Risque de
          propagation
        </p>
        <p className="mt-4">
          <span className="font-semibold">
            Contexte de l&apos;intervention:
          </span>{" "}
          Un vehicule a pris feu a Yopougon
        </p>
      </div>

      <div className="border-b pb-4 pt-8">
        <h1 className="text-xl font-semibold">
          Information sur l&apos;appelant
        </h1>
      </div>
      <div className="">
        <p className="mt-4">
          <span className="font-semibold">Nom et prenom:</span> Koffi Kouassi
        </p>
        <p className="mt-4">
          <span className="font-semibold">Appelant:</span> 225 07 07 07 07
        </p>
        <p className="mt-4">
          <span className="font-semibold">Est sur les lieux:</span> Oui
        </p>
        <p className="mt-4">
          <span className="font-semibold">
            Dispose de premiers secours d&lsquo;urgence:
          </span>
          Non
        </p>
      </div>
    </>
  );
}
