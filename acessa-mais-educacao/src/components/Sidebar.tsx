import {
  BookOpen,
  Trophy,
  Target,
  MessageCircle,
  Accessibility,
  User,
  PlayCircle,
  Home,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col">
      <h1 className="text-2xl font-bold text-purple-600 mb-10">
        Acessa+ Educação
      </h1>

      <nav className="flex flex-col gap-3 text-gray-700">
        <Link
          to="/"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <Home size={20} />
          Início
        </Link>

        <Link
          to="/cursos"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <PlayCircle size={20} />
          Cursos
        </Link>

        <Link
          to="/aula"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <BookOpen size={20} />
          Aula
        </Link>

        <Link
          to="/perfil"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <User size={20} />
          Perfil
        </Link>

        <Link
          to="/metas"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <Target size={20} />
          Metas
        </Link>

        <Link
          to="/conquistas"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <Trophy size={20} />
          Conquistas
        </Link>

        <Link
          to="/comunidade"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <MessageCircle size={20} />
          Comunidade
        </Link>

        <Link
          to="/acessibilidade"
          className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
        >
          <Accessibility size={20} />
          Acessibilidade
        </Link>
      </nav>
    </aside>
  );
}