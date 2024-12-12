// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tableau de Bord</title>
      </Head>
      <main className=" min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Tableau de Bord</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Statistiques Utilisateurs</h2>
            <p className="text-gray-600">Nombre total : 1,234</p>
            <p className="text-gray-600">Actifs : 987</p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Ventes du Mois</h2>
            <p className="text-gray-600">Total : $12,345</p>
            <p className="text-gray-600">Commandes : 123</p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Nouveaux Messages</h2>
            <p className="text-gray-600">Messages non lus : 5</p>
          </div>

          {/* Carte 4 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Tâches en Cours</h2>
            <p className="text-gray-600">Tâches à faire : 8</p>
          </div>

          {/* Carte 5 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Rapport de Performance</h2>
            <p className="text-gray-600">Score : 85%</p>
          </div>

          {/* Carte 6 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Feedback Clients</h2>
            <p className="text-gray-600">Satisfaction : 90%</p>
          </div>
        </div>
      </main>
    </>
  );
}
