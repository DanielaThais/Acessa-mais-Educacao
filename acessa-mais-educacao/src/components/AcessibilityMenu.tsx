export default function AccessibilityMenu() {
  return (
    <div className="bg-[var(--card)] rounded-3xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recursos de Acessibilidade
      </h2>

      <div className="flex flex-wrap gap-4">
        <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl">
          Libras
        </button>

        <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl">
          Legendas
        </button>

        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
          Áudio Explicativo
        </button>

        <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl">
          Fonte Ampliada
        </button>
      </div>
    </div>
  );
}