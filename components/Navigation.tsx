"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 20px",
          position: "relative",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#667eea",
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="rewindtty logo"
            width={200}
            height={50}
            style={{
              maxWidth: "200px",
              height: "50px",
            }}
          />
        </Link>

        <button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "5px",
          }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#333",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Home
          </Link>

          <Link
            href="/docs"
            style={{
              color: "#333",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Docs
          </Link>

          <Link
            href="/browser-player"
            style={{
              color: "#333",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Browser Player
          </Link>

          <a
            href="https://github.com/rewindtty/rewindtty"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#333",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            GitHub
          </a>
        </div>

        {isMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "500",
                padding: "0.5rem 0",
              }}
            >
              Home
            </Link>

            <Link
              href="/docs"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "500",
                padding: "0.5rem 0",
              }}
            >
              Docs
            </Link>

            <Link
              href="/browser-player"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "500",
                padding: "0.5rem 0",
              }}
            >
              Browser Player
            </Link>

            <a
              href="https://github.com/rewindtty/rewindtty"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "500",
                padding: "0.5rem 0",
              }}
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
