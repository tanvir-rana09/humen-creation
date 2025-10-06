import { motion } from "framer-motion";
import family2 from "../../assets/family (2).png";
import { ArrowLeft } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };

export default function ExperienceSection() {
  const handleJoinClick = (e) => {
    e.preventDefault();

    // exact form first, then sensible fallbacks
    const target =
      document.getElementById("waitlist") ||
      document.getElementById("waitlist-form") ||
      document.getElementById("footer-form") ||
      document.getElementById("join-waitlist") ||
      document.getElementById("cta-form") ||
      document.getElementById("footer");

    // sticky nav offset
    const nav = document.querySelector("nav.sticky, .sticky.top-0, nav[role='navigation']");
    const offset = (nav?.offsetHeight ?? 72) + 12;

    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });

      // focus the first field a moment after scroll finishes
      setTimeout(() => {
        const firstField =
          target.querySelector('input[name="fullName"]') ||
          target.querySelector("input[type='text']") ||
          target.querySelector("input, select, textarea");
        firstField?.focus?.();
      }, 350);

      // keep URL in sync for deep links
      try { history.replaceState(null, "", "#waitlist"); } catch {}
    } else {
      // last resort: bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="py-16 px-8 bg-[#22463C] w-full max-w-7xl mx-auto rounded-4xl">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl font-serif text-white mb-4"
        >
          Experience it for yourself.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-base"
        >
          Start a conversation with real ForeverYOU avatars — created from authentic life stories.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {["Barbara", "Jeremy", "Len"].map((name) => (
          <motion.div
            key={name}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center rounded-4xl p-3 flex flex-col"
          >
            <div className="rounded-2xl aspect-square mb-4 relative">
              <img src={family2} alt="family" className="rounded-3xl h-full object-cover" />
              <div className="bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900">
                <ArrowLeft className="text-gray-600 w-5 h-5 rotate-180" />
              </div>
            </div>
            <h3 className="text-gray-100 font-semibold text-lg pt-5">{name}</h3>
            <p className="text-sm text-gray-400 pt-2">Authentic stories now conversational and interactive.</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
        className="text-center mt-10"
      >
        <a
          href="#waitlist"
          onClick={handleJoinClick}
          className="bg-teal-950/80 text-gray-100 px-10 py-3 rounded-full hover:bg-teal-950 text-sm font-medium"
        >
          Join the waitlist → create yours
        </a>
      </motion.div>
    </section>
  );
}
