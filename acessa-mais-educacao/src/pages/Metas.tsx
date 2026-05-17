import Layout from "../components/Layout";
import { Target, Users, CheckCircle2, Flame } from "lucide-react";

export default function Metas() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* HEADER */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold">Metas da Semana 🎯</h1>

          <p className="opacity-90 mt-2 max-w-2xl">
            Acompanhe seu progresso semanal e mantenha sua sequência de estudos
            ativa.
          </p>

          <div className="flex items-center gap-2 mt-4 text-sm opacity-80">
            <Flame size={18} />
            <span>Continue sua sequência e ganhe XP</span>
          </div>
        </section>

        {/* METAS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* META 1 */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-purple-600" />
              <h2 className="font-bold text-xl">Assistir 5 aulas</h2>
            </div>

            <p className="text-gray-500 mb-3">
              Progresso: 3/5 aulas concluídas
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full w-[60%]" />
            </div>
          </div>

          {/* META 2 */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-600" />
              <h2 className="font-bold text-xl">Participar da comunidade</h2>
            </div>

            <p className="text-gray-500 mb-3">
              Progresso: 1/3 interações realizadas
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-500 h-3 rounded-full w-[33%]" />
            </div>
          </div>
        </section>

        {/* STATUS RESUMO */}
        <section className="bg-white rounded-3xl shadow-xl p-6 flex flex-wrap gap-6 justify-between">
          <div>
            <p className="text-sm text-gray-500">Metas concluídas</p>
            <h3 className="font-bold text-3xl text-green-600 flex items-center gap-2">
              1 <CheckCircle2 />
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Progresso geral</p>
            <h3 className="font-bold text-3xl text-purple-600">45%</h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Sequência ativa</p>
            <h3 className="font-bold text-3xl text-pink-500">7 dias 🔥</h3>
          </div>
        </section>
      </div>
    </Layout>
  );
}
