interface Comment {
  id: number;
  user: string;
  comment: string;
}

const comments: Comment[] = [
  {
    id: 1,
    user: "Maria",
    comment: "Gostei muito da explicação da aula!",
  },
  {
    id: 2,
    user: "João",
    comment: "Alguém pode me ajudar nessa atividade?",
  },
  {
    id: 3,
    user: "Professor Lucas",
    comment: "Na próxima aula veremos exemplos práticos.",
  },
];

export default function CommentSection() {
  return (
    <section className="bg-[var(--card)] rounded-3xl shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Comentários
      </h2>

      <div className="space-y-4">
        {comments.map((item) => (
          <div
            key={item.id}
            className="bg-[var(--card)] rounded-2xl p-4"
          >
            <p className="font-semibold text-[var(--text)]">
              {item.user}
            </p>

            <p className="text-[var(--text)] mt-1">
              {item.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <label htmlFor="comentario-aula" className="sr-only">
          Escreva um comentário
        </label>
        <textarea
          id="comentario-aula"
          placeholder="Escreva um comentário..."
          className="w-full border border-gray-300 rounded-2xl p-4 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="button"
          className="self-end bg-[var(--primary)] text-white px-6 py-3 rounded-xl hover:bg-[var(--primary)] transition"
        >
          Enviar Comentário
        </button>
      </div>
    </section>
  );
}
