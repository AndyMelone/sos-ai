import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { ReactElement, JSXElementConstructor, forwardRef } from "react";

// Typage des props pour la carte d'intervention d'urgence
interface CardProps {
  currentValue: string; // Valeur actuelle
  lastValue: string; // Dernière valeur enregistrée
  color: string; // Couleur d'arrière-plan (hex)
  sensor:
    | string
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>; // Type de capteur
  unit: string; // Unité de mesure (par exemple : "ppm" ou "%")
  currentTime: Date; // Heure actuelle
}

function Card({
  currentValue,
  lastValue,
  color,
  sensor,
  unit,
  currentTime,
}: CardProps) {
  const current = parseFloat(currentValue);
  const last = parseFloat(lastValue);
  const difference = current - last;

  const isPositive = difference >= 0;

  // Fonction de formatage de la date
  const formatDate = (date: Date): string => {
    return date.toLocaleString("fr-FR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className="inline-block px-4 py-2 rounded-xl shadow-md m-2"
      style={{ backgroundColor: `#${color}` }}
    >
      {/* Titre et icône du capteur */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-3 items-center">
          <p className="font-medium text-gray-700">{sensor}</p>
        </div>
      </div>

      {/* Valeur actuelle */}
      <div className="mt-3">
        <p className="text-lg font-bold">
          {current.toFixed(3)}{" "}
          <span className="text-sm font-normal">{unit}</span>
        </p>
      </div>

      {/* Différence avec flèche d'indication */}
      <div className="flex items-center space-x-2 mt-2">
        {isPositive ? (
          <HiArrowTrendingUp size={16} color="green" />
        ) : (
          <HiArrowTrendingDown size={16} color="red" />
        )}
        <p
          className={`text-xs font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive
            ? `+${difference.toFixed(3)}`
            : `${difference.toFixed(3)}`}{" "}
          {unit}
        </p>
      </div>

      {/* Valeur précédente */}
      <div className="mt-2">
        <p className="text-xs text-gray-500">Valeur précédente</p>
        <p className="text-sm">
          {last.toFixed(3)} <span className="text-xs font-normal">{unit}</span>
        </p>
      </div>

      {/* Horodatage */}
      <div className="mt-4 text-right">
        <p className="text-xs text-gray-400 font-thin">
          {formatDate(currentTime)}
        </p>
      </div>
    </div>
  );
}

export default forwardRef(Card);
