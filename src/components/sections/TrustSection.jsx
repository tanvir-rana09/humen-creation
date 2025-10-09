import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import AnimatedHeadingAndDescription from "../AnimatedHeadingAndDescription";
import { TbPhotoVideo } from "react-icons/tb";
import { TbSettingsCheck } from "react-icons/tb";
import { TbLockBitcoin } from "react-icons/tb";


const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };

export default function TrustSection() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedHeadingAndDescription
        heading={"A new chapter in autobiography: conversational"}
        headingClass="text-4xl md:text-5xl font-serif text-gray-900 mb-6 text-center"
        description={"ForeverYOU is the world’s first authenticated conversational biography. It transforms your loved one’s real life stories into a conversational avatar — verified for authenticity and privacy. ForeverYOU is digitally signed, ensuring every conversation stays rooted in truth."}
        descriptionClass="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12"
        />
       
        

        <div className="grid md:grid-cols-4 gap-6">
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-600 rounded-4xl p-6 hover:shadow-lg">
            <div className="text-4xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <Megaphone />
            </div>
            <h3 className="text-gray-900 mb-2">Privacy protected with encryption and blockchain</h3>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-600 rounded-4xl p-6 hover:shadow-lg">
            <div className="text-2xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <TbPhotoVideo />
            </div>
            <h3 className="text-gray-900 mb-2">You decide what's shared, and with whom</h3>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-600 rounded-4xl p-6 hover:shadow-lg">
            <div className="text-xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <TbSettingsCheck />
            </div>
            <h3 className="text-gray-900 mb-2">Original stories (audio/video) linked for authenticity</h3>
          </motion.div>
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white border-2 border-gray-600 rounded-4xl p-6 hover:shadow-lg">
            <div className="text-xl mb-3 bg-[#FFE95A] p-3 rounded-full mx-auto w-fit">
              <TbLockBitcoin />
            </div>
            <h3 className="text-gray-900 mb-2">Secure by design</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
