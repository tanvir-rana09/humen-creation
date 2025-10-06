import { motion } from "framer-motion";
import { Megaphone, Settings, SquarePlay, LockKeyhole } from "lucide-react";
import AnimatedHeadingAndDescription from "../AnimatedHeadingAndDescription";

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };

export default function TrustSection() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedHeadingAndDescription
        heading={"Because Memories Fade. Truth Shouldn't."}
        headingClass="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
        description={"We built ForeverYOU because stories get lost, and in a world where AI can fake anyone's voice or likeness, the truth is priceless."}
        descriptionClass="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12"
        />
        

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
            <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <Megaphone />
            </div>
            <h3 className="text-gray-900 mb-2">Privacy protected with encryption and blockchain</h3>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
            <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <Settings />
            </div>
            <h3 className="text-gray-900 mb-2">You decide what's shared, and with whom</h3>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
            <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <SquarePlay />
            </div>
            <h3 className="text-gray-900 mb-2">Original stories (audio/video) linked for authenticity</h3>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:shadow-lg">
            <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <LockKeyhole />
            </div>
            <h3 className="text-gray-900 mb-2">Secure by design</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
