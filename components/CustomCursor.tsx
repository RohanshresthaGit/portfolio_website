'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const orbitRef  = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const trailRef  = useRef<HTMLCanvasElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const mouse     = useRef({ x: 0, y: 0 });
  const ringPos   = useRef({ x: 0, y: 0 });
  const orbitPos  = useRef({ x: 0, y: 0 });
  const angle     = useRef(0);
  const isHover   = useRef(false);
  const trail     = useRef<{ x: number; y: number }[]>([]);
  const animRef   = useRef<number>(0);

  const [isMounted, setIsMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();
    mediaQuery.addEventListener?.('change', updateEnabled);
    return () => mediaQuery.removeEventListener?.('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!isMounted || !enabled) return;

    document.body.style.cursor = 'none';

    // Trail canvas
    const canvas = trailRef.current!;
    const ctx    = canvas.getContext('2d')!;
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x  = lerp(ringPos.current.x,  mouse.current.x, 0.1);
      ringPos.current.y  = lerp(ringPos.current.y,  mouse.current.y, 0.1);
      orbitPos.current.x = lerp(orbitPos.current.x, mouse.current.x, 0.06);
      orbitPos.current.y = lerp(orbitPos.current.y, mouse.current.y, 0.06);

      angle.current += isHover.current ? 0.055 : 0.022;
      const radius = isHover.current ? 30 : 22;

      ringRef.current!.style.transform =
        `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%,-50%)`;
      orbitRef.current!.style.transform =
        `translate(${orbitPos.current.x}px, ${orbitPos.current.y}px) translate(-50%,-50%)`;

      const px = orbitPos.current.x + Math.cos(angle.current) * radius;
      const py = orbitPos.current.y + Math.sin(angle.current) * radius;
      planetRef.current!.style.transform = `translate(${px}px, ${py}px) translate(-50%,-50%)`;

      // Comet trail — purple → blue gradient
      trail.current.push({ x: mouse.current.x, y: mouse.current.y });
      if (trail.current.length > 32) trail.current.shift();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 1; i < trail.current.length; i++) {
        const t  = i / trail.current.length;
        const p  = trail.current[i];
        const pp = trail.current[i - 1];
        const rr = Math.round(lerp(229, 156, t));
        const g  = Math.round(lerp(156, 178, t));
        const b  = 255;
        ctx.beginPath();
        ctx.moveTo(pp.x, pp.y);
        ctx.lineTo(p.x,  p.y);
        ctx.strokeStyle = `rgba(${rr},${g},${b},${t * 0.4})`;
        ctx.lineWidth   = t * 3;
        ctx.lineCap     = 'round';
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    // ── Event listeners ──────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      dotRef.current!.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;

      const target      = e.target as HTMLElement;
      const interactive = Boolean(
        target.closest('a,button,input,textarea,select,label,[role="button"],[tabindex]')
      );
      isHover.current = interactive;

      if (interactive) {
        dotRef.current!.style.width      = '10px';
        dotRef.current!.style.height     = '10px';
        dotRef.current!.style.boxShadow  = '0 0 14px 5px rgba(229,156,255,0.7)';
        ringRef.current!.style.width     = '54px';
        ringRef.current!.style.height    = '54px';
        ringRef.current!.style.borderColor = 'rgba(229,156,255,0.7)';
        orbitRef.current!.style.width    = '78px';
        orbitRef.current!.style.height   = '78px';
        planetRef.current!.style.background  = '#e59cff';
        planetRef.current!.style.boxShadow   = '0 0 6px 3px rgba(229,156,255,0.6)';
      } else {
        dotRef.current!.style.width      = '7px';
        dotRef.current!.style.height     = '7px';
        dotRef.current!.style.boxShadow  = '0 0 8px 3px rgba(186,156,255,0.6)';
        ringRef.current!.style.width     = '36px';
        ringRef.current!.style.height    = '36px';
        ringRef.current!.style.borderColor = 'rgba(186,156,255,0.5)';
        orbitRef.current!.style.width    = '58px';
        orbitRef.current!.style.height   = '58px';
        planetRef.current!.style.background  = '#9cb2ff';
        planetRef.current!.style.boxShadow   = '0 0 5px 2px rgba(156,178,255,0.55)';
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      dotRef.current!.style.width  = '4px';
      dotRef.current!.style.height = '4px';

      // Double ripple — purple then blue
      const rippleColors = [
        ['rgba(229,156,255,0.5)', 0],
        ['rgba(156,178,255,0.3)', 120],
      ] as const;

      rippleColors.forEach(([color, delay]) => {
        const el = document.createElement('div');
        el.style.cssText = `
          position: fixed; top: 0; left: 0;
          width: 60px; height: 60px;
          border-radius: 50%;
          border: 1px solid ${color};
          pointer-events: none;
          z-index: 99990;
          transform: translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%) scale(0.2);
          animation: portalRipple 0.75s ease-out ${delay}ms forwards;
        `;
        rippleRef.current!.appendChild(el);
        setTimeout(() => el.remove(), 900 + delay);
      });
    };

    const onMouseUp = () => {
      dotRef.current!.style.width  = isHover.current ? '10px' : '7px';
      dotRef.current!.style.height = isHover.current ? '10px' : '7px';
    };

    document.addEventListener('mousemove',  onMouseMove);
    document.addEventListener('mousedown',  onMouseDown);
    document.addEventListener('mouseup',    onMouseUp);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup',   onMouseUp);
      cancelAnimationFrame(animRef.current);
    };
  }, [isMounted, enabled]);

  if (!isMounted || !enabled) return null;

  const base: React.CSSProperties = {
    position:      'fixed',
    top:           0,
    left:          0,
    pointerEvents: 'none',
    willChange:    'transform',
  };

  return (
    <>
      {/* Comet trail */}
      <canvas
        ref={trailRef}
        style={{ ...base, zIndex: 99988, width: '100vw', height: '100vh' }}
      />

      {/* Dashed orbit (slowest) */}
      <div
        ref={orbitRef}
        style={{
          ...base,
          width:        '58px',
          height:       '58px',
          borderRadius: '50%',
          border:       '1px dashed rgba(156,178,255,0.18)',
          zIndex:       99989,
          transition:   'width 0.3s, height 0.3s',
        }}
      />

      {/* Orbiting planet */}
      <div
        ref={planetRef}
        style={{
          ...base,
          width:        '5px',
          height:       '5px',
          borderRadius: '50%',
          background:   '#9cb2ff',
          boxShadow:    '0 0 5px 2px rgba(156,178,255,0.55)',
          zIndex:       99994,
          transition:   'background 0.2s, box-shadow 0.2s',
        }}
      />

      {/* Ring (medium trail) */}
      <div
        ref={ringRef}
        style={{
          ...base,
          width:          '36px',
          height:         '36px',
          borderRadius:   '50%',
          border:         '1px solid rgba(186,156,255,0.5)',
          backdropFilter: 'blur(2px)',
          zIndex:         99995,
          transition:     'width 0.25s, height 0.25s, border-color 0.2s',
        }}
      />

      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        style={{
          ...base,
          width:        '7px',
          height:       '7px',
          borderRadius: '50%',
          background:   '#e59cff',
          boxShadow:    '0 0 8px 3px rgba(186,156,255,0.6)',
          zIndex:       99999,
          transition:   'width 0.15s, height 0.15s, box-shadow 0.2s',
        }}
      />

      {/* Ripple mount */}
      <div ref={rippleRef} style={{ ...base, zIndex: 99990 }} />

      <style>{`
        @keyframes portalRipple {
          0%   { opacity: 0.7; transform: translate(var(--px), var(--py)) translate(-50%,-50%) scale(0.2); }
          100% { opacity: 0;   transform: translate(var(--px), var(--py)) translate(-50%,-50%) scale(3.5); }
        }
        * { cursor: none !important; }
      `}</style>
    </>
  );
}