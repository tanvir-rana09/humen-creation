import { motion } from "framer-motion";
import FamilyCard from "../FamilyCard";
import concierge from "../../assets/newcon.png";

const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

export default function FamilySection() {
  return (
    <section className="py-20 px-8 my-[160px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
          <FamilyCard img={concierge} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
            The family connection <br />
            gift of a lifetime
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            ForeverYOU ensures your parents' and grandparents' voices, wisdom, and stories are preserved in a way your
            family will regularly engage with.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { t: "For You", s: "Capture your life story in your own words." },
              { t: "For Loved Ones", s: "Share memories that deepen connection today." },
              { t: "For Future Generations", s: "Leave a voice they can trust, not just a name in a family tree." },
            ].map((item) => (
              <div key={item.t} className="bg-white border-2 border-[#FFE95A] rounded-3xl">
                <div className="font-medium text-gray-900 border-l-4 p-4 rounded-2xl border-[#FFE95A] pl-2">
                  <p className="font-semibold text-lg">{item.t}</p>
                  <span className="text-gray-600">{item.s}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
}
