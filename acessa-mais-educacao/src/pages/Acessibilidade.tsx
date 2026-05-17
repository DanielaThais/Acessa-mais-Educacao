import Layout from "../components/Layout";

export default function Acessibilidade() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Recursos de Acessibilidade
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold text-2xl mb-3">
            Legendas Automáticas
          </h2>

          <p className="text-gray-500">
            Ative legendas em todas as aulas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold text-2xl mb-3">
            Intérprete de Libras
          </h2>

          <p className="text-gray-500">
            Tradução simultânea em Libras.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold text-2xl mb-3">
            Contraste Alto
          </h2>

          <p className="text-gray-500">
            Melhor visualização da interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold text-2xl mb-3">
            Fonte Ampliada
          </h2>

          <p className="text-gray-500">
            Aumente o tamanho do texto.
          </p>
        </div>
      </div>
    </Layout>
  );
}