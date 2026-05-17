import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type AcessibilidadeState = {
  legendas: boolean;
  libras: boolean;
  altoContraste: boolean;
  fonteGrande: boolean;

  setLegendas: (value: boolean) => void;
  setLibras: (value: boolean) => void;
  setAltoContraste: (value: boolean) => void;
  setFonteGrande: (value: boolean) => void;
};

const AcessibilidadeContext = createContext<AcessibilidadeState | undefined>(
  undefined,
);

type ProviderProps = {
  children: ReactNode;
};

export function AcessibilidadeProvider({ children }: ProviderProps) {
  const [legendas, setLegendas] = useState(false);
  const [libras, setLibras] = useState(false);
  const [altoContraste, setAltoContraste] = useState(false);
  const [fonteGrande, setFonteGrande] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("acessibilidade");

    if (saved) {
      const parsed = JSON.parse(saved);

      setLegendas(parsed.legendas);
      setLibras(parsed.libras);
      setAltoContraste(parsed.altoContraste);
      setFonteGrande(parsed.fonteGrande);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "acessibilidade",
      JSON.stringify({
        legendas,
        libras,
        altoContraste,
        fonteGrande,
      }),
    );

    document.body.classList.toggle("alto-contraste", altoContraste);
    document.body.classList.toggle("fonte-grande", fonteGrande);
  }, [legendas, libras, altoContraste, fonteGrande]);

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

export function useAcessibilidade() {
  const context = useContext(AcessibilidadeContext);

  if (!context) {
    throw new Error(
      "useAcessibilidade deve ser usado dentro de AcessibilidadeProvider",
    );
  }

  return context;
}
