'use client';
import React, { useEffect, useRef } from 'react';

type Props = {
  interactive?: boolean;       // mouse interaction on/off
  density?: number;            // nodes per pixel (area * density => node count)
  maxNodes?: number;           // safety cap
  colors?: string[];           // palette
  maxDistance?: number;        // connection threshold
};

export default function ActiveNeuralBackground({
  interactive = true,
  density = 0.00008,
  maxNodes = 180,
  colors = ['#1DB954', '#4892DB', '#8B5CF6'],
  maxDistance = 160,
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef({
    nodes: [] as any[],
    mouse: { x: -9999, y: -9999, active: false },
    running: true,
  });

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    // sizing helper
    function resize() {
      const w = Math.max(300, window.innerWidth);
      const h = Math.max(300, window.innerHeight);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes(w, h);
    }

    // initialize nodes based on area and density
    function initNodes(width: number, height: number) {
      const area = width * height;
      const target = Math.min(maxNodes, Math.max(18, Math.floor(area * density)));
      const nodes: any[] = [];
      for (let i = 0; i < target; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (0.6 + Math.random() * 0.9),
          vy: (Math.random() - 0.5) * (0.6 + Math.random() * 0.9),
          r: 1.8 + Math.random() * 3.5,
          hue: colors[i % colors.length],
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.06,
        });
      }
      stateRef.current.nodes = nodes;
    }

    // mouse handlers for attractor
    function onMove(e: MouseEvent) {
      stateRef.current.mouse.active = true;
      stateRef.current.mouse.x = e.clientX;
      stateRef.current.mouse.y = e.clientY;
    }
    function onLeave() {
      stateRef.current.mouse.active = false;
      stateRef.current.mouse.x = -9999;
      stateRef.current.mouse.y = -9999;
    }

    let animationId = 0;
    let lastT = performance.now();

    function draw(t: number) {
      const { nodes, mouse, running } = stateRef.current;
      if (!running) return;

      const dt = Math.min(40, t - lastT) / 16.666; // normalized (~1 step per frame)
      lastT = t;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // clear with slight transparent overlay to create motion trails
      ctx.clearRect(0, 0, w, h);

      // soft background vignette
      const base = ctx.createLinearGradient(0, 0, w, h);
      base.addColorStop(0, 'rgba(6,10,25,1)');
      base.addColorStop(1, 'rgba(8,12,30,1)');
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      // update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // pulsate radius
        n.phase += n.pulseSpeed * dt;
        const pulse = 0.6 + Math.sin(n.phase) * 0.6;

        // mouse attraction (subtle)
        if (interactive && mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < 250000) {
            const dist = Math.sqrt(dist2) || 1;
            const force = (1 - Math.min(dist / 600, 1)) * 0.35;
            n.vx += (dx / dist) * force * 0.2;
            n.vy += (dy / dist) * force * 0.2;
          }
        }

        // apply velocity with slight damping
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        n.vx *= 0.995;
        n.vy *= 0.995;

        // wrap-around edges (soft)
        if (n.x < -60) n.x = w + 60;
        if (n.x > w + 60) n.x = -60;
        if (n.y < -60) n.y = h + 60;
        if (n.y > h + 60) n.y = -60;

        // draw glow radial
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 16);
        grd.addColorStop(0, hexToRgba(n.hue, 0.95 * (0.6 + pulse * 0.4)));
        grd.addColorStop(0.2, hexToRgba(n.hue, 0.18 * (0.6 + pulse * 0.4)));
        grd.addColorStop(0.6, hexToRgba(n.hue, 0.06));
        grd.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (4 + pulse * 4), 0, Math.PI * 2);
        ctx.fill();
      }

      // draw connecting lines - use squared distance for performance
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < maxDistance * maxDistance) {
            const alpha = 0.35 * (1 - dist2 / (maxDistance * maxDistance));
            // blend based on colors by using lighter composition and semi-transparent stroke
            ctx.strokeStyle = blendStroke(a.hue, b.hue, alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    // helper convert hex to rgba string with alpha (accepts hex or css color)
    function hexToRgba(hex: string, alpha: number) {
      // accept CSS color names or hex — assume hex like #rrggbb
      if (hex.startsWith('#') && (hex.length === 7 || hex.length === 4)) {
        let r: number, g: number, b: number;
        if (hex.length === 7) {
          r = parseInt(hex.slice(1, 3), 16);
          g = parseInt(hex.slice(3, 5), 16);
          b = parseInt(hex.slice(5, 7), 16);
        } else {
          r = parseInt(hex[1] + hex[1], 16);
          g = parseInt(hex[2] + hex[2], 16);
          b = parseInt(hex[3] + hex[3], 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      // fallback
      return `rgba(255,255,255,${alpha})`;
    }

    function blendStroke(h1: string, h2: string, alpha: number) {
      // simple midpoint color by averaging rgb components
      const rgb1 = parseHex(h1);
      const rgb2 = parseHex(h2);
      const r = Math.round((rgb1[0] + rgb2[0]) / 2);
      const g = Math.round((rgb1[1] + rgb2[1]) / 2);
      const b = Math.round((rgb1[2] + rgb2[2]) / 2);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function parseHex(hex: string) {
      if (!hex.startsWith('#')) return [255, 255, 255];
      if (hex.length === 7) {
        return [
          parseInt(hex.slice(1, 3), 16),
          parseInt(hex.slice(3, 5), 16),
          parseInt(hex.slice(5, 7), 16),
        ];
      }
      if (hex.length === 4) {
        return [
          parseInt(hex[1] + hex[1], 16),
          parseInt(hex[2] + hex[2], 16),
          parseInt(hex[3] + hex[3], 16),
        ];
      }
      return [255, 255, 255];
    }

    // pause when not visible to save CPU
    const onVisibility = () => {
      stateRef.current.running = document.visibilityState === 'visible';
      if (stateRef.current.running) {
        lastT = performance.now();
        animationId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animationId);
      }
    };

    // event listeners
    window.addEventListener('resize', resize);
    if (interactive) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseleave', onLeave);
    }
    document.addEventListener('visibilitychange', onVisibility);

    // initial setup and start
    resize();
    animationId = requestAnimationFrame(draw);

    // cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (interactive) {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseleave', onLeave);
      }
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(animationId);
    };
  }, [density, maxNodes, colors, interactive, maxDistance]);

  // full-screen canvas, non-interactive pointer events
  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}

