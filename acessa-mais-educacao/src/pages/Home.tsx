import Layout from "../components/Layout";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import ChatAssistant from "../components/ChatAssistant";

import {
  Brain,
  Briefcase,
  Accessibility,
} from "lucide-react";

const courses: string[] = [
  "Comunicação",
  "Organização",
  "Empregabilidade",
  "Inteligência Emocional",
];

export default function Home() {
  return (
    <Layout>
      <Header
        title="Olá! Seja bem-vindo! 👋"
        subtitle="Continue aprendendo no seu ritmo."
      />

      {/* Status */}
      <div className="mb-8 bg-white rounded-2xl shadow p-4 flex flex-wrap items-center gap-6">
        <div>
          <p className="text-sm text-gray-500">Nível</p>
          <h3 className="font-bold text-purple-600">
            4
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">XP</p>
          <h3 className="font-bold text-orange-500">
            250 XP
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Sequência
          </p>

          <h3 className="font-bold text-pink-500">
            7 dias 🔥
          </h3>
        </div>
      </div>

      {/* Banner */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-3">
          Aprenda com acessibilidade
        </h2>

        <p className="max-w-2xl text-lg opacity-90">
          Conteúdos rápidos, linguagem simples e recursos
          inclusivos para ajudar você a crescer
          profissionalmente.
        </p>

        <button className="mt-6 bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
          Continuar Aula
        </button>
      </section>

      {/* Destaques */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Brain className="text-purple-600" />
          </div>

          <h3 className="font-bold text-xl mb-2">
            Inteligência Emocional
          </h3>

          <p className="text-gray-500">
            Aprenda a lidar com emoções no ambiente
            profissional.
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
            Descubra como se preparar para entrevistas.
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
            Libras, legendas e navegação simplificada.
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
          {courses.map((course) => (
            <CourseCard
              key={course}
              title={course}
              description="Aulas rápidas e acessíveis."
            />
          ))}
        </div>
      </section>

      {/* Assistente */}
      <ChatAssistant />
    </Layout>
  );
}