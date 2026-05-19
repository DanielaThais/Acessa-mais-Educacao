export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-[var(--card)] p-10 rounded-3xl shadow w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">
          Acessa+ Educação
        </h1>

        <div className="flex flex-col gap-4">
          <label htmlFor="email-login" className="sr-only">
            E-mail
          </label>
          <input
            id="email-login"
            type="email"
            autoComplete="email"
            placeholder="E-mail"
            className="border border-gray-300 rounded-xl p-4"
          />

          <label htmlFor="senha-login" className="sr-only">
            Senha
          </label>
          <input
            id="senha-login"
            type="password"
            autoComplete="current-password"
            placeholder="Senha"
            className="border border-gray-300 rounded-xl p-4"
          />

          <button
            type="button"
            className="bg-purple-600 text-white py-4 rounded-xl font-semibold"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
