import Layout from "../components/Layout";
import CommentSection from "../components/CommentSection";

export default function Aula() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Empregabilidade e Inclusão Social
      </h1>

      <div className="bg-white rounded-3xl shadow p-6">
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe className="w-full h-96" src="https://www.youtube.com/embed/QIeDnDRoaP8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl">
            Legendas
          </button>

          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl">
            Libras
          </button>

          <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
            Áudio Explicativo
          </button>

          <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl">
            Fonte Ampliada
          </button>
        </div>

        <CommentSection />
      </div>
    </Layout>
  );
}