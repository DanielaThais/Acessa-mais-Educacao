import Layout from "../components/Layout";
import { Trophy, Flame, Star, Medal } from "lucide-react";

export default function Conquistas() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold">Conquistas 🏆</h1>

          <p className="opacity-90 mt-2 max-w-2xl">
            Suas vitórias e progresso na plataforma aparecem aqui. Continue
            evoluindo para desbloquear novas conquistas.
          </p>
        </section>

        {/* CONQUISTAS */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition">
            <div className="bg-pink-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Flame className="text-pink-600" />
            </div>

            <h2 className="font-bold text-lg">7 dias seguidos</h2>

            <p className="text-sm text-gray-500 mt-2">
              Sequência ativa de estudos
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition">
            <div className="bg-yellow-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-yellow-600" />
            </div>

            <h2 className="font-bold text-lg">Primeiro curso finalizado</h2>

            <p className="text-sm text-gray-500 mt-2">
              Você concluiu seu primeiro curso
            </p>
          </div>

          {/* espaço para futuras conquistas */}
          <div className="bg-white rounded-3xl shadow border-2 border-dashed border-gray-200 p-6 text-center opacity-70">
            <div className="bg-gray-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="text-gray-400" />
            </div>

            <h2 className="font-bold text-lg text-gray-500">Em breve</h2>

            <p className="text-sm text-gray-400 mt-2">
              Novas conquistas serão desbloqueadas
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow border-2 border-dashed border-gray-200 p-6 text-center opacity-70">
            <div className="bg-gray-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Medal className="text-gray-400" />
            </div>

            <h2 className="font-bold text-lg text-gray-500">Em breve</h2>

            <p className="text-sm text-gray-400 mt-2">
              Continue aprendendo para desbloquear
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
