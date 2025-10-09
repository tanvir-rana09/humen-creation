import { motion } from "framer-motion";
import family1 from "../../assets/family (1).png";
import family2 from "../../assets/family (2).png";
import family3 from "../../assets/family (3).png";
import {  FileText } from "lucide-react";
import AnimatedHeadingAndDescription from "../AnimatedHeadingAndDescription";
import { TbSignature } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";


const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } };

export default function ProofSection() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-left mb-16">
        <AnimatedHeadingAndDescription
        heading={"It's more than just preserving memories. We're preserving truth and legacy."}
        headingClass="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
        description={"In a world where AI can fake anyone's likeness, ForeverYOU provides proof."}
        descriptionClass="text-base text-gray-700 mx-auto leading-relaxed mb-12"
        />
       
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center border-2 border-gray-500 rounded-4xl p-3 flex flex-col">
          <div className="rounded-2xl aspect-video mb-4 relative">
            <img src={family1} alt="family" className="rounded-3xl" />
            <div className="bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900">
              <TbSignature className="text-gray-600 w-5 h-5" />
            </div>
          </div>
          <p className=" text-gray-700 pt-5">Digitally signed like an autobiography</p>
        </motion.div>

        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center border-2 border-gray-500 rounded-4xl p-3 flex flex-col">
          <div className="rounded-2xl aspect-video mb-4 relative">
            <img src={family2} alt="family" className="rounded-3xl" />
            <div className="bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900">
              <FileText className="text-gray-600 w-5 h-5" />
            </div>
          </div>
          <p className=" text-gray-700 pt-5">Conversations link back to original recordings, photos, and journals</p>
        </motion.div>

        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center border-2 border-gray-500 rounded-4xl p-3 flex flex-col">
          <div className="rounded-2xl aspect-video mb-4 relative">
            <img src={family3} alt="family" className="rounded-3xl" />
            <div className="bg-[#FFE95A] w-12 h-12 rounded-full absolute bottom-0 left-1/2 flex items-center justify-center -translate-x-1/2 translate-y-1/2 text-gray-900">
              <SlBadge className="text-gray-600 w-5 h-5" />
            </div>
          </div>
          <p className=" text-gray-700 pt-5">Patent-pending Authenticity Score shows how true-to-source each response is</p>
        </motion.div>
      </div>
    </section>
  );
}
