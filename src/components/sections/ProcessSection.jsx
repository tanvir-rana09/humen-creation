import { useEffect, useRef, useState } from "react";

/* ---------- Configuration & Slides ---------- */
const SLIDES = [
  {
    key: "secure",
    step: "STEP 1",
    title: "Secure Setup",
    sub: "Your family's stories are protected with enterprise-grade encryption and blockchain verification from day one.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=1200&fit=crop",
  },
  {
    key: "seamless",
    step: "STEP 2", 
    title: "Seamless Experience",
    sub: "Effortlessly capture and organize memories with our intuitive interface designed for all generations.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&h=1200&fit=crop",
  },
  {
    key: "personal",
    step: "STEP 3",
    title: "Personal Control",
    sub: "You decide what's shared and with whom. Your family's privacy is completely in your hands.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&h=1200&fit=crop", 
  },
];

const NUMBER_OF_SLIDES = SLIDES.length;

export default function ProcessSection() {
  const sectionRef = useRef(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      
      const stickyStart = rect.top <= 0;
      const stickyEnd = rect.bottom <= windowHeight;
      const shouldBeSticky = stickyStart && !stickyEnd;
      
      setIsSticky(shouldBeSticky);

      if (shouldBeSticky) {
        const scrolled = Math.abs(rect.top);
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.max(0, Math.min(scrolled / maxScroll, 1));
        
        setScrollProgress(progress);
        
        const slideIndex = Math.min(
          Math.floor(progress * NUMBER_OF_SLIDES),
          NUMBER_OF_SLIDES - 1
        );
        setCurrentSlide(slideIndex);
      } else if (stickyEnd) {
        setScrollProgress(1);
        setCurrentSlide(NUMBER_OF_SLIDES - 1);
      } else {
        setScrollProgress(0);
        setCurrentSlide(0);
      }
    };

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
    handleScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="how-it-works" 
      className="bg-[#FFFCEA] relative"
      style={{ height: '400vh' }}
    >
      <div 
        className="left-0 w-full h-screen bg-[#FFFCEA] flex flex-col justify-center items-center z-10"
        style={{
          position: isSticky ? 'fixed' : 'absolute',
          top: isSticky ? 0 : 'auto',
          bottom: !isSticky && scrollProgress > 0 ? 0 : 'auto'
        }}
      >
        
        {/* Header */}
        <div className="absolute top-12 left-0 right-0 text-center z-20 px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#34414F] mb-3">
            Seamless. Secure. <span className="font-bold">Personal.</span>
          </h2>
          <p className="text-[#34414F]/80 mb-10 max-w-xl mx-auto text-base">
            Experience how simple it is to create your family's lasting legacy with complete control and security.
          </p>

          {/* Progress indicators - Connected lines */}
          <div className="flex items-center justify-center gap-0">
            {SLIDES.map((s, i) => (
              <div key={s.key} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-500 relative z-10 ${
                    i === currentSlide
                      ? "bg-[#34414F] text-white border-[#34414F] scale-110"
                      : i < currentSlide
                      ? "bg-[#34414F] text-white border-[#34414F] scale-100"
                      : "bg-transparent text-[#34414F] border-[#34414F]/30 scale-90"
                  }`}
                >
                  {i + 1}
                </div>
                {i < SLIDES.length - 1 && (
                  <div className="relative w-16 md:w-28 h-0.5 bg-[#34414F]/20">
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#34414F] transition-all duration-500"
                      style={{ 
                        width: i < currentSlide ? '100%' : 
                               i === currentSlide ? `${((scrollProgress - (i / NUMBER_OF_SLIDES)) / (1 / NUMBER_OF_SLIDES)) * 100}%` : '0%'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slides container - More gap from indicators */}
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 h-[450px] mt-20">
          {SLIDES.map((slide, index) => {
            const slideStart = index / NUMBER_OF_SLIDES;
            const slideEnd = (index + 1) / NUMBER_OF_SLIDES;
            const slideRange = 1 / NUMBER_OF_SLIDES;
            
            let slideProgress = 0;
            if (scrollProgress >= slideStart && scrollProgress < slideEnd) {
              slideProgress = (scrollProgress - slideStart) / slideRange;
            } else if (scrollProgress >= slideEnd) {
              slideProgress = 1;
            }

            const isActive = index === currentSlide;
            const isPrevious = index < currentSlide;
            const isNext = index > currentSlide;
            
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (isNext) {
              // Next slides: Hidden below
              translateY = 120;
              opacity = 0;
              scale = 0.9;
              zIndex = 5 + index;
            } else if (isPrevious) {
              // Previous slides: Completely hidden behind the active slide
              const distanceFromCurrent = currentSlide - index;
              translateY = -30 * distanceFromCurrent;
              scale = 1 - (0.15 * distanceFromCurrent);
              opacity = 0;
              zIndex = 5 - index;
            } else if (isActive) {
              // Current slide: Smooth entrance
              translateY = 120 * (1 - slideProgress);
              scale = 0.92 + (0.08 * slideProgress);
              opacity = slideProgress;
              zIndex = 20;
            }

            return (
              <div
                key={slide.key}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${translateY}%) scale(${scale})`,
                  opacity,
                  zIndex,
                  transformOrigin: 'center center',
                }}
              >
                <div className="bg-white rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.25)] h-full w-full overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0 h-full">
                    <div className="relative overflow-hidden rounded-l-[28px]">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-center p-6 md:p-12 lg:p-14">
                      <div>
                        <div className="inline-block bg-[#F5F5DC] text-[#8B7355] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                          {slide.step}
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                          {slide.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}