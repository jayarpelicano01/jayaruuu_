import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Jay Ar Pelicano | Junior Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = readFileSync(
  join(process.cwd(), "public", "images", "logo", "jayaruuu_logo.png")
).toString("base64");
const logoSrc = `data:image/png;base64,${logo}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f7f5",
          color: "#111111",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#666666",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src={logoSrc}
              width={48}
              height={48}
              style={{ borderRadius: 9999 }}
              alt=""
            />
            <span>JAY AR PELICANO</span>
          </span>
          <span>@jayaruuu_</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          <span style={{ marginBottom: 16 }}>
            JUNIOR SOFTWARE DEVELOPER
          </span>
          <span>FULL-STACK DEVELOPER</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "#666666",
            borderTop: "2px solid #111111",
            paddingTop: 24,
          }}
        >
          <span>BUILDS PRACTICAL DIGITAL PRODUCTS</span>
          <span>jayaruuu_</span>
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}