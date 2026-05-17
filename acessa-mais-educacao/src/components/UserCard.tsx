interface UserCardProps {
  name: string;
  role: string;
}

export default function UserCard({
  name,
  role,
}: UserCardProps) {
  return (
    <div className="bg-[var(--card)] rounded-2xl shadow p-6 flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-purple-200" />

      <div>
        <h2 className="font-bold text-xl">
          {name}
        </h2>

        <p className="text-[var(--text)]">
          {role}
        </p>
      </div>
    </div>
  );
}