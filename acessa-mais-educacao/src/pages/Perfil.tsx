import Layout from "../components/Layout";

export default function Perfil() {
  return (
    <Layout>
      <div className="bg-white rounded-3xl shadow p-8 max-w-4xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-28 h-28 rounded-full bg-purple-200" />

          <div>
            <h1 className="text-4xl font-bold">
              Daniela
            </h1>

            <p className="text-gray-500">
              Estudante da plataforma
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="font-bold text-xl mb-3">
              Cursos em andamento
            </h2>

            <p>Comunicação</p>
            <p>Empregabilidade</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <h2 className="font-bold text-xl mb-3">
              Configurações
            </h2>

            <p>Modo acessível ativado</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}