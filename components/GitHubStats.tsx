"use client";

import React, {useEffect, useState} from "react";

interface GitHubStats {
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GithubBadgeStyleProps {
    backgroundColor?: string;
    color?: string;
}

export const GitHubStats: React.FC<{ repoName: string, style? : GithubBadgeStyleProps }> = ({repoName, style}) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/rewindtty/${repoName}`
        );
        const data = await response.json();
        setStats({
          stargazers_count: data.stargazers_count,
          forks_count: data.forks_count,
          updated_at: data.updated_at,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const formatDate = (dateString: string) => {
      console.log({dateString})
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="github-badges">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: style?.backgroundColor || "rgba(255, 255, 255, 0.1)",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            color: style?.color || "white",
            marginRight: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="github-badges">
      <a
        href={`https://github.com/rewindtty/${repoName}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: style?.backgroundColor || "rgba(255, 255, 255, 0.1)",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          color: style?.color || "white",
          textDecoration: "none",
          marginRight: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12" />
        </svg>
        Star on GitHub ({stats?.stargazers_count || 0})
      </a>
      <a
          href={`https://github.com/rewindtty/${repoName}/fork`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: style?.backgroundColor || "rgba(255, 255, 255, 0.1)",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          color: style?.color || "white",
          textDecoration: "none",
          marginRight: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12" />
        </svg>
        Fork ({stats?.forks_count || 0})
      </a>
      <a
          href={`https://github.com/rewindtty/${repoName}/commits/main`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
            background: style?.backgroundColor || "rgba(255, 255, 255, 0.1)",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
            color: style?.color || "white",
          textDecoration: "none",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        Last Update:{" "}
        {stats?.updated_at ? formatDate(stats.updated_at) : "Loading..."}
      </a>
    </div>
  );
}
