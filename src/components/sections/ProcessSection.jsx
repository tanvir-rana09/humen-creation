// ProcessSection.jsx - StoryTerrace-style scroll-triggered slider
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import vector2 from '../../assets/Vector 3-1.svg'
/* ---------- slides ---------- */
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

      // --- 1️⃣ Only stick when section top touches the viewport
      const buffer = 100;
      const shouldBeSticky = rect.top <= 0 && rect.bottom > windowHeight - buffer;

      setIsSticky(shouldBeSticky);

      // --- 2️⃣ Calculate internal progress only when sticky
      if (shouldBeSticky) {
        const scrolled = Math.min(Math.abs(rect.top), sectionHeight - windowHeight);
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);

        setScrollProgress(progress);

        const slideIndex = Math.min(
          Math.floor(progress * SLIDES.length),
          SLIDES.length - 1
        );
        setCurrentSlide(slideIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className=" relative"
      style={{ height: `calc(${(SLIDES.length) * 100}vh + 0vh)` }}

    >

      <div
        className={`${isSticky ? "fixed top-0 left-0 w-full" : "relative top-0 left-0 w-full"
          } h-screen bg-[#FF7A7A] flex flex-col justify-center items-center z-10 transition-all duration-300`}
        style={{
          opacity: scrollProgress > 0.99 ? 1 - (scrollProgress - 0.20) * 20 : 1,
        }}
      >
        <div>
          <img 
          src={vector2} 
          alt="vector" 
          className='!absolute -z-10 -top-[17.5rem] hidden xl:block left-[24rem] w-[16rem] -rotate-12 '/>
        </div>
        <div className="absolute top-8 left-0 right-0 text-center z-20">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Seamless. Secure. <span className="font-bold">Personal.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 mb-8 max-w-xl mx-auto text-lg"
          >
            Experience how simple it is to create your family's lasting legacy
            with complete control and security.
          </motion.p>

          {/* Progress indicators */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
            {SLIDES.map((s, i) => (
              <div key={s.key} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold transition-all duration-500 ${i === currentSlide
                    ? "bg-white text-[#FF7A7A]"
                    : "bg-transparent text-white"
                    }`}
                >
                  {i + 1}
                </div>
                {i < SLIDES.length - 1 && (
                  <div className="relative w-16 md:w-32 h-0.5 bg-white/40 ml-4">
                    <div
                      className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                      style={{
                        width:
                          i < currentSlide
                            ? "100%"
                            : i === currentSlide
                              ? `${(scrollProgress * SLIDES.length - currentSlide) * 100}%`
                              : "0%",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 h-[500px] mt-56 pt-8">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            const isPrevious = index < currentSlide;
            const isNext = index > currentSlide;

            let translateY = 0;
            let scale = 1;
            let zIndex = 10;

            if (isNext) {
              translateY = 100;
              zIndex = 5;
            } else if (isPrevious) {
              const slideProgress = scrollProgress * SLIDES.length - index;
              translateY = -10 * Math.min(slideProgress, 1);
              scale = 1 - 0.05 * Math.min(slideProgress, 1);
              zIndex = 5 + index;
            } else if (isActive) {
              const slideProgress = scrollProgress * SLIDES.length - index;
              translateY = 100 * (1 - Math.min(slideProgress, 1));
              zIndex = 15;
            }

            // Fade out everything smoothly near the end
            // const fadeOut = scrollProgress > 0.95 ? (1 - scrollProgress) * 10 : 1;

            return (
              <div
                key={slide.key}
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${translateY}%) scale(${scale})`,
                  zIndex,
                }}
              >
                <div className="bg-white rounded-[32px] shadow-[0_16px_64px_rgba(0,0,0,0.15)] h-full w-full">
                  <div className="grid lg:grid-cols-2 gap-0 h-full">
                    <div className="relative overflow-hidden rounded-l-[32px]">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center p-8 md:p-16">
                      <div>
                        <div className="inline-block bg-[#F5F5DC] text-[#8B7355] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                          {slide.step}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
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
