interface CourseCardProps {
  title: string;
  description: string;
}

export default function CourseCard({
  title,
  description,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-3">
        {title}
      </h2>

      <p className="text-gray-500 mb-4">
        {description}
      </p>

      <button className="bg-purple-600 text-white px-4 py-2 rounded-xl">
        Acessar Curso
      </button>
    </div>
  );
}