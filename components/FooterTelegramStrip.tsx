import { useEffect, useRef } from "react";

export default function FooterTelegramStrip() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const icon = new Image();
    icon.src = "/icons/telegram-footer.svg";

    const particles: any[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    function createParticle() {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: 16 + Math.random() * 12,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.4 + Math.random() * 0.6,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.y -= p.speed;
        ctx.globalAlpha = p.opacity;
        ctx.drawImage(icon, p.x, p.y, p.size, p.size);

        if (p.y < -50) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    icon.onload = () => {
      setInterval(createParticle, 300);
      animate();
    };

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-12 overflow-hidden bg-[#000000] hover:bg-black">
      <a
        href="https://t.me/fatykhova_va"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 w-full h-full flex items-center justify-center
                    transition-colors"
      >
        <p className="text-xs tracking-wide text-light/60 hover:text-black transition-colors">
          Разработка сайта
        </p>
      </a>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />
    </div>
  );
}