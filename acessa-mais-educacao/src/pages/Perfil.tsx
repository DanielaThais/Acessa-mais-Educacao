import Layout from "../components/Layout";
import profile from "../assets/profile.png";

export default function Perfil() {
  return (
    <Layout>
      <div className="bg-white rounded-3xl shadow p-8 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Perfil */}
          <div className="flex items-center gap-6">
            <img
              src={profile}
              alt="Foto de perfil"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-300 shadow"
            />

            <div>
              <h1 className="text-4xl font-bold">Aluno</h1>

              <p className="text-gray-500">Estudante da plataforma</p>
            </div>
          </div>

          {/* Status */}
          <div className="bg-gray-100 rounded-2xl p-4 flex flex-wrap items-center gap-5">
            <div>
              <p className="text-sm text-gray-500">Nível</p>

              <h3 className="font-bold text-purple-600">4</h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">XP</p>

              <h3 className="font-bold text-orange-500">250 XP</h3>
            </div>

            <div>
              <p className="text-sm text-gray-500">Sequência</p>

              <h3 className="font-bold text-pink-500">7 dias 🔥</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h2 className="font-bold text-xl mb-3">Cursos em andamento</h2>

          <p>Comunicação</p>
          <p>Empregabilidade</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h2 className="font-bold text-xl mb-3">Configurações</h2>

          <p>Modo acessível ativado</p>
        </div>
      </div>
    </Layout>
  );
}
