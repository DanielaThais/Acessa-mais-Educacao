import Layout from "../components/Layout";

export default function Aula() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Comunicação Eficaz
      </h1>

      <div className="bg-white rounded-3xl shadow p-6">
        <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
          <p className="text-gray-600 text-xl">
            Player de vídeo da aula
          </p>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl">
            Legendas
          </button>

          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl">
            Libras
          </button>

          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
            Áudio Explicativo
          </button>

          <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl">
            Fonte Ampliada
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Comentários
          </h2>

          <div className="bg-gray-100 rounded-2xl p-4">
            <p className="font-semibold">Lucas:</p>
            <p>Gostei bastante da explicação.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}