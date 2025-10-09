// ProcessSection.jsx - StoryTerrace-style scroll-triggered slider
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import vector2 from '../../assets/Vector 3-1.svg'
import AnimatedHeadingAndDescription from "../AnimatedHeadingAndDescription";

/* ---------- slides ---------- */
const SLIDES = [
  {
    key: "Unbox",
    step: "Step 1",
    title: "Secure Setup",
    sub: "Your family's stories are protected with enterprise-grade encryption and blockchain verification from day one.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=1200&fit=crop",
  },
  {
    key: "Record",
    step: "Step 2",
    title: "Seamless Experience",
    sub: "Effortlessly capture and organize memories with our intuitive interface designed for all generations.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&h=1200&fit=crop",
  },
  {
    key: "Start",
    step: "Step 3",
    title: "Personal Control",
    sub: "You decide what's shared and with whom. Your family's privacy is completely in your hands.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&h=1200&fit=crop",
  },
  {
    key: "Grow",
    step: "Step 4",
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

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-[#FFFCEA]"
      style={{ height: `calc(${SLIDES.length * 140}vh + 0vh)` }}
    >
      <div
        className="left-0 w-full h-screen bg-[#FFFCEA] flex flex-col justify-center items-center z-10"
        style={{
          position: isSticky ? 'fixed' : 'absolute',
          top: isSticky ? 0 : 'auto',
          bottom: !isSticky && scrollProgress > 0 ? 0 : 'auto'
        }}
      >
        <div>
          <img
            src={vector2}
            alt="vector"
            className='!absolute -z-10 -top-[17.5rem] hidden xl:block left-[24rem] w-[16rem] -rotate-12 '
          />
        </div>

        <div className="absolute top-8 left-0 right-0 text-center z-20">
          <AnimatedHeadingAndDescription
            heading={"Seamless. Secure. Personal."}
            headingClass="text-3xl md:text-5xl font-serif  mb-4 justify-center"
            description={
              "Join the waitlist and experience how simple it is to create your family's lasting legacy."}
            descriptionClass=" mb-8 max-w-xl mx-auto text-lg"
          />
          {/* Progress indicators - Connected style from ProcessSection2 */}
          <div className="flex items-center justify-center gap-0 mb-8">
            {SLIDES.map((s, i) => (
              <div key={s.key} className="flex items-center">
                <div
                  className={`w-20 xl:w-24 h-10 rounded-full border-2 flex items-center justify-center text-sm transition-all duration-500 relative !z-10 ${i === currentSlide
                      ? "bg-[#34414F] text-white border-[#34414F] scale-100"
                      : i < currentSlide
                        ? "bg-[#34414F] text-white border-[#34414F] scale-100"
                        : "bg-[#FFFCEA] text-[#34414F] border-[#34414F]/30 scale-100"
                    }`}
                >
                  {s.key}
                </div>
                {i < SLIDES.length - 1 && (
                  <div className="relative w-5 md:w-10 h-0.5 bg-[#34414F]/20">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#34414F] transition-all duration-500"
                      style={{
                        width: i < currentSlide ? '100%' :
                          i === currentSlide ? `${Math.min(((scrollProgress * NUMBER_OF_SLIDES) - i) * 100, 100)}%` : '0%'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 h-[500px] mt-24 lg:mt-48 xl:mt-56 pt-8 ">
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

            let translateY = 100;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (index === 0) {
              // First slide: Always fixed
              translateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = currentSlide === 0 ? 15 : 5;
            } else if (isNext) {
              // Next slides: Hidden below
              translateY = 150;
              opacity = 1;
              zIndex = 5 + index;
            } else if (isPrevious) {
              // Previous slides: Stack behind
              translateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 10 + index;
            } else if (isActive) {
              // Active slide: Slides up from below
              const slideProgress = scrollProgress * SLIDES.length - index;
              translateY = 1 * (1 - Math.min(slideProgress, 1));
              scale = 1;
              opacity = 1;
              zIndex = 20;
            }


            return (
              <div
                key={slide.key}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateY(${translateY}%) scale(${scale})`,
                  //opacity,
                  zIndex,
                }}
              >
                <div className="h-[550px] lg:h-full w-full">
                  <div className="grid lg:grid-cols-2 gap-0 h-full">
                    <div className="relative aspect-5/4 w-full">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="h-full w-full object-cover rounded-[32px] overflow-hidden rounded-b-4xl"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center p-4 md:p-16 bg-[#FFFCEA]">
                      <div className="space-y-2">
                        <div className="inline-block bg-[#FFE95A] text-gray-800 font-semibold px-5 py-2 rounded-full lg:mb-6  tracking-wider">
                          {slide.step}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 lg:mb-6 leading-tight">
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