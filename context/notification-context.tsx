/* eslint-disable @typescript-eslint/no-explicit-any */
// context/NotificationContext.tsx
import { createContext, useContext } from "react";

// Déclarez le type pour le contexte
interface NotificationContextType {
  user: any;
  setUser: (user: any) => void;
}

// Créez le contexte avec une valeur par défaut "undefined"
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

// Hook personnalisé pour accéder au contexte
export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

export default NotificationContext;
