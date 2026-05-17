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

import { NavLink } from "react-router-dom";

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
          <h1 className="text-2xl font-bold text-purple-600">Acessa+</h1>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-3 text-gray-700">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Home size={20} />
            Início
          </NavLink>

          <NavLink
            to="/cursos"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <PlayCircle size={20} />
            Cursos
          </NavLink>

          <NavLink
            to="/aula"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <BookOpen size={20} />
            Aula
          </NavLink>

          <NavLink
            to="/perfil"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <User size={20} />
            Perfil
          </NavLink>

          <NavLink
            to="/metas"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Target size={20} />
            Metas
          </NavLink>

          <NavLink
            to="/conquistas"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Trophy size={20} />
            Conquistas
          </NavLink>

          <NavLink
            to="/comunidade"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <MessageCircle size={20} />
            Comunidade
          </NavLink>

          <NavLink
            to="/acessibilidade"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Accessibility size={20} />
            Acessibilidade
          </NavLink>
        </nav>
      </aside>

      {/* SIDEBAR DESKTOP */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col">
        <h1 className="text-2xl font-bold text-purple-600 mb-10">
          Acessa+ Educação
        </h1>

        <nav className="flex flex-col gap-3 text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Home size={20} />
            Início
          </NavLink>

          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <PlayCircle size={20} />
            Cursos
          </NavLink>

          <NavLink
            to="/aula"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <BookOpen size={20} />
            Aula
          </NavLink>

          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <User size={20} />
            Perfil
          </NavLink>

          <NavLink
            to="/metas"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Target size={20} />
            Metas
          </NavLink>

          <NavLink
            to="/conquistas"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Trophy size={20} />
            Conquistas
          </NavLink>

          <NavLink
            to="/comunidade"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <MessageCircle size={20} />
            Comunidade
          </NavLink>

          <NavLink
            to="/acessibilidade"
            className={({ isActive }) =>
              `
    flex items-center gap-3 p-3 rounded-xl transition

    ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "hover:bg-gray-100 text-gray-700"
    }
  `
            }
          >
            <Accessibility size={20} />
            Acessibilidade
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
