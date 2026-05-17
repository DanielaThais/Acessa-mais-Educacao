import Layout from "../components/Layout";
import { MessageCircle, ThumbsUp, Users } from "lucide-react";

export default function Comunidade() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold">Comunidade 💬</h1>

          <p className="opacity-90 mt-2 max-w-2xl">
            Conecte-se com outros alunos, tire dúvidas e compartilhe suas
            experiências de aprendizado.
          </p>

          <div className="flex items-center gap-2 mt-4 text-sm opacity-80">
            <Users size={18} />
            <span>Espaço colaborativo de aprendizagem</span>
          </div>
        </section>

        {/* FEED */}
        <section className="space-y-4">
          {/* POST 1 */}
          <div className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">
                M
              </div>

              <div>
                <p className="font-bold">Maria</p>
                <p className="text-sm text-gray-400">há 2 horas</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Alguém pode me ajudar na aula de currículo? Estou com dificuldade
              para organizar minhas experiências.
            </p>

            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <button className="flex items-center gap-1 hover:text-purple-600">
                <ThumbsUp size={16} />
                Curtir
              </button>

              <button className="flex items-center gap-1 hover:text-purple-600">
                <MessageCircle size={16} />
                Responder
              </button>
            </div>
          </div>

          {/* POST 2 */}
          <div className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                J
              </div>

              <div>
                <p className="font-bold">João</p>
                <p className="text-sm text-gray-400">há 5 horas</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Gostei bastante da aula de inteligência emocional. Já estou
              aplicando no meu dia a dia no trabalho.
            </p>

            <div className="flex items-center gap-4 text-[var(--text)] text-sm">
              <button className="flex items-center gap-1 hover:text-purple-600">
                <ThumbsUp size={16} />
                Curtir
              </button>

              <button className="flex items-center gap-1 hover:text-purple-600">
                <MessageCircle size={16} />
                Responder
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
