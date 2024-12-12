import React from "react";

export default function Page() {
  return (
    <>
      <div className="border-b pb-4">
        <h1 className="text-2xl font-semibold">
          Urgence : 🚨 Icendit de vehicule a YOP
        </h1>
      </div>
      <div className="my-4">
        <p className="">
          <span className="font-semibold">Date:</span> 2021-10-10
        </p>
        <p className="mt-4">
          <span className="font-semibold">Localisation:</span> Yopougon
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
          <span className="font-semibold">Appelant:</span> 225 07 07 07 07
        </p>
      </div>
    </>
  );
}
