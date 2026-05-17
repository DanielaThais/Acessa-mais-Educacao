import Layout from "../components/Layout";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import ChatAssistant from "../components/ChatAssistant";
import { Link } from "react-router-dom";

import {
  Brain,
  Briefcase,
  Accessibility,
  ArrowRight,
  Sparkles,
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
      <div className="space-y-8">
        {/* HERO */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Olá! Seja bem-vindo 👋</h1>

            <p className="opacity-90 max-w-2xl text-lg">
              Continue aprendendo no seu ritmo com conteúdos acessíveis e
              focados no seu desenvolvimento profissional.
            </p>

            <div className="flex items-center gap-2 mt-3 text-sm opacity-80">
              <Sparkles size={18} />
              <span>Plataforma de aprendizado e empregabilidade</span>
            </div>
          </div>
        </section>

        {/* STATUS */}
        <section className="bg-white rounded-3xl shadow-xl p-6 flex flex-wrap gap-6 justify-between">
          <div>
            <p className="text-sm text-gray-500">Nível</p>
            <h3 className="font-bold text-3xl text-purple-600">4</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">XP</p>
            <h3 className="font-bold text-3xl text-orange-500">250 XP</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Sequência</p>
            <h3 className="font-bold text-3xl text-pink-500">7 dias 🔥</h3>
          </div>
        </section>

        {/* BANNER PRINCIPAL */}
        <section className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Aprenda com acessibilidade
          </h2>

          <p className="text-gray-500 max-w-2xl">
            Conteúdos rápidos, linguagem simples e recursos inclusivos para
            ajudar você a crescer profissionalmente e se destacar no mercado.
          </p>

          <Link
            to="/aula"
            className="inline-flex items-center gap-3 mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Continuar aula
            <ArrowRight size={18} />
          </Link>
        </section>

        {/* DESTAQUES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Brain className="text-purple-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">Inteligência Emocional</h3>

            <p className="text-gray-500">
              Aprenda a lidar com emoções no ambiente profissional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Briefcase className="text-blue-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">Primeiro Emprego</h3>

            <p className="text-gray-500">
              Descubra como se preparar para entrevistas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Accessibility className="text-green-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">Recursos Inclusivos</h3>

            <p className="text-gray-500">
              Libras, legendas e navegação simplificada.
            </p>
          </div>
        </section>

        {/* CURSOS */}
        <section className="bg-white rounded-3xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Cursos recomendados
            </h2>

            <button className="text-purple-600 font-semibold hover:underline">
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

        {/* ASSISTENTE */}
        <ChatAssistant />
      </div>
    </Layout>
  );
}
