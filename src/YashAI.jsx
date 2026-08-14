import React, { useState, useEffect, useRef } from "react";

const suggestedQuestions = [
  "Who is Yash?",
  "What are Yash's strongest projects?",
  "Tell me about the fraud detection project",
  "What skills does Yash have?",
];

export default function YashAI() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm YashAI 👋\n\nI can tell you about Yash's skills, projects, experience and background.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(customQuestion = null) {
    const question = (customQuestion || input).trim();

    if (!question || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error("YashAI error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating AI Button */}
      {!isOpen && (
        <button
          className="yash-ai-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open YashAI"
        >
          <span className="yash-ai-launcher-glow"></span>

          <span className="yash-ai-launcher-icon">
            ✦
          </span>

          <span className="yash-ai-launcher-text">
            Ask YashAI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="yash-ai-container">

          {/* Header */}
          <div className="yash-ai-header">

            <div className="yash-ai-profile">

              <div className="yash-ai-avatar">
                <span>Y</span>
                <div className="yash-ai-avatar-glow"></div>
              </div>

              <div>
                <div className="yash-ai-title">
                  YashAI
                  <span className="yash-ai-live-dot"></span>
                </div>

                <div className="yash-ai-subtitle">
                  Yash's personal AI assistant
                </div>
              </div>

            </div>

            <button
              className="yash-ai-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close YashAI"
            >
              ×
            </button>

          </div>

          {/* Messages */}
          <div className="yash-ai-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`yash-ai-message-row ${
                  message.role === "user"
                    ? "yash-ai-message-user-row"
                    : ""
                }`}
              >

                {message.role === "assistant" && (
                  <div className="yash-ai-mini-avatar">
                    Y
                  </div>
                )}

                <div
                  className={`yash-ai-message ${
                    message.role === "user"
                      ? "yash-ai-user"
                      : "yash-ai-assistant"
                  }`}
                >
                  {message.content}
                </div>

              </div>
            ))}

            {loading && (
              <div className="yash-ai-message-row">

                <div className="yash-ai-mini-avatar">
                  Y
                </div>

                <div className="yash-ai-message yash-ai-assistant">
                  <div className="yash-ai-thinking">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && !loading && (
            <div className="yash-ai-suggestions">

              <div className="yash-ai-suggestions-title">
                Explore Yash
              </div>

              <div className="yash-ai-suggestion-list">

                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => sendMessage(question)}
                    className="yash-ai-suggestion"
                  >
                    {question}
                    <span>→</span>
                  </button>
                ))}

              </div>

            </div>
          )}

          {/* Input */}
          <div className="yash-ai-input-wrapper">

            <div className="yash-ai-input-box">

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about Yash..."
                rows={1}
                disabled={loading}
              />

              <button
                className="yash-ai-send"
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                aria-label="Send message"
              >
                ↑
              </button>

            </div>

            <div className="yash-ai-disclaimer">
              YashAI · Powered by AI · Ask about Yash
            </div>

          </div>

        </div>
      )}
    </>
  );
}