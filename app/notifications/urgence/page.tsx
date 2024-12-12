import React from "react";

export default function Page() {
  return (
    <>
      <div className="border-b pb-4">
        <h1 className="text-2xl font-semibold">
          Urgence : 🚨 Icendit de vehicule a YOP
        </h1>
      </div>
      <p className="mt-4">
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
        <span className="font-semibold">Contexte de l'intervention:</span> Un
        vehicule a pris feu a Yopougon
      </p>

      <p className="mt-4">
        <span className="font-semibold">Appelant:</span> 225 07 07 07 07
      </p>
    </>
  );
}
