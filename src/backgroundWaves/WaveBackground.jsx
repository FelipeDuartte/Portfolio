import { useEffect, useRef } from "react";

const waves = [
  { amplitude: 38, frequency: 0.012, speed: 0.012, phase: 0,   yBase: 0.35, opacity: 0.08, color: "#ffffff" },
  { amplitude: 28, frequency: 0.018, speed: 0.018, phase: 1.2, yBase: 0.45, opacity: 0.12, color: "#9ca3af" },
  { amplitude: 44, frequency: 0.010, speed: 0.009, phase: 2.4, yBase: 0.55, opacity: 0.10, color: "#6b7280" },
  { amplitude: 22, frequency: 0.022, speed: 0.022, phase: 0.7, yBase: 0.62, opacity: 0.14, color: "#ffffff" },
  { amplitude: 50, frequency: 0.008, speed: 0.007, phase: 3.5, yBase: 0.72, opacity: 0.07, color: "#d1d5db" },
  { amplitude: 30, frequency: 0.016, speed: 0.016, phase: 1.8, yBase: 0.80, opacity: 0.11, color: "#9ca3af" },
];

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function WaveBackground({ children }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);

      waves.forEach((wave) => {
        const rgb = hexToRgb(wave.color);
        const t = tRef.current;

        // Preenchimento
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 2) {
          const y =
            wave.yBase * H +
            Math.sin(x * wave.frequency + wave.phase + t * wave.speed * 60) *
              wave.amplitude;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(${rgb},${wave.opacity})`;
        ctx.fill();

        // Borda da onda
        ctx.beginPath();
        for (let x = 0; x <= W; x += 2) {
          const y =
            wave.yBase * H +
            Math.sin(x * wave.frequency + wave.phase + t * wave.speed * 60) *
              wave.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${rgb},${wave.opacity * 2.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      tRef.current += 0.016;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}