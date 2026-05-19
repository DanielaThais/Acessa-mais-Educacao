import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AcessibilidadeContext } from "./acessibilidadeContextValue";

const STORAGE_KEY = "acessibilidade";
const VLIBRAS_SCRIPT_ID = "vlibras-plugin-script";
const VLIBRAS_PLUGIN_URL = "https://vlibras.gov.br/app";
const VLIBRAS_SCRIPT_URL = "https://vlibras.gov.br/app/vlibras-plugin.js";

type StoredAcessibilidadeState = {
  legendas?: boolean;
  libras?: boolean;
  altoContraste?: boolean;
  fonteGrande?: boolean;
};

type AcessibilidadeValues = {
  legendas: boolean;
  libras: boolean;
  altoContraste: boolean;
  fonteGrande: boolean;
};

type ProviderProps = {
  children: ReactNode;
};

declare global {
  interface Window {
    VLibras?: {
      Widget: new (pluginUrl: string) => unknown;
    };
    vlibrasWidgetInitialized?: boolean;
  }
}

function getInitialAcessibilidadeValues(): AcessibilidadeValues {
  const fallback = {
    legendas: false,
    libras: false,
    altoContraste: false,
    fonteGrande: false,
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return fallback;
    }

    const parsed = JSON.parse(saved) as StoredAcessibilidadeState;

    return {
      legendas: Boolean(parsed.legendas),
      libras: Boolean(parsed.libras),
      altoContraste: Boolean(parsed.altoContraste),
      fonteGrande: Boolean(parsed.fonteGrande),
    };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return fallback;
  }
}

function initializeVLibrasWidget() {
  if (typeof window === "undefined" || window.vlibrasWidgetInitialized) {
    return;
  }

  if (!window.VLibras) {
    return;
  }

  new window.VLibras.Widget(VLIBRAS_PLUGIN_URL);
  window.vlibrasWidgetInitialized = true;

  if (document.readyState === "complete") {
    window.dispatchEvent(new Event("load"));
  }
}

function loadVLibrasScript() {
  if (typeof window === "undefined") {
    return;
  }

  const existingScript = document.getElementById(VLIBRAS_SCRIPT_ID);

  if (existingScript) {
    existingScript.addEventListener("load", initializeVLibrasWidget, {
      once: true,
    });
    initializeVLibrasWidget();
    return;
  }

  const script = document.createElement("script");
  script.id = VLIBRAS_SCRIPT_ID;
  script.src = VLIBRAS_SCRIPT_URL;
  script.async = true;
  script.onload = initializeVLibrasWidget;
  document.body.appendChild(script);
}

export function AcessibilidadeProvider({ children }: ProviderProps) {
  const initialValues = getInitialAcessibilidadeValues;
  const [legendas, setLegendas] = useState(() => initialValues().legendas);
  const [libras, setLibras] = useState(() => initialValues().libras);
  const [altoContraste, setAltoContraste] = useState(
    () => initialValues().altoContraste,
  );
  const [fonteGrande, setFonteGrande] = useState(
    () => initialValues().fonteGrande,
  );

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        legendas,
        libras,
        altoContraste,
        fonteGrande,
      }),
    );

    document.documentElement.classList.toggle("alto-contraste", altoContraste);
    document.body.classList.toggle("alto-contraste", altoContraste);
    document.documentElement.classList.toggle("fonte-grande", fonteGrande);
    document.body.classList.toggle("fonte-grande", fonteGrande);
  }, [legendas, libras, altoContraste, fonteGrande]);

  useEffect(() => {
    loadVLibrasScript();
  }, []);

  useEffect(() => {
    if (!libras) {
      return;
    }

    const accessButton = document.querySelector<HTMLElement>(
      "[vw-access-button]",
    );

    accessButton?.click();
  }, [libras]);

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll("video"));

    videos.forEach((video) => {
      Array.from(video.textTracks).forEach((track) => {
        track.mode = legendas ? "showing" : "disabled";
      });
    });
  }, [legendas]);

  return (
    <AcessibilidadeContext.Provider
      value={{
        legendas,
        setLegendas,
        libras,
        setLibras,
        altoContraste,
        setAltoContraste,
        fonteGrande,
        setFonteGrande,
      }}
    >
      {children}
    </AcessibilidadeContext.Provider>
  );
}
