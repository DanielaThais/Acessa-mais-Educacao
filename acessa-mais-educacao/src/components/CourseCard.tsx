interface CourseCardProps {
  title: string;
  description: string;
}

export default function CourseCard({
  title,
  description,
}: CourseCardProps) {
  return (
    <div className="bg-[var(--card)] rounded-2xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-3">
        {title}
      </h2>

      <p className="text-[var(--text)] mb-4">
        {description}
      </p>

      <button
        type="button"
        className="bg-[var(--primary)] text-white px-4 py-2 rounded-xl"
      >
        Acessar Curso
      </button>
    </div>
  );
}
