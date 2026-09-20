"use client";

import { FormEvent, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const API_URL =
  "https://dubaideiskur-chatbot.wisdomfreelancer.workers.dev/";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Merhaba. Dubai’de şirket kuruluşu ve iş yapma konusunda size yardımcı olabilirim. Nasıl yardımcı olabilirim?"
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  async function sendMessage(e: FormEvent) {
    e.preventDefault();

    const message = input.trim();

    if (!message || loading) return;

    const previousMessages = messages;

    const updatedMessages: Message[] = [
      ...previousMessages,
      {
        role: "user",
        content: message
      }
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message,
          history: previousMessages.slice(-8)
        })
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.answer ||
            "Şu anda cevap oluşturamıyorum. WhatsApp üzerinden bize ulaşabilirsiniz: +971 50 342 1668"
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Şu anda bağlantıda kısa süreli bir sorun var. WhatsApp üzerinden bize ulaşabilirsiniz: +971 50 342 1668"
        }
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-[70] flex h-[560px] max-h-[72vh] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-[24px] border border-ink/10 bg-white shadow-2xl sm:bottom-24 sm:right-6">
          <div className="flex items-center justify-between bg-night px-5 py-4 text-white">
            <div>
              <p className="font-bold">Dubai’de İş Kur AI</p>
              <p className="mt-0.5 text-xs text-white/65">
                7/24 AI danışman
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-white/20"
              aria-label="Sohbeti kapat"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-sand p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-palm px-4 py-3 text-sm leading-6 text-white"
                      : "max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm leading-6 text-ink shadow-sm"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 text-sm text-ink/60 shadow-sm">
                  Yazıyor...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-ink/10 bg-white p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Sorunuzu yazın..."
                rows={1}
                className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-ink/10 px-4 py-3 text-sm text-ink outline-none focus:border-palm"
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="min-h-11 rounded-xl bg-palm px-4 text-sm font-bold text-white disabled:opacity-40"
              >
                Gönder
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] leading-4 text-ink/45">
              AI tarafından verilen bilgiler genel bilgilendirme amaçlıdır.
            </p>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-20 right-4 z-[65] flex min-h-14 items-center gap-2 rounded-full bg-night px-5 py-3 text-sm font-black text-white shadow-2xl transition hover:bg-palm sm:bottom-6 sm:right-6"
        aria-label="AI danışmana sor"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-night">
          AI
        </span>
        <span>AI Danışmana Sor</span>
      </button>
    </>
  );
}
