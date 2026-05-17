import {
  BookOpen,
  Brain,
  Briefcase,
  MessageCircle,
  Trophy,
  Target,
  Accessibility,
  PlayCircle,
} from "lucide-react";

const courses: string[] = [
  "Comunicação",
  "Organização",
  "Empregabilidade",
  "Inteligência Emocional",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-bold text-purple-600 mb-10">
          Acessa + Educação
        </h1>

        <nav className="flex flex-col gap-4 text-gray-700">
          <button className="flex items-center gap-3 bg-purple-100 text-purple-700 p-3 rounded-xl">
            <BookOpen size={20} />
            Início
          </button>

          <button className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl">
            <PlayCircle size={20} />
            Meus Cursos
          </button>

          <button className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl">
            <Target size={20} />
            Metas
          </button>

          <button className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl">
            <Trophy size={20} />
            Conquistas
          </button>

          <button className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl">
            <MessageCircle size={20} />
            Comunidade
          </button>

          <button className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl">
            <Accessibility size={20} />
            Acessibilidade
          </button>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Olá! Seja bem vindo! 👋
            </h2>

            <p className="text-gray-500 mt-1">
              Continue aprendendo no seu ritmo.
            </p>
          </div>

          <div className="mt-4 md:mt-0 bg-white rounded-2xl shadow p-4 flex items-center gap-6">
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

        {/* Banner */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-3">
            Aprenda com acessibilidade
          </h2>

          <p className="max-w-2xl text-lg opacity-90">
            Conteúdos rápidos, linguagem simples, recursos inclusivos
            e acompanhamento personalizado para ajudar você a crescer
            profissionalmente.
          </p>

          <button className="mt-6 bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
            Continuar Aula
          </button>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Brain className="text-purple-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Inteligência Emocional
            </h3>

            <p className="text-gray-500">
              Aprenda a lidar com emoções no ambiente profissional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="text-blue-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Primeiro Emprego
            </h3>

            <p className="text-gray-500">
              Descubra como se preparar para entrevistas e currículo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Accessibility className="text-green-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Recursos Inclusivos
            </h3>

            <p className="text-gray-500">
              Libras, legendas, áudio explicativo e navegação simplificada.
            </p>
          </div>
        </section>

        {/* Cursos */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Cursos recomendados
            </h2>

            <button className="text-purple-600 font-semibold">
              Ver todos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course: string) => (
              <div
                key={course}
                className="bg-white rounded-2xl p-5 shadow hover:scale-105 transition"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-purple-600" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  {course}
                </h3>

                <p className="text-gray-500 text-sm mb-4">
                  Aulas rápidas e objetivas.
                </p>

                <button className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition">
                  Acessar Curso
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Assistente Virtual */}
        <section className="bg-white rounded-3xl shadow p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 p-4 rounded-2xl">
              <MessageCircle className="text-purple-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Assistente Virtual
              </h2>

              <p className="text-gray-500">
                Tire dúvidas sobre cursos e funcionalidades.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <p className="text-gray-700">
              👋 Olá, Daniela! Como posso ajudar você hoje?
            </p>
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl">
              Como funciona a plataforma?
            </button>

            <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl">
              Preciso de ajuda em um curso
            </button>

            <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl">
              Quero falar com um professor
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}