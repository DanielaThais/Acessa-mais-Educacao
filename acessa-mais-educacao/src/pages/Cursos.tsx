import Layout from "../components/Layout";

export default function Cursos() {
  const cursos = [
    "Comunicação",
    "Empregabilidade",
    "Inteligência Emocional",
    "Postura Profissional",
    "Educação Financeira",
    "LinkedIn Estratégico",
  ];

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Cursos Disponíveis
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <div
            key={curso}
            className="bg-white rounded-2xl shadow p-6"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {curso}
            </h2>

            <p className="text-gray-500 mb-4">
              Curso com aulas rápidas e acessíveis.
            </p>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl">
              Acessar
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}