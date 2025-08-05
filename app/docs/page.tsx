export default function Docs() {
  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Documentation
      </h1>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <nav
          style={{
            background: "#f8f9fa",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "3rem",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Quick Navigation</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="#commands"
                style={{ color: "#667eea", textDecoration: "underline" }}
              >
                Commands
              </a>
            </li>
            <li>
              <a
                href="#modes"
                style={{ color: "#667eea", textDecoration: "underline" }}
              >
                Recording Modes
              </a>
            </li>
            <li>
              <a
                href="#file-format"
                style={{ color: "#667eea", textDecoration: "underline" }}
              >
                File Format
              </a>
            </li>
            <li>
              <a
                href="#browser-player"
                style={{ color: "#667eea", textDecoration: "underline" }}
              >
                Browser Player
              </a>
            </li>
            <li>
              <a
                href="#building"
                style={{ color: "#667eea", textDecoration: "underline" }}
              >
                Building from Source
              </a>
            </li>
          </ul>
        </nav>

        <section id="commands" style={{ marginBottom: "3rem" }}>
          <h2>Commands</h2>

          <div style={{ marginBottom: "2rem" }}>
            <h3>record</h3>
            <p>Start recording a new terminal session.</p>
            <div className="code-block">
              ./build/rewindtty record [--interactive] [file]
            </div>
            <p>
              <strong>Options:</strong>
            </p>
            <ul style={{ marginLeft: "2rem" }}>
              <li>
                <code>--interactive</code>: Enable interactive mode for
                real-time shell interaction
              </li>
              <li>
                <code>file</code>: Output file path (default: data/session.json)
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>replay</h3>
            <p>Replay a previously recorded session with original timing.</p>
            <div className="code-block">./build/rewindtty replay [file]</div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>analyze</h3>
            <p>
              Analyze a recorded session and generate comprehensive statistics.
            </p>
            <div className="code-block">./build/rewindtty analyze [file]</div>
            <p>
              <strong>Analysis includes:</strong>
            </p>
            <ul style={{ marginLeft: "2rem" }}>
              <li>Total commands executed and session duration</li>
              <li>Average time per command</li>
              <li>Most frequently used commands</li>
              <li>Slowest commands</li>
              <li>Commands that generated errors or warnings</li>
              <li>Optimization suggestions</li>
            </ul>
          </div>
        </section>

        <section id="modes" style={{ marginBottom: "3rem" }}>
          <h2>Recording Modes</h2>

          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            }}
          >
            <div className="feature-card">
              <h3>Interactive Mode</h3>
              <p>
                <strong>Best for:</strong> Full session recording and replay
              </p>
              <ul style={{ textAlign: "left", marginTop: "1rem" }}>
                <li>Real-time shell interaction capture</li>
                <li>Live terminal emulation during replay</li>
                <li>Compatible with browser player</li>
                <li>Higher memory usage</li>
                <li>No session analysis available</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3>Legacy Mode</h3>
              <p>
                <strong>Best for:</strong> Command analysis and optimization
              </p>
              <ul style={{ textAlign: "left", marginTop: "1rem" }}>
                <li>Command-by-command capture</li>
                <li>Step-by-step replay</li>
                <li>Full analysis with statistics</li>
                <li>Lightweight and efficient</li>
                <li>Structured JSON format</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="file-format" style={{ marginBottom: "3rem" }}>
          <h2>Session File Format</h2>
          <p>
            Sessions are stored in JSON format with timing information and
            terminal data to enable accurate replay.
          </p>

          <div className="code-block">
            {`{
  "version": "1.0",
  "timestamp": "2025-01-01T12:00:00Z",
  "mode": "interactive",
  "commands": [
    {
      "command": "ls -la",
      "timestamp": 1640995200,
      "duration": 0.234,
      "output": "total 64\\ndrwxr-xr-x...",
      "exit_code": 0
    }
  ],
  "metadata": {
    "shell": "/bin/bash",
    "terminal": "xterm-256color",
    "user": "username"
  }
}`}
          </div>
        </section>

        <section id="browser-player" style={{ marginBottom: "3rem" }}>
          <h2>Browser Player</h2>
          <p>
            The browser player provides enhanced features for session playback:
          </p>

          <div
            style={{
              background: "#f8f9fa",
              padding: "2rem",
              borderRadius: "8px",
            }}
          >
            <h3>Dependencies</h3>
            <ul style={{ marginLeft: "2rem" }}>
              <li>
                <strong>@xterm/xterm</strong>: Terminal emulation
              </li>
              <li>
                <strong>@xterm/addon-fit</strong>: Terminal fitting addon
              </li>
              <li>
                <strong>TypeScript</strong>: Type safety
              </li>
              <li>
                <strong>Vite</strong>: Build tool
              </li>
            </ul>
          </div>
        </section>

        <section id="building" style={{ marginBottom: "3rem" }}>
          <h2>Building from Source</h2>

          <h3>Compiler Flags</h3>
          <p>
            The project uses these GCC flags for optimal performance and
            debugging:
          </p>
          <ul style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
            <li>
              <code>-Wall -Wextra</code>: Enable comprehensive warnings
            </li>
            <li>
              <code>-std=gnu99</code>: Use GNU C99 standard
            </li>
            <li>
              <code>-g</code>: Include debugging symbols
            </li>
          </ul>

          <h3>Dependencies</h3>
          <ul style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
            <li>
              <strong>cJSON</strong>: JSON parsing (included as submodule)
            </li>
            <li>
              <strong>POSIX</strong>: System calls for terminal interaction
            </li>
          </ul>

          <h3>Clean Build</h3>
          <div className="code-block">make clean && make</div>
        </section>

        <div
          style={{
            background: "#fff3cd",
            padding: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #ffeaa7",
            marginTop: "3rem",
          }}
        >
          <h3 style={{ color: "#856404", marginBottom: "1rem" }}>
            ⚠️ Experimental Features
          </h3>
          <p style={{ color: "#856404" }}>
            Interactive mode is currently experimental and may have limitations
            or bugs. Please report any issues on the{" "}
            <a
              href="https://github.com/rewindtty/rewindtty/issues"
              style={{ color: "#667eea" }}
            >
              GitHub repository
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
