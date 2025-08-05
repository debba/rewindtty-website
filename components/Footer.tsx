import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © 2025 Andrea Debernardi. Licensed under the {" "}
          <a href="https://github.com/debba/rewindtty/blob/main/LICENSE">
            MIT License
          </a>
          .
        </p>
        <p style={{ marginTop: "1rem" }}>
          This is a hobby project created for fun and learning purposes.{" "}
          <a href="https://github.com/debba/rewindtty/issues">Report issues</a>{" "}
          or contribute on GitHub!
        </p>
      </div>
    </footer>
  );
}
