import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handlePointerOver);
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handlePointerOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - (isHovering ? 5 : 4)}px, ${position.y - (isHovering ? 5 : 4)}px)`,
          width: isHovering ? '10px' : '8px',
          height: isHovering ? '10px' : '8px',
          backgroundColor: isHovering ? '#ffffff' : '#c8c5cb',
          boxShadow: isHovering ? '0 0 12px #ffffff' : '0 0 8px rgba(200, 197, 203, 0.6)',
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out"
        style={{
          transform: `translate(${trailingPos.x - (isHovering ? 24 : 16)}px, ${trailingPos.y - (isHovering ? 24 : 16)}px)`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(200, 197, 203, 0.35)',
          backgroundColor: isHovering ? 'rgba(200, 197, 203, 0.05)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(200, 197, 203, 0.2)' : 'none',
        }}
      />
    </div>
  );
};
