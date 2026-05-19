import { createContext } from "react";

export type AcessibilidadeState = {
  legendas: boolean;
  libras: boolean;
  altoContraste: boolean;
  fonteGrande: boolean;

  setLegendas: (value: boolean) => void;
  setLibras: (value: boolean) => void;
  setAltoContraste: (value: boolean) => void;
  setFonteGrande: (value: boolean) => void;
};

export const AcessibilidadeContext = createContext<
  AcessibilidadeState | undefined
>(undefined);
