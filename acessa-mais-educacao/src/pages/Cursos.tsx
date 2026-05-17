import Layout from "../components/Layout";

import { Search, Clock3, Star, BookOpen } from "lucide-react";

export default function Cursos() {
  const cursos = [
    {
      titulo: "Comunicação",
      cor: "bg-purple-500",
      progresso: "80%",
    },
    {
      titulo: "Empregabilidade",
      cor: "bg-blue-500",
      progresso: "60%",
    },
    {
      titulo: "Inteligência Emocional",
      cor: "bg-pink-500",
      progresso: "40%",
    },
    {
      titulo: "Postura Profissional",
      cor: "bg-green-500",
      progresso: "20%",
    },
    {
      titulo: "Educação Financeira",
      cor: "bg-orange-500",
      progresso: "70%",
    },
    {
      titulo: "LinkedIn Estratégico",
      cor: "bg-indigo-500",
      progresso: "50%",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold mb-3 text-white">
            Cursos Disponíveis
          </h1>

          <p className="max-w-2xl opacity-90 text-lg">
            Aprenda com conteúdos rápidos, acessíveis e focados no mercado de
            trabalho.
          </p>

          {/* BUSCA */}
          <div className="mt-6 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 max-w-xl">
            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Pesquisar cursos..."
              className="w-full outline-none text-gray-700"
            />
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="flex flex-wrap gap-3">
          <button className="bg-purple-100 text-purple-700 px-5 py-2 rounded-xl font-medium">
            Todos
          </button>

          <button className="bg-white px-5 py-2 rounded-xl shadow">
            Comunicação
          </button>

          <button className="bg-white px-5 py-2 rounded-xl shadow">
            Profissional
          </button>

          <button className="bg-white px-5 py-2 rounded-xl shadow">
            Financeiro
          </button>

          <button className="bg-white px-5 py-2 rounded-xl shadow">
            Desenvolvimento pessoal
          </button>
        </section>

        {/* GRID CURSOS */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.titulo}
              className="
                bg-white rounded-3xl shadow
                overflow-hidden
                hover:scale-[1.02]
                transition
              "
            >
              {/* CAPA */}
              <div
                className={`${curso.cor} h-40 flex items-center justify-center`}
              >
                <BookOpen size={60} className="text-white" />
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">
                {/* BADGES */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock3 size={14} />
                    15 min
                  </div>

                  <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} />
                    4.9
                  </div>
                </div>

                {/* TÍTULO */}
                <h2 className="text-2xl font-bold mb-3">{curso.titulo}</h2>

                {/* TEXTO */}
                <p className="text-gray-500 mb-6">
                  Curso com linguagem simples, aulas curtas e recursos
                  acessíveis.
                </p>

                {/* PROGRESSO */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Progresso</span>

                    <span className="font-semibold text-purple-600">
                      {curso.progresso}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full"
                      style={{
                        width: curso.progresso,
                      }}
                    />
                  </div>
                </div>

                {/* BOTÃO */}
                <button
                  className="
                    w-full
                    bg-purple-600
                    hover:bg-purple-700
                    text-white
                    py-3
                    rounded-2xl
                    font-semibold
                    transition
                  "
                >
                  Continuar Curso
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
