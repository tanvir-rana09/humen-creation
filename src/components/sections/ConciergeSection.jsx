import { motion } from "framer-motion";
import concierge from "../../assets/newcon.png";
import group from "../../assets/Group 1939.svg";
import Concierge from "../ConciergeCardImage";
import AnimatedHeadingAndDescription from "../AnimatedHeadingAndDescription";

const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export default function ConciergeSection() {
  const handleJoinClick = (e) => {
    e.preventDefault();

    // Prefer the exact form card; fall back to common IDs or footer
    const target =
      document.getElementById("waitlist") ||
      document.getElementById("waitlist-form") ||
      document.getElementById("footer-form") ||
      document.getElementById("join-waitlist") ||
      document.getElementById("cta-form") ||
      document.getElementById("footer");

    // Sticky nav offset (works with Tailwind .sticky top-0 nav)
    const nav = document.querySelector("nav.sticky, .sticky.top-0, nav[role='navigation']");
    const offset = (nav?.offsetHeight ?? 72) + 12;

    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });

      // Focus first input after scroll
      setTimeout(() => {
        const firstField =
          target.querySelector('input[name="fullName"]') ||
          target.querySelector("input[type='text']") ||
          target.querySelector("input, select, textarea");
        firstField?.focus?.();
      }, 350);

      // Keep URL hash consistent for deep links
      try { history.replaceState(null, "", "#waitlist"); } catch {}
    } else {
      // Last resort: bottom of the page
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="concierge" className="py-48 px-8 xl:px-32 overflow-hidden my-10 bg-[#FFFCEA] mx-auto max-w-7xl rounded-4xl relative">
      <div className="!absolute -top-3 right-[9rem] z-50 w-[18rem] h-48 hidden xl:block">
        <img src={group} alt="vector" />
      </div>
      <div className="max-w-7xl mx-auto grid justify-between md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
          <AnimatedHeadingAndDescription 
          heading={"ForeverYOU Concierge for families who want the very best"}
          headingClass="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          description={"Our Platinum Concierge team personally guides you through the process of creating a ForeverYOU. From in-home recordings to beautifully curated archives, every detail is handled with care and discretion."}
          descriptionClass="text-gray-700 mb-8 "
          />
         
          <a
            href="#waitlist"
            onClick={handleJoinClick}
            className="bg-[#0D2C1A] text-white px-8 py-3 rounded-full hover:bg-[#2a4e4e] font-medium"
          >
            Request Details
          </a>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} className="relative">
          <Concierge img={concierge} />
        </motion.div>
      </div>
    </section>
  );
}
