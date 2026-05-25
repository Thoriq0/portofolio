import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top, rgba(56,189,248,0.28), transparent 28%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.28), transparent 24%), linear-gradient(180deg, #04060f 0%, #050816 34%, #070b1f 100%)",
          color: "#f8fbff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "24px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(232,244,255,0.76)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              width: "40px",
              padding: "14px",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(8,12,24,0.72)",
            }}
          >
            <span style={{ height: "10px", width: "10px", borderRadius: "999px", background: "#7dd3fc" }} />
            <span style={{ height: "10px", width: "10px", borderRadius: "999px", background: "#ffffff" }} />
            <span style={{ height: "10px", width: "10px", borderRadius: "999px", background: "#c4b5fd" }} />
            <span style={{ height: "10px", width: "10px", borderRadius: "999px", background: "#38bdf8" }} />
          </div>
          Thoriq
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "860px" }}>
          <div style={{ fontSize: "78px", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.08em" }}>
            Fullstack Developer Portfolio
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.5, color: "rgba(232,244,255,0.7)" }}>
            Scalable systems, maintainable interfaces, and practical enterprise experience.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "rgba(232,244,255,0.6)",
          }}
        >
          <span>Next.js · TypeScript · Framer Motion · Tailwind</span>
          <span>thorfolio.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
