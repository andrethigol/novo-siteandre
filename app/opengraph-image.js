import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PixelRise - Agencia de Marketing Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0D0D0D",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,255,142,0.25) 0%, rgba(212,255,142,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 14, height: 46, background: "#D4FF8E", borderRadius: 2 }} />
            <div style={{ width: 14, height: 70, background: "#D4FF8E", borderRadius: 2, marginTop: -24 }} />
            <div style={{ width: 14, height: 96, background: "#F5F5F2", borderRadius: 2, marginTop: -50 }} />
          </div>
          <div style={{ fontSize: 42, fontWeight: 700, color: "#ffffff", display: "flex" }}>
            Pixel<span style={{ color: "#D4FF8E" }}>Rise</span>
          </div>
        </div>
        <div style={{ fontSize: 54, fontWeight: 700, color: "#ffffff", maxWidth: 900, lineHeight: 1.15, display: "flex" }}>
          Sites, lojas virtuais e trafego pago com foco em resultado.
        </div>
        <div style={{ fontSize: 26, color: "#93938C", marginTop: 28, display: "flex" }}>
          Agencia de marketing digital - Atendimento 100% remoto - Todo o Brasil
        </div>
      </div>
    ),
    { ...size }
  );
}