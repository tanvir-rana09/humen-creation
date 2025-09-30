import React, { useEffect, useRef } from 'react';

export const ScrollStack = ({ 
  children, 
  stackTop = 15,
  cardGap = 20,
  scaleAmount = 0.02 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.stack-card');
    if (!cards || cards.length === 0) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const stackPosition = windowHeight * (stackTop / 100);
      
      const containerTop = containerRef.current.offsetTop;

      cards.forEach((card, index) => {
        const cardTop = containerTop + card.offsetTop;
        
        // Start sticking when card reaches stack position
        const startStick = cardTop - stackPosition - (cardGap * index);
        
        // Calculate when to unstick - give more space for last card
        const lastCard = cards[cards.length - 1];
        const lastCardTop = containerTop + lastCard.offsetTop;
        // Changed: Added more buffer space for proper alignment
        const endStick = lastCardTop - stackPosition - (cardGap * (cards.length - 1)) + windowHeight * 1.2;

        if (scrollTop >= startStick && scrollTop < endStick) {
          // Card is sticking
          const cardsAbove = Array.from(cards).slice(index + 1).filter((c, i) => {
            const cTop = containerTop + c.offsetTop;
            const cStart = cTop - stackPosition - (cardGap * (index + 1 + i));
            return scrollTop >= cStart;
          }).length;
          
          const scale = 1 - (cardsAbove * scaleAmount);
          
          card.style.position = 'sticky';
          card.style.top = `${stackPosition + (cardGap * index)}px`;
          card.style.transform = `scale(${scale})`;
          card.style.transformOrigin = 'top center';
          card.style.zIndex = index;
        } else if (scrollTop >= endStick) {
          card.style.position = 'relative';
          card.style.top = 'auto';
          card.style.transform = `scale(${1 - ((cards.length - 1 - index) * scaleAmount)})`;
          card.style.transformOrigin = 'top center';
          card.style.zIndex = index;
        } else {
          card.style.position = 'relative';
          card.style.top = 'auto';
          card.style.transform = 'scale(1)';
          card.style.transformOrigin = 'top center';
          card.style.zIndex = index;
        }
      });
    };

    handleScroll();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [stackTop, cardGap, scaleAmount]);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
};

export const StackCard = ({ children, className = '' }) => {
  return (
    <div className={`stack-card transition-transform duration-200 ease-out ${className}`}>
      {children}
    </div>
  );
};