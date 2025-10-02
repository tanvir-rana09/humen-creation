import { useState, useEffect } from 'react';
import { BookOpen, Video, MessageCircle, ArrowRight, Check, ChevronDown, Megaphone, Settings, SquarePlay, LockKeyhole, LineSquiggle, Medal, FileText, ArrowLeft } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import convertion from './assets/convertion.png';
import flag from './assets/flag.png';
import old from './assets/old.png';
import Card from './components/Card';
import img1 from './assets/1.png';
import vector from './assets/Vector 34.png'
import vector2 from './assets/Vector 37 (1).svg'
import concierge from './assets/newcon.png';
import group from './assets/Group 1939.svg'
import family1 from './assets/family (1).png';
import family2 from './assets/family (2).png';
import family3 from './assets/family (3).png';
import vector3 from './assets/Vector 36.svg'
import Concierge from './components/ConciergeCardImage';
import FamilyCard from './components/FamilyCard';
import familyStory from './assets/familystory.png'
import { ScrollStack, StackCard } from './components/ScrollStack';
import FamilyStoryCard from './components/FamilyStoryCard';
import TestimonialCarousel from './components/footer';
import Nav from './components/Nav';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ForeverYOULanding() {

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const trustRef = useRef(null);
  const conciergeRef = useRef(null);
  const proofRef = useRef(null);
  const experienceRef = useRef(null);
  const familyRef = useRef(null);
  const processRef = useRef(null);

  // Alternative: Use a custom hook for better tracking
  const useElementInView = (ref, threshold = 0.1) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        {
          threshold,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, threshold]);

    return isInView;
  };

  // Then use it like this:
  const featuresInView = useElementInView(featuresRef, 0.2);
  const processInView = useElementInView(processRef, 0.2);
  const heroInView = useElementInView(heroRef, 0.3);
  const trustInView = useElementInView(trustRef, 0.2);
  const conciergeInView = useElementInView(conciergeRef, 0.2);
  const proofInView = useElementInView(proofRef, 0.2);
  const experienceInView = useElementInView(experienceRef, 0.2);
  const familyInView = useElementInView(familyRef, 0.2);


  return (
    <div className="min-h-screen">
      <Nav />
      <section ref={heroRef} className="pt-32 pb-40 px-8 bg-[#FFFCEA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="pt-8"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.15] mb-6">
              Your Story. Your Voice. Forever.
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-md">
              An authenticated digital version of you — so your loved ones and future generations can talk with you across time.
            </p>
            <p className="text-base text-gray-700 mb-10 leading-relaxed max-w-md">
              In an AI-saturated world, authenticity is the new trust. ForeverYOU makes sure your story is real, verified, and yours.
            </p>
            <div className="flex flex-col gap-4">
              <button className="bg-[#1a3e3e] text-white px-8 py-4 rounded-full hover:bg-[#2a4e4e]  shadow-sm text-sm font-medium w-fit">
                Join the Waitlist
              </button>
              <button className="border-2 border-gray-900 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50  flex items-center gap-2 group w-fit text-sm font-medium">
                See How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 " />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={{ delay: 0.2 }}
            className="relative "
          >
            <div className='rounded-[35px] shadow-xl cursor-pointer border-[3px] border-gray-900 -rotate-[8deg] hover:rotate-0 duration-500'>
              <div className="relative z-10 bg-[#FFFCEA]/95 rounded-[32px] rotate-[8deg] p-2.5 shadow-xl border-[3px] border-gray-900 h-[28rem] hover:rotate-0 duration-500">
                <div style={{
                  backgroundImage: `url(${old})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }} className=" rounded-[24px] overflow-hidden h-full p-6">

                  <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-md z-10">
                    <div className="text-[10px] font-semibold text-gray-800">Conversation Authenticity</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '84%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-900">84%</span>
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-500 mt-1">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between bg-white rounded-full w-[60%] mx-auto px-3 py-2 shadow-md absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full border-2 border-white">
                        <img src={convertion} alt="" className='w-full h-full object-contain rounded-full' />
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-[#fbbf24] text-gray-900 px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-[#f59e0b]">
                      <span className="text-gray-800">⚡</span>
                      Start a conversation
                    </button>
                    <div className='border rounded-full flex items-center gap-2 p-1 border-gray-200'>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#dc2626] to-[#ef4444] border-2 border-white flex items-center justify-center text-lg">
                        <img src={flag} alt="" className='w-full h-full object-contain rounded-full' />
                      </div>
                      <div>
                        <ChevronDown className='text-gray-200 w-5 h-5' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-40 px-8 relative">
        <div className='absolute -top-[6rem] right-[51.5rem] w-[18rem] h-48'>
          <img src={vector} alt="vector" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              className="relative order-2 md:order-1"
            >
              <Card img={img1} />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={fadeInRight}
              className="order-1 md:order-2"
            >
              <motion.h2
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6"
              >
                The <span className='text-[#FF702A]'>World's</span>
                <br />
                First  <span className='text-[#FF702A]'>Authenticated</span>
                <br /> Conversational <span className='text-[#FF702A]'>Biography</span>
              </motion.h2>

              <motion.p
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-base text-gray-700 mb-10 leading-relaxed"
              >
                ForeverYOU lets you create an interactive, verifiably authentic version of yourself — told in your own voice today, preserved for tomorrow. Soon, you'll also be able to appear as a video avatar.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-4 flex-col">
                  <div className="p-2.5 bg-white rounded-lg border-2 border-gray-200 flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      Conversational audio now; video avatars coming soon
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 flex-col">
                  <div className="p-2.5 bg-white rounded-lg border-2 border-gray-200 flex-shrink-0">
                    <Video className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      You decide what's shared, with whom, and when
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4 flex-col">
                  <div className="p-2.5 bg-white rounded-lg border-2 border-gray-200 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      Blockchain + encryption ensure authenticity & privacy
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section ref={trustRef} className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Because Memories Fade. Truth Shouldn't.
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            "We built ForeverYOU because stories get lost, and in a world where AI can fake anyone's voice or likeness, the truth is priceless. This is about preserving the people we love in the most authentic way possible — so their voice, their stories, and their personality can be part of our lives forever." — Jeremy Horne, Founder
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            className="grid md:grid-cols-4 gap-6"
          >
            <motion.div variants={scaleIn} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
              <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit"><Megaphone /></div>
              <h3 className="text-gray-900 mb-2">Privacy protected
                with encryption and blockchain</h3>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
              <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit"><Settings /></div>
              <h3 className="text-gray-900 mb-2">You decide what's
                shared, and with whom</h3>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
              <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit"><SquarePlay /></div>
              <h3 className="text-gray-900 mb-2">Original stories
                (audio or video) linked
                for authenticity</h3>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg ">
              <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit"><LockKeyhole /></div>
              <h3 className="text-gray-900 mb-2">Privacy protected
                with encryption and blockchain</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Concierge Section */}
      <section ref={conciergeRef} className=" py-48 px-8 overflow-hidden my-10 bg-[#FFFCEA] mx-auto max-w-7xl rounded-4xl relative" id="concierge">
        <div className='!absolute -top-2.5 right-[11.5rem] z-10 w-[18rem] h-48 hidden xl:block'>
          <img src={group} alt="vector" />
        </div>
        <div className="max-w-7xl mx-auto grid justify-between md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={conciergeInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
              <span className='font-bold'>ForeverYOU Concierge</span> <br />
              for families who want <br />
              the very best
            </h2>
            <p className=" text-gray-700 mb-8 text-sm">
              Our Platinum Concierge team personally guides you through the process of creating a ForeverYOU. From in-home recordings to beautifully curated archives, every detail is handled with care and discretion.
            </p>
            <button className="bg-[#1a3e3e] text-white px-8 py-3 rounded-full hover:bg-[#2a4e4e]  font-medium">
              Request Details
            </button>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={conciergeInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="relative"
          >
            <Concierge img={concierge} />
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section ref={proofRef} className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-left mb-16">
          <motion.h2
            initial="hidden"
            animate={proofInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl font-serif text-gray-900 mb-4"
          >
            It's more than just preserving<br /> memories.
            <span className="font-bold">We're preserving truth<br /> and legacy.</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={proofInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            In a world where AI can fake anyone's likeness, ForeverYOU provides proof:
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={proofInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={scaleIn} className="text-center border-2 border-gray-500 rounded-4xl p-3 flex flex-col ">
            <div className="rounded-2xl aspect-video mb-4 relative">
              <img src={family1} alt="family" className='rounded-3xl ' />
              <div className='bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center rotate-90 -translate-x-1/2 translate-y-1/2 text-gray-900'>
                <LineSquiggle className='text-gray-600 w-5 h-5' />
              </div>
            </div>
            <p className="text-sm text-gray-700 pt-5">Family members can confirm and validate stories together</p>
          </motion.div>
          <motion.div variants={scaleIn} className="text-center border-2 border-gray-500 rounded-4xl p-3 flex flex-col ">
            <div className="rounded-2xl aspect-video mb-4 relative">
              <img src={family2} alt="family" className='rounded-3xl ' />
              <div className='bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900'>
                <FileText className='text-gray-600 w-5 h-5' />
              </div>
            </div>
            <p className="text-sm text-gray-700 pt-5">Conversations link back to original recordings, photos, and journals</p>
          </motion.div>
          <motion.div variants={scaleIn} className="text-center border-2 border-gray-500 rounded-4xl p-3 flex flex-col ">
            <div className="rounded-2xl aspect-video mb-4 relative">
              <img src={family3} alt="family" className='rounded-3xl ' />
              <div className='bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900'>
                <Medal className='text-gray-600 w-5 h-5' />
              </div>
            </div>
            <p className="text-sm text-gray-700 pt-5">Patent-pending Authenticity Score shows how true-to-source each response is</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-16 px-8 bg-[#22463C] w-full max-w-7xl mx-auto rounded-4xl" id="experience">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-5xl font-serif text-white mb-4"
          >
            Experience it for yourself.
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-base"
          >
            Start a conversation with real ForeverYOU avatars — created from authentic life stories.
          </motion.p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={scaleIn} className="text-center border-gray-500 rounded-4xl p-3 flex flex-col ">
            <div className="rounded-2xl aspect-square mb-4 relative">
              <img src={family2} alt="family" className='rounded-3xl h-full object-cover' />
              <div className='bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900'>
                <ArrowLeft className='text-gray-600 w-5 h-5 rotate-180' />
              </div>
            </div>
            <h3 className='text-gray-100 font-semibold text-lg pt-5'>Barbara</h3>
            <p className="text-sm text-gray-400 pt-2">Passed away at 80, but her life stories and voice live on forever.</p>
          </motion.div>
          <motion.div variants={scaleIn} className="text-center border-gray-500 rounded-4xl p-3 flex flex-col ">
            <div className="rounded-2xl aspect-square mb-4 relative">
              <img src={family2} alt="family" className='rounded-3xl h-full object-cover' />
              <div className='bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900'>
                <ArrowLeft className='text-gray-600 w-5 h-5 rotate-180' />
              </div>
            </div>
            <h3 className='text-gray-100 font-semibold text-lg pt-5'>Jeremy</h3>
            <p className="text-sm text-gray-400 pt-2">ForeverYOU Founder, preserving his journey for his Son.</p>
          </motion.div>
          <motion.div variants={scaleIn} className="text-center border-gray-500 rounded-4xl p-3 flex flex-col ">
            <div className="rounded-2xl aspect-square mb-4 relative">
              <img src={family2} alt="family" className='rounded-3xl h-full object-cover' />
              <div className='bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900'>
                <ArrowLeft className='text-gray-600 w-5 h-5 rotate-180' />
              </div>
            </div>
            <h3 className='text-gray-100 font-semibold text-lg pt-5'>Len</h3>
            <p className="text-sm text-gray-400 pt-2">Forty years of life stories, now conversational and interactive.</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <button className="bg-teal-950/80 text-gray-100 px-10 py-3 rounded-full hover:bg-teal-950  text-sm font-medium">
            Join the waitlist → create yours
          </button>
        </motion.div>
      </section>

      {/* Family Section */}
      <section ref={familyRef} className="py-20 px-8 my-36">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={familyInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <FamilyCard img={concierge} />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={familyInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
              The family connection<br />
              gift of a lifetime
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              ForeverYOU ensures your parents' and grandparents' voices, wisdom, and stories are preserved in a way your family will regularly engage with.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={familyInView ? "visible" : "hidden"}
              className="space-y-4 mb-8"
            >
              <motion.div variants={fadeInRight} className="bg-white border-2 border-[#FFE95A] rounded-3xl">
                <div className="font-medium text-gray-900 border-l-4 p-4 rounded-2xl border-[#FFE95A] pl-2">
                  <p className='font-semibold text-lg'>For You</p>
                  <span className='text-gray-600'>Capture your life story in your own words.</span>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="bg-white border-2 border-[#FFE95A] rounded-3xl">
                <div className="font-medium text-gray-900 border-l-4 p-4 rounded-2xl border-[#FFE95A] pl-2">
                  <p className='font-semibold text-lg'>For Loved Ones</p>
                  <span className='text-gray-600'>Share memories that deepen connection today.</span>
                </div>
              </motion.div>
              <motion.div variants={fadeInRight} className="bg-white border-2 border-[#FFE95A] rounded-3xl">
                <div className="font-medium text-gray-900 border-l-4 p-4 rounded-2xl border-[#FFE95A] pl-2">
                  <p className='font-semibold text-lg'>For Future Generations</p>
                  <span className='text-gray-600'>Leave a voice they can trust, not just a name in a family tree.</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className=" bg-[#FFFCEA] ">
        <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
          <div className="text-center mb-16 relative">
            <div>
              <img src={vector2} alt="vector" className='!absolute -top-[20.5rem] hidden xl:block -left-[2.1rem] w-[16rem] -rotate-12 ' />
            </div>
            <motion.h2
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-5xl font-serif text-gray-900 mb-4"
            >
              Seamless. Secure. <span className="font-bold">Personal.</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8 max-w-md mx-auto"
            >
              Join the waitlist and experience how simple it is to create<br />
              your family's lasting legacy.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-5 xl:gap-10 "
            >
              <button className="px-6 text-sm xl:text-base py-2 z-20 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
                Unbox
              </button>
              <button className="px-6 text-sm xl:text-base py-2 z-20 bg-gray-800 text-white rounded-full hover:bg-gray-900">
                Record
              </button>
              <button className="px-6 text-sm xl:text-base py-2 z-20 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
                Start
              </button>
              <button className="px-6 text-sm xl:text-base py-2 z-20 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
                Grow
              </button>
              <div className='table h-0.5 bottom-5 mx-auto w-[25rem] xl:w-[30rem] absolute left-1/2 transform -translate-x-1/2 z-10 bg-gray-500 rounded-full'></div>
            </motion.div>
          </div>
        </div>

        <div className="px-8 " style={{ paddingBottom: '150vh' }}>
          <div className="max-w-4xl mx-auto ">
            <ScrollStack stackTop={10} cardGap={24} scaleAmount={0.03}>
              <StackCard className="p-8 bg-white rounded-[40px] shadow-lg mb-20">
                <div className="flex gap-8 items-center flex-col xl:flex-row">
                  <div className="flex-shrink-0 w-96">
                    <div className="bg-gradient-to-br from-[#4ba3c3] to-[#5ab1d0] rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop"
                        alt="Happy senior woman smiling"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1 bg-[#fef4b8] rounded-full text-xs font-medium text-gray-700 mb-3">
                      Step 1
                    </div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">
                      Unbox Your Kit
                    </h3>
                    <p className="text-sm text-gray-600">
                      Unbox your ForeverVOI kit<br />
                      (or opt for Concierge)
                    </p>
                  </div>
                </div>
              </StackCard>

              <StackCard className="p-8 bg-white rounded-[40px] shadow-lg mb-20">
                <div className="flex gap-8 items-center flex-col xl:flex-row">
                  <div className="flex-shrink-0 w-96">
                    <div className="bg-gradient-to-br from-[#d4e8e4] to-[#c2ded9] rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
                        alt="Senior woman in white sweater"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1 bg-[#fef4b8] rounded-full text-xs font-medium text-gray-700 mb-3">
                      Step 2
                    </div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">
                      Record Stories
                    </h3>
                    <p className="text-sm text-gray-600">
                      Share your life's stories in<br />
                      laid recording with our guided<br />
                      conversation prompts
                    </p>
                  </div>
                </div>
              </StackCard>

              <StackCard className="p-8 bg-white rounded-[40px] shadow-lg mb-20">
                <div className="flex gap-8 items-center flex-col xl:flex-row">
                  <div className="flex-shrink-0 w-96">
                    <div className="bg-gradient-to-br from-[#f4e4d4] to-[#e8d4c4] rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop"
                        alt="Family gathering"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1 bg-[#fef4b8] rounded-full text-xs font-medium text-gray-700 mb-3">
                      Step 3
                    </div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">
                      Start Sharing
                    </h3>
                    <p className="text-sm text-gray-600">
                      Invite family members to access<br />
                      and contribute to your growing<br />
                      family archive
                    </p>
                  </div>
                </div>
              </StackCard>

              <StackCard className="p-8 bg-white rounded-[40px] shadow-lg mb-20">
                <div className="flex gap-8 items-center flex-col xl:flex-row">
                  <div className="flex-shrink-0 w-96">
                    <div className="bg-gradient-to-br from-[#e8d4f4] to-[#d4c4e8] rounded-3xl overflow-hidden aspect-[4/3]">
                      <img
                        src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop"
                        alt="Legacy preservation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1 bg-[#fef4b8] rounded-full text-xs font-medium text-gray-700 mb-3">
                      Step 4
                    </div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">
                      Grow Your Legacy
                    </h3>
                    <p className="text-sm text-gray-600">
                      Watch as your family history<br />
                      comes alive with stories, photos,<br />
                      and memories that last forever
                    </p>
                  </div>
                </div>
              </StackCard>
            </ScrollStack>
          </div>
        </div>

        <div className="max-w-7xl pb-56  -mt-[60rem] mx-auto grid md:grid-cols-2 gap-16 items-center bg-[#FFFCEA] ">
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            <FamilyStoryCard img={familyStory} />
            <div className="absolute -bottom-[29rem] right-[21rem] w-[10rem] hidden md:block  h-full ">
              <img src={vector3} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
              Your family's stories.<br />
              Always your control.
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              ForeverYOU ensures your parents' and grandparents' voices, wisdom, and stories are preserved in a way your family will regularly engage with.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              className="space-y-4 mb-8"
            >
              <motion.div variants={fadeInRight} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">Download or delete anytime</p>
              </motion.div>
              <motion.div variants={fadeInRight} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">Choose who can talk to the avatar</p>
              </motion.div>
              <motion.div variants={fadeInRight} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">Set boundaries for topics and audiences</p>
              </motion.div>
              <motion.div variants={fadeInRight} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-900 bg-[#FFE95A] p-0.5 rounded flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">Protected with military-grade encryption & blockchain</p>
              </motion.div>
            </motion.div>

            <button className="bg-[#1a3e3e] text-white px-8 py-4 rounded-full hover:bg-[#2a4e4e]  text-sm font-medium">
              Join the Private Waitlist
            </button>
          </motion.div>
        </div>
      </section>
      <TestimonialCarousel />
    </div>
  );
}