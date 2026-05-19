import Layout from "../components/Layout";
import { useAcessibilidade } from "../hooks/useAcessibilidade";

import { Subtitles, Ear, Contrast, Type } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AccessibilityCardProps = {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  icon: LucideIcon;
  iconClassName: string;
  activeClassName: string;
};

function AccessibilityCard({
  title,
  description,
  enabled,
  onToggle,
  icon: Icon,
  iconClassName,
  activeClassName,
}: AccessibilityCardProps) {
  return (
    <article className="bg-[var(--card)] rounded-3xl shadow-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <Icon className={iconClassName} aria-hidden="true" />
        <h2 className="font-bold text-xl">{title}</h2>
      </div>

      <p className="text-[var(--text)] mb-4">{description}</p>

      <button
        type="button"
        onClick={onToggle}
        aria-pressed={enabled}
        aria-label={`${enabled ? "Desativar" : "Ativar"} ${title}`}
        className={`px-4 py-2 rounded-xl font-semibold transition ${
          enabled ? `${activeClassName} text-white` : "bg-gray-200 text-gray-800"
        }`}
      >
        {enabled ? "Ativado" : "Ativar"}
      </button>
    </article>
  );
}

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

        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          aria-label="Controles globais de acessibilidade"
        >
          <AccessibilityCard
            title="Legendas"
            description="Ativar legendas nos vídeos compatíveis."
            enabled={legendas}
            onToggle={() => setLegendas(!legendas)}
            icon={Subtitles}
            iconClassName="text-purple-600"
            activeClassName="bg-purple-600"
          />

          <AccessibilityCard
            title="Libras"
            description="Ativar o tradutor VLibras em toda a aplicação."
            enabled={libras}
            onToggle={() => setLibras(!libras)}
            icon={Ear}
            iconClassName="text-blue-600"
            activeClassName="bg-blue-600"
          />

          <AccessibilityCard
            title="Alto Contraste"
            description="Melhora a leitura da interface com cores de maior contraste."
            enabled={altoContraste}
            onToggle={() => setAltoContraste(!altoContraste)}
            icon={Contrast}
            iconClassName="text-green-600"
            activeClassName="bg-green-600"
          />

          <AccessibilityCard
            title="Fonte grande"
            description="Aumenta o tamanho do texto em toda a aplicação."
            enabled={fonteGrande}
            onToggle={() => setFonteGrande(!fonteGrande)}
            icon={Type}
            iconClassName="text-orange-600"
            activeClassName="bg-orange-600"
          />
        </section>
      </div>
    </Layout>
  );
}
