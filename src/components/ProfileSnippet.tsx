"use client";
import Image from "next/image";

export default function ProfileSnippet() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1.5rem 6rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2.5rem",
          padding: "2.5rem 3rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          transition: "border-color 0.3s ease, background 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--accent-line)";
          (e.currentTarget as HTMLDivElement).style.background =
            "var(--surface-hover)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--border)";
          (e.currentTarget as HTMLDivElement).style.background =
            "var(--surface)";
        }}
      >
        {/* Photo */}
        <div
          style={{
            position: "relative",
            width: "96px",
            height: "96px",
            flexShrink: 0,
            borderRadius: "3px",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src="/profilep_30.jpeg"
            alt="Philip Esigbone"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p className="label" style={{ marginBottom: "0.4rem" }}>
            Python Developer & Mechanical Engineer
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              color: "var(--fg)",
              marginBottom: "0.6rem",
            }}
          >
            Philip Esigbone
          </h2>

          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "var(--fg-mid)",
              maxWidth: "520px",
            }}
          >
            Specialising in backend systems, clean API design, and scalable
            workflows. Mechanical Engineering foundation — systems thinking
            applied to software.
          </p>
        </div>

        {/* Availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <span style={{ position: "relative", display: "flex", width: "10px", height: "10px" }}>
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#4ade80",
                opacity: 0.6,
                animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
            <span
              style={{
                position: "relative",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-flex",
              }}
            />
          </span>
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--fg-mid)",
            }}
          >
            Available
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}