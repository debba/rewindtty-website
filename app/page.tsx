import Image from "next/image";
import Link from "next/link";
import {GitHubStats} from "@/components/GitHubStats";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>rewindtty</h1>
          <p>
            A terminal session recorder and replayer written in C that allows
            you to capture and replay terminal sessions with precise timing.
          </p>
          <GitHubStats repoName={"rewindtty"}/>
          <div className="cta-buttons">
            <Link href="#installation" className="btn btn-primary">
              Get Started
            </Link>
            <a
              href="https://github.com/rewindtty/rewindtty"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="demo-section section">
        <div className="container">
          <h2>See it in Action</h2>
          <div className="demo-video">
            <Image
              src="/assets/images/record.gif"
              alt="rewindtty demo"
              width={600}
              height={475}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎬 Record Sessions</h3>
              <p>
                Capture all terminal input/output with accurate timing
                information for complete session recording.
              </p>
            </div>
            <div className="feature-card">
              <h3>▶️ Replay Sessions</h3>
              <p>
                Play back recorded sessions with original timing, providing an
                authentic terminal experience.
              </p>
            </div>
            <div className="feature-card">
              <h3>📊 Session Analysis</h3>
              <p>
                Analyze recorded sessions with detailed statistics, performance
                insights, and optimization suggestions.
              </p>
            </div>
            <div className="feature-card">
              <h3>🌐 Browser Player</h3>
              <p>
                Advanced web-based player with interactive timeline, bookmarks,
                and modern controls.
              </p>
            </div>
            <div className="feature-card">
              <h3>📄 JSON Format</h3>
              <p>
                Sessions stored in structured JSON format for easy parsing and
                integration with other tools.
              </p>
            </div>
            <div className="feature-card">
              <h3>⚡ Lightweight</h3>
              <p>
                Minimal dependencies, written in pure C with minimal memory
                footprint and high performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="installation section" id="installation">
        <div className="container">
          <h2>Installation</h2>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            Prerequisites
          </h3>
          <ul style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
            <li>GCC compiler</li>
            <li>GNU Make</li>
            <li>Standard C library with GNU extensions</li>
            <li>Git (for cloning project and submodules)</li>
          </ul>

          <h3 style={{ marginBottom: "1rem" }}>Clone the Repository</h3>
          <p style={{ marginBottom: "1rem" }}>
            This project uses cJSON as a Git submodule. Make sure to clone with
            submodules:
          </p>
          <div className="code-block">
            git clone --recurse-submodules
            https://github.com/rewindtty/rewindtty.git
          </div>

          <p style={{ marginBottom: "1rem" }}>
            If you already cloned without submodules:
          </p>
          <div className="code-block">
            git submodule update --init --recursive
          </div>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Build</h3>
          <div className="code-block">make</div>

          <p style={{ marginTop: "1rem" }}>
            This creates the executable at <code>build/rewindtty</code>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Usage</h2>

          <h3 style={{ marginBottom: "1rem" }}>Recording a Session</h3>
          <div className="code-block">
            ./build/rewindtty record [--interactive] [file]
          </div>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            Replaying a Session
          </h3>
          <div className="code-block">./build/rewindtty replay [file]</div>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            Analyzing a Session
          </h3>
          <div className="code-block">./build/rewindtty analyze [file]</div>

          <p style={{ marginTop: "2rem" }}>
            For detailed usage instructions and advanced features, visit the{" "}
            <a
              href="https://github.com/rewindtty/rewindtty"
              style={{ color: "#667eea" }}
            >
              GitHub repository
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <h2>Interactive vs Legacy Mode</h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "2rem",
              }}
            >
              <thead>
                <tr style={{ background: "#667eea", color: "white" }}>
                  <th style={{ padding: "1rem", textAlign: "left" }}>
                    Feature
                  </th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>
                    Interactive Mode
                  </th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>
                    Legacy Mode
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "1rem", fontWeight: "bold" }}>
                    Recording Style
                  </td>
                  <td style={{ padding: "1rem" }}>
                    Real-time shell interaction
                  </td>
                  <td style={{ padding: "1rem" }}>
                    Command-by-command capture
                  </td>
                </tr>
                <tr
                  style={{
                    borderBottom: "1px solid #ddd",
                    background: "#f9f9f9",
                  }}
                >
                  <td style={{ padding: "1rem", fontWeight: "bold" }}>
                    Replay Experience
                  </td>
                  <td style={{ padding: "1rem" }}>Live terminal emulation</td>
                  <td style={{ padding: "1rem" }}>
                    Step-by-step command replay
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "1rem", fontWeight: "bold" }}>
                    Session Analysis
                  </td>
                  <td style={{ padding: "1rem" }}>❌ Not available</td>
                  <td style={{ padding: "1rem" }}>
                    ✅ Full analysis with statistics
                  </td>
                </tr>
                <tr
                  style={{
                    borderBottom: "1px solid #ddd",
                    background: "#f9f9f9",
                  }}
                >
                  <td style={{ padding: "1rem", fontWeight: "bold" }}>
                    Browser Player
                  </td>
                  <td style={{ padding: "1rem" }}>✅ Compatible</td>
                  <td style={{ padding: "1rem" }}>✅ Compatible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
