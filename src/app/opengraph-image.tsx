import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Social share image (WhatsApp, LinkedIn, Facebook, X...). Generated at build time.
export const alt = "Deluve — Software, automation and data for growing businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/favicons/favicon-512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(37,99,235,0.35), transparent 45%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={88} height={88} style={{ borderRadius: 20 }} alt="" />
          <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Deluve</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2, maxWidth: 980 }}>
            We build the software that makes your business grow.
          </div>
          <div style={{ fontSize: 30, color: "#94a3b8" }}>
            Product development · Automation · Data & BI · Digital strategy
          </div>
        </div>
      </div>
    ),
    size
  );
}
