import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import group1 from "../../assets/Group.svg";
import old from "../../assets/old.png";
import convertion from "../../assets/convertion.png";
import flag from "../../assets/flag.png";
import AnimatedHeadingAndDescription from "../AnimatedHeadingAndDescription";

const fadeInLeft = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  const scrollWithOffset = (e, targetId) => {
    e.preventDefault();

    // prefer exact form card for "waitlist", otherwise normal target
    const target =
      (targetId === "waitlist" &&
        (document.getElementById("waitlist") ||
          document.getElementById("waitlist-form") ||
          document.getElementById("footer-form") ||
          document.getElementById("join-waitlist") ||
          document.getElementById("cta-form") ||
          document.getElementById("footer"))) ||
      document.getElementById(targetId);

    const nav = document.querySelector("nav.sticky, .sticky.top-0, nav[role='navigation']");
    const offset = (nav?.offsetHeight ?? 72) + 12;

    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });

      if (targetId === "waitlist") {
        // focus first field after scroll
        setTimeout(() => {
          const firstField =
            target.querySelector('input[name="fullName"]') ||
            target.querySelector("input[type='text']") ||
            target.querySelector("input, select, textarea");
          firstField?.focus?.();
        }, 350);

        // keep URL hash consistent
        try { history.replaceState("#waitlist"); } catch { }
      }
    } else {
      // fallback to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-40 px-8 bg-[#FFFCEA] relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className="pt-8"
        >
          <AnimatedHeadingAndDescription
            heading="Your Story. Your Voice. Forever."
            description="An authenticated digital version of you — so your loved ones and future generations can talk with you across time.  In an AI-saturated world, authenticity is the new trust. ForeverYOU makes sure your story is real, verified, and
            yours."
            headingClass="text-5xl md:text-6xl font-serif text-gray-900 leading-[1.15] mb-6"
            descriptionClass="text-base text-gray-700 leading-relaxed max-w-md"
          />
          <div className="flex flex-col gap-4 mt-5">
            <a
              href="#waitlist"
              onClick={(e) => scrollWithOffset(e, "waitlist")}
              className="bg-[#1a3e3e] text-white px-8 py-4 rounded-full hover:bg-[#2a4e4e] shadow-sm text-sm font-medium w-fit"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollWithOffset(e, "how-it-works")}
              className="border-2 border-gray-900 bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 flex items-center gap-2 group w-fit text-sm font-medium"
            >
              See How It Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="relative"
        >
          
          <div className='rounded-[35px] shadow-xl border-[3px] parent border-gray-600 cursor-pointer hover: transition-all duration-500 has-[.child:hover]:-rotate-6'>
            <div className="relative z-10 bg-[#FFFCEA] rounded-[32px] hover:rotate-0 child -rotate-6  p-2.5 shadow-xl border-[3px] border-gray-600  transition-all duration-500 h-[28rem]">
              <div
                style={{ backgroundImage: `url(${old})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="rounded-[24px] overflow-hidden h-full p-6 relative"
              >
                <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-md z-10">
                  <div className="text-[10px] font-semibold text-gray-800">Conversation Authenticity</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: "84%" }} />
                    </div>
                    <span className="text-xs font-bold text-gray-900">84%</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between bg-white rounded-full w-[60%] mx-auto px-3 py-2 shadow-md absolute -bottom-1 left-1/2 -translate-x-1/2">
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden">
                    <img src={convertion} alt="" className="w-full h-full object-contain" />
                  </div>
                  <button className="flex items-center gap-2 bg-[#fbbf24] text-gray-900 px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-[#f59e0b]">
                    ⚡ Start a conversation
                  </button>
                  <div className="border rounded-full flex items-center gap-2 p-1 border-gray-200">
                    <img src={flag} alt="" className="w-7 h-7 rounded-full" />
                    <ChevronDown className="text-gray-200 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spark graphic */}
          <div className="absolute z-20 -bottom-[3.5rem] left-[-1.7rem]">
            <img src={group1} alt="spark" className="w-28 h-28" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
