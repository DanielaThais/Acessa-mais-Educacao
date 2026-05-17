import Layout from "../components/Layout";
import profile from "../assets/profile.png";

import {
  Trophy,
  BookOpen,
  Flame,
  Star,
  Medal,
} from "lucide-react";

export default function Perfil() {
  return (
    <Layout>
      <div className="space-y-8">

        {/* CARD PERFIL */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* USER */}
            <div className="flex items-center gap-6">
              <img
                src={profile}
                alt="Foto de perfil"
                className="
                  w-32 h-32
                  rounded-full
                  object-cover
                  border-4 border-white
                  shadow-lg
                "
              />

              <div>
                <h2 className="text-4xl font-bold text-white">
                  Aluno
                </h2>

                <p className="opacity-90 mt-1">
                  Estudante da plataforma
                </p>

                <p className="mt-4 text-sm opacity-80 max-w-md">
                  Aprendendo habilidades profissionais e
                  desenvolvendo novas competências para o
                  mercado de trabalho.
                </p>
              </div>
            </div>

            {/* STATUS */}
            <div className="bg-[var(--card)]/10 backdrop-blur-md rounded-2xl p-6 flex gap-8 flex-wrap">
              <div>
                <p className="text-sm opacity-80">
                  Nível
                </p>

                <h3 className="font-bold text-3xl">
                  4
                </h3>
              </div>

              <div>
                <p className="text-sm opacity-80">
                  XP
                </p>

                <h3 className="font-bold text-3xl">
                  250
                </h3>
              </div>

              <div>
                <p className="text-sm opacity-80">
                  Sequência
                </p>

                <h3 className="font-bold text-3xl flex items-center gap-2">
                  7 <Flame />
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRESSO */}
        <section className="bg-[var(--card)] rounded-3xl shadow p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-purple-600" />

            <h2 className="text-2xl font-bold">
              Progresso nos Cursos
            </h2>
          </div>

          <div className="space-y-6">

            {/* CURSO */}
            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold">
                  Comunicação
                </p>

                <p className="text-purple-600 font-bold">
                  80%
                </p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-purple-600 h-4 rounded-full w-[80%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold">
                  Empregabilidade
                </p>

                <p className="text-green-600 font-bold">
                  60%
                </p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full w-[60%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="font-semibold">
                  Inteligência Emocional
                </p>

                <p className="text-pink-600 font-bold">
                  40%
                </p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-pink-500 h-4 rounded-full w-[40%]" />
              </div>
            </div>
          </div>
        </section>

        {/* CONQUISTAS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[var(--card)] rounded-3xl shadow p-6">
            <div className="bg-yellow-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Trophy className="text-yellow-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Primeira Conquista
            </h3>

            <p className="text-gray-500">
              Você completou sua primeira aula.
            </p>
          </div>

          <div className="bg-[var(--card)] rounded-3xl shadow p-6">
            <div className="bg-pink-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Flame className="text-pink-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Sequência Ativa
            </h3>

            <p className="text-gray-500">
              7 dias consecutivos estudando.
            </p>
          </div>

          <div className="bg-[var(--card)] rounded-3xl shadow p-6">
            <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Medal className="text-purple-600" />
            </div>

            <h3 className="font-bold text-xl mb-2">
              Perfil Completo
            </h3>

            <p className="text-gray-500">
              Seu perfil foi configurado com sucesso.
            </p>
          </div>
        </section>

        {/* CONFIGURAÇÕES */}
        <section className="bg-[var(--card)] rounded-3xl shadow p-8">
          <div className="flex items-center gap-3 mb-6">
            <Star className="text-purple-600" />

            <h2 className="text-2xl font-bold">
              Preferências
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-100 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">
                Acessibilidade
              </h3>

              <p className="text-gray-500">
                Modo acessível ativado
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">
                Notificações
              </h3>

              <p className="text-gray-500">
                Lembretes diários ativos
              </p>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
}