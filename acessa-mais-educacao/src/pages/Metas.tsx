import Layout from "../components/Layout";

export default function Metas() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Metas da Semana
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="font-bold text-2xl mb-2">
            Assistir 5 aulas
          </h2>

          <p className="text-gray-500">
            Progresso: 3/5
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="font-bold text-2xl mb-2">
            Participar da comunidade
          </h2>

          <p className="text-gray-500">
            Progresso: 1/3
          </p>
        </div>
      </div>
    </Layout>
  );
}