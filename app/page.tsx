import { Button } from "antd";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="w-3/5">
          <h1 className="text-2xl font-semibold text-gray-600 mt-24">
            Bienvenue sur la plateforme de gestion des urgences
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </p>
          <div>
            <h1 className="text-lg ">Nos interventions</h1>
            <Button>Incendie</Button>
          </div>
        </div>
        <div className="w-2/5"></div>
      </div>
    </>
  );
}
