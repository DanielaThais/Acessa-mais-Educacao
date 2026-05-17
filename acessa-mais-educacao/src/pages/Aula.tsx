import Layout from "../components/Layout";
import CommentSection from "../components/CommentSection";

import {
  Subtitles,
  Ear,
  Mic,
  Type,
  PlayCircle,
} from "lucide-react";

export default function Aula() {
  return (
    <Layout>
      <div className="space-y-8">

        {/* HEADER */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">
              Empregabilidade e Inclusão Social
            </h1>

            <p className="opacity-90 max-w-2xl">
              Assista à aula, explore os recursos de acessibilidade e participe
              da discussão no final.
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm opacity-80">
              <PlayCircle size={18} />
              <span>Aula em vídeo + atividades interativas</span>
            </div>
          </div>
        </section>

        {/* VÍDEO */}
        <section className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <PlayCircle className="text-purple-600" />
            <h2 className="text-2xl font-bold">
              Aula em Vídeo
            </h2>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/QIeDnDRoaP8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ACESSIBILIDADE */}
        <section className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Recursos de Acessibilidade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <button className="bg-purple-50 hover:bg-purple-100 transition rounded-2xl p-5 text-left">
              <Subtitles className="text-purple-600 mb-3" />
              <p className="font-semibold">Legendas</p>
              <p className="text-sm text-gray-500">
                Ativar legendas automáticas
              </p>
            </button>

            <button className="bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-5 text-left">
              <Ear className="text-blue-600 mb-3" />
              <p className="font-semibold">Libras</p>
              <p className="text-sm text-gray-500">
                Interpretação em Libras
              </p>
            </button>

            <button className="bg-green-50 hover:bg-green-100 transition rounded-2xl p-5 text-left">
              <Mic className="text-green-600 mb-3" />
              <p className="font-semibold">Áudio</p>
              <p className="text-sm text-gray-500">
                Explicação em áudio
              </p>
            </button>

            <button className="bg-orange-50 hover:bg-orange-100 transition rounded-2xl p-5 text-left">
              <Type className="text-orange-600 mb-3" />
              <p className="font-semibold">Fonte</p>
              <p className="text-sm text-gray-500">
                Modo leitura ampliada
              </p>
            </button>

          </div>
        </section>

        {/* COMENTÁRIOS */}
        <section className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Discussão da Aula
          </h2>

          <CommentSection />
        </section>

      </div>
    </Layout>
  );
}