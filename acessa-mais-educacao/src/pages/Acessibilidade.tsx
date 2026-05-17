import Layout from "../components/Layout";
import { useAcessibilidade } from "../contexts/AcessibilidadeContext";

import { Subtitles, Ear, Contrast, Type } from "lucide-react";

export default function Acessibilidade() {
  const {
    legendas,
    setLegendas,
    libras,
    setLibras,
    altoContraste,
    setAltoContraste,
    fonteGrande,
    setFonteGrande,
  } = useAcessibilidade();

  return (
    <Layout>
      <div className="space-y-8">
        <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-3xl shadow-xl p-8">
          <h1 className="text-4xl font-bold">Acessibilidade ♿</h1>

          <p className="opacity-90 mt-2 max-w-2xl">
            Personalize sua experiência de aprendizado.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEGENDAS */}
          <div className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Subtitles className="text-purple-600" />
              <h2 className="font-bold text-xl">Legendas</h2>
            </div>

            <p className="text-[var(--text)] mb-4">Ativar legendas nos vídeos.</p>

            <button
              onClick={() => setLegendas(!legendas)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                legendas ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              {legendas ? "Ativado" : "Ativar"}
            </button>
          </div>

          {/* LIBRAS */}
          <div className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Ear className="text-blue-600" />
              <h2 className="font-bold text-xl">Libras</h2>
            </div>

            <p className="text-[var(--text)] mb-4">
              Tradutor em Libras (simulação).
            </p>

            <button
              onClick={() => setLibras(!libras)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                libras ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {libras ? "Ativado" : "Ativar"}
            </button>
          </div>

          {/* CONTRASTE */}
          <div className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Contrast className="text-green-600" />
              <h2 className="font-bold text-xl">Alto Contraste</h2>
            </div>

            <p className="text-[var(--text)] mb-4">
              Melhora a leitura da interface.
            </p>

            <button
              onClick={() => setAltoContraste(!altoContraste)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                altoContraste ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              {altoContraste ? "Ativado" : "Ativar"}
            </button>
          </div>

          {/* FONTE */}
          <div className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Type className="text-orange-600" />
              <h2 className="font-bold text-xl">Fonte grande</h2>
            </div>

            <p className="text-[var(--text)] mb-4">Aumenta o tamanho do texto.</p>

            <button
              onClick={() => setFonteGrande(!fonteGrande)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                fonteGrande ? "bg-orange-600 text-white" : "bg-gray-200"
              }`}
            >
              {fonteGrande ? "Ativado" : "Ativar"}
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
