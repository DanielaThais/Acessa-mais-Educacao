interface ProgressCardProps {
  title: string;
  progress: string;
}

export default function ProgressCard({
  title,
  progress,
}: ProgressCardProps) {
  return (
    <div className="bg-[var(--card)] rounded-2xl p-6 shadow">
      <h2 className="font-bold text-2xl mb-2">
        {title}
      </h2>

      <p className="text-[var(--text)]">
        {progress}
      </p>
    </div>
  );
}