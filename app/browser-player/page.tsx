"use client";

import { useState } from "react";

export default function BrowserPlayer() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Browser Player
      </h1>

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <a
          href="https://play.rewindtty.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
            transition: "all 0.3s ease",
            marginBottom: "1rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(0, 123, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(0, 123, 255, 0.3)";
          }}
        >
          🎬 Prova il Browser Player
        </a>
        <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>
          Apri direttamente l'applicazione web
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          The browser player provides an advanced web-based interface for
          playing rewindtty sessions with enhanced features and modern controls.
        </p>

        <div className="features-grid" style={{ marginBottom: "3rem" }}>
          <div className="feature-card">
            <h3>🎯 Interactive Timeline</h3>
            <p>
              Visual timeline with scrubbing support for easy navigation through
              your session.
            </p>
          </div>
          <div className="feature-card">
            <h3>📋 Command List</h3>
            <p>
              Sidebar showing all executed commands with click-to-jump
              functionality.
            </p>
          </div>
          <div className="feature-card">
            <h3>🔖 Bookmarks</h3>
            <p>
              Add and manage bookmarks at specific moments in the session for
              quick access.
            </p>
          </div>
          <div className="feature-card">
            <h3>⚡ Playback Controls</h3>
            <p>
              Play, pause, restart, and speed adjustment (1x, 2x, 4x, 8x) for
              optimal viewing.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <img
            src="/assets/player.png"
            alt="Browser Player Interface"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onClick={() => setIsLightboxOpen(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
            Browser Player in action! (Clicca per ingrandire)
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            padding: "2rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Getting Started</h2>

          <h3 style={{ marginBottom: "1rem" }}>1. Clone the repository</h3>
          <div className="code-block">
            git clone https://github.com/rewindtty/browser_player.git
          </div>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            2. Install dependencies
          </h3>
          <div className="code-block">npm install</div>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            3. Start development server
          </h3>
          <div className="code-block">npm run dev</div>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            4. Build for production
          </h3>
          <div className="code-block">npm run build</div>
        </div>

        <div
          style={{
            background: "#e8f4f8",
            padding: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #b8daff",
          }}
        >
          <h3 style={{ color: "#0066cc", marginBottom: "1rem" }}>
            💡 Features
          </h3>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>
              <strong>File Loading:</strong> Drag-and-drop or file picker
              support for JSON session files
            </li>
            <li>
              <strong>Real-time Status:</strong> Display current command and
              session timing information
            </li>
            <li>
              <strong>Modern UI:</strong> Clean, responsive interface built with
              TypeScript and Vite
            </li>
            <li>
              <strong>Terminal Emulation:</strong> Uses xterm.js for accurate
              terminal rendering
            </li>
          </ul>
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://github.com/rewindtty/rewindtty/tree/main/browser_player"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Browser Player Source
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/assets/player.png"
              alt="Browser Player Interface - Vista ingrandita"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              aria-label="Chiudi lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
