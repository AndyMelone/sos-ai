import Card from "@/components/shared/card";
import { FaCarCrash, FaTint, FaHeartbeat, FaBolt } from "react-icons/fa";

import { Button } from "antd";
const interventionData = [
  {
    currentValue: "58", // Nombre d'accidents actuels
    lastValue: "42", // Nombre d'accidents précédents
    color: "fde68a", // Jaune clair
    sensor: (
      <>
        <FaCarCrash size={18} /> <span>Accidents</span>
      </>
    ),
    unit: "cas", // Unité pour les statistiques
    currentTime: new Date(),
  },
  {
    currentValue: "30",
    lastValue: "25",
    color: "fca5a5", // Rouge clair
    sensor: (
      <>
        <FaHeartbeat size={18} /> <span>Malaises</span>
      </>
    ),
    unit: "cas",
    currentTime: new Date(),
  },
  {
    currentValue: "12",
    lastValue: "8",
    color: "bfdbfe", // Bleu clair
    sensor: (
      <>
        <FaTint size={18} /> <span>Inondations</span>
      </>
    ),
    unit: "zones",
    currentTime: new Date(),
  },
  {
    currentValue: "32", // Accidents actuels
    lastValue: "25", // Accidents précédents
    color: "facc15", // Jaune
    sensor: (
      <>
        <FaCarCrash size={18} /> <span>Accidents routiers</span>
      </>
    ),
    unit: "cas",
    currentTime: new Date(),
  },
  {
    currentValue: "5", // Électrocutions
    lastValue: "3", // Électrocutions précédentes
    color: "60a5fa", // Bleu clair
    sensor: (
      <>
        <FaBolt size={18} /> <span>Électrocution</span>
      </>
    ),
    unit: "cas",
    currentTime: new Date(),
  },
];
export default function Home() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-3/5">
          <h1 className="text-2xl font-semibold text-gray-600 mt-24">
            Bienvenue sur la plateforme de gestion des urgences
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </p>
          <div className="my-4">
            <h1 className="text-lg my-4">Nos interventions</h1>
            <div className="flex gap-2">
              <Button>Incendie</Button>
              <Button>Accident</Button>
              <Button>Malaise</Button>
              <Button>Inondation</Button>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              {interventionData.map((data, index) => (
                <Card
                  key={index}
                  currentValue={data.currentValue}
                  lastValue={data.lastValue}
                  color={data.color}
                  sensor={data.sensor}
                  unit={data.unit}
                  currentTime={data.currentTime}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5 pt-24">
          <h1 className="text-2xl font-semibold ">
            S<span className="text-red-700">O</span>
            S-AI
          </h1>
          <p className="text-lg pt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            earum saepe atque hic, debitis magni, tempore reiciendis voluptate,
            rerum ad facilis blanditiis tenetur? Vitae soluta quia debitis
            delectus vero dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum nisi est facilis quisquam consequatur
            beatae, consectetur dolorem sit inventore quis, repellendus
            provident magni tenetur nobis? Tempora vel assumenda nostrum
            ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolores minima autem aut atque ratione, quo blanditiis excepturi,
            fugit quae rem beatae pariatur enim impedit praesentium, dolorem
            illum at error doloribus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quam exercitationem hic sunt accusamus. Qui
            ratione et enim maiores neque amet vitae, architecto corporis ab
            omnis! Eligendi nulla quibusdam magnam officiis!
          </p>
        </div>
      </div>
    </>
  );
}
