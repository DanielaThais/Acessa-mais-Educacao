import Layout from "../components/Layout";
import { Subtitles, Ear, Contrast, Type } from "lucide-react";

export default function Acessibilidade() {
  return (
    <Layout>
      <div className="space-y-8">

        {/* HEADER */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold">
            Acessibilidade ♿
          </h1>

          <p className="opacity-90 mt-2 max-w-2xl">
            Ajuste a plataforma para sua forma de aprender com recursos que tornam a experiência mais inclusiva e confortável.
          </p>
        </section>

        {/* RECURSOS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEGENDAS */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Subtitles className="text-purple-600" />
              <h2 className="font-bold text-xl">
                Legendas Automáticas
              </h2>
            </div>

            <p className="text-gray-500">
              Ative legendas em todas as aulas para acompanhar o conteúdo com mais facilidade.
            </p>

            <button className="mt-4 text-purple-600 font-semibold hover:underline">
              Ativar recurso
            </button>
          </div>

          {/* LIBRAS */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Ear className="text-blue-600" />
              <h2 className="font-bold text-xl">
                Intérprete de Libras
              </h2>
            </div>

            <p className="text-gray-500">
              Tradução simultânea em Libras para melhor compreensão das aulas.
            </p>

            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Ativar recurso
            </button>
          </div>

          {/* CONTRASTE */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Contrast className="text-green-600" />
              <h2 className="font-bold text-xl">
                Contraste Alto
              </h2>
            </div>

            <p className="text-gray-500">
              Melhora a visibilidade da interface para leitura mais confortável.
            </p>

            <button className="mt-4 text-green-600 font-semibold hover:underline">
              Ativar recurso
            </button>
          </div>

          {/* FONTE */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Type className="text-orange-600" />
              <h2 className="font-bold text-xl">
                Fonte Ampliada
              </h2>
            </div>

            <p className="text-gray-500">
              Aumente o tamanho do texto para facilitar a leitura dos conteúdos.
            </p>

            <button className="mt-4 text-orange-600 font-semibold hover:underline">
              Ajustar fonte
            </button>
          </div>

        </section>

      </div>
    </Layout>
  );
}