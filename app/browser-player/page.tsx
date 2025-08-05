export default function BrowserPlayer() {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Browser Player
      </h1>

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
    </div>
  );
}
