import Layout from "../components/Layout";

export default function Conquistas() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Conquistas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow text-center">
          🏆
          <h2 className="font-bold mt-3">
            7 dias seguidos
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow text-center">
          ⭐
          <h2 className="font-bold mt-3">
            Primeiro curso finalizado
          </h2>
        </div>
      </div>
    </Layout>
  );
}