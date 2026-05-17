import { useState } from "react";

import {
  BookOpen,
  Trophy,
  Target,
  MessageCircle,
  Accessibility,
  User,
  PlayCircle,
  Home,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÃO MOBILE */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed
          top-4
          left-4
          z-50
          bg-purple-600
          text-white
          p-3
          rounded-xl
          shadow-lg
        "
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0
            bg-black/40
            z-40
            md:hidden
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR MOBILE */}
      <aside
        className={`
          fixed top-0 left-0
          h-full w-72
          bg-white
          shadow-xl
          p-6
          z-50
          transform transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:hidden
        `}
      >
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold text-purple-600">
            Acessa+
          </h1>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-3 text-gray-700">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <Home size={20} />
            Início
          </Link>

          <Link
            to="/cursos"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <PlayCircle size={20} />
            Cursos
          </Link>

          <Link
            to="/aula"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <BookOpen size={20} />
            Aula
          </Link>

          <Link
            to="/perfil"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <User size={20} />
            Perfil
          </Link>

          <Link
            to="/metas"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <Target size={20} />
            Metas
          </Link>

          <Link
            to="/conquistas"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <Trophy size={20} />
            Conquistas
          </Link>

          <Link
            to="/comunidade"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <MessageCircle size={20} />
            Comunidade
          </Link>

          <Link
            to="/acessibilidade"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-xl"
          >
            <Accessibility size={20} />
            Acessibilidade
          </Link>
        </nav>
      </aside>

      {/* SIDEBAR DESKTOP */}
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
    </>
  );
}