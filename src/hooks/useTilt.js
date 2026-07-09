import { useRef, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const useTilt = () => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handlePointerMove = (e) => {
      const rect = card.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const relativeX = (mouseX / width) - 0.5;
      const relativeY = (mouseY / height) - 0.5;

      const maxRotation = 8;
      
      // Temporarily disable CSS transitions during active mouse movement to avoid lag
      card.style.transition = 'none';

      x.set(relativeX * maxRotation);
      y.set(-relativeY * maxRotation);
    };

    const handlePointerLeave = () => {
      // Re-enable transition for smooth centering
      card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      x.set(0);
      y.set(0);
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [x, y]);

  useEffect(() => {
    const unsubscribeX = rotateX.on('change', (latestX) => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${latestX}deg) rotateY(${rotateY.get()}deg)`;
      }
    });

    const unsubscribeY = rotateY.on('change', (latestY) => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${latestY}deg)`;
      }
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [rotateX, rotateY]);

  return cardRef;
};

export default useTilt;
