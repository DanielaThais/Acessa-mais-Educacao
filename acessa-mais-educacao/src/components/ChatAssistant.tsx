import { MessageCircle } from "lucide-react";

export default function ChatAssistant() {
  return (
    <section className="bg-white rounded-3xl shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-purple-100 p-4 rounded-2xl">
          <MessageCircle className="text-purple-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Assistente Virtual
          </h2>

          <p className="text-gray-500">
            Tire dúvidas rapidamente.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4">
        <p className="text-gray-700">
          👋 Olá! Como posso ajudar você?
        </p>
      </div>
    </section>
  );
}