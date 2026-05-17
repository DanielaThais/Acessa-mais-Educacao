import { MessageCircle } from "lucide-react";

export default function ChatAssistant() {
  return (
    <section className="bg-[var(--card)] rounded-3xl shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[var(--primary)] p-4 rounded-2xl">
          <MessageCircle className="text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Assistente Virtual
          </h2>

          <p className="text-[var(--context)]">
            Tire dúvidas rapidamente.
          </p>
        </div>
      </div>

      <div className="bg-[var(--card)] rounded-2xl p-4">
        <p className="text-[var(--context)]">
          👋 Olá! Como posso ajudar você?
        </p>
      </div>
    </section>
  );
}