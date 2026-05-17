import Layout from "../components/Layout";

export default function Comunidade() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Comunidade
      </h1>

      <div className="bg-white rounded-3xl shadow p-6">
        <div className="bg-gray-100 rounded-2xl p-4 mb-4">
          <p className="font-bold">Maria</p>

          <p>
            Alguém pode me ajudar na aula de currículo?
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-4">
          <p className="font-bold">João</p>

          <p>
            Gostei bastante da aula de inteligência emocional.
          </p>
        </div>
      </div>
    </Layout>
  );
}