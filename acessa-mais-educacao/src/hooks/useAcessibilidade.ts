import { useContext } from "react";
import { AcessibilidadeContext } from "../contexts/acessibilidadeContextValue";

export function useAcessibilidade() {
  const context = useContext(AcessibilidadeContext);

  if (!context) {
    throw new Error(
      "useAcessibilidade deve ser usado dentro de AcessibilidadeProvider",
    );
  }

  return context;
}
