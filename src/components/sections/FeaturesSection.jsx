// src/components/sections/FeaturesSection.jsx
import { Video, MessageCircle } from "lucide-react";
import { RiBookShelfLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";

import Card from "../Card";
import img1 from "../../assets/1.png";
import vector from "../../assets/Vector 34.png";
import AnimatedSection from "../AnimatedSection";

export default function FeaturesSection() {
  return (
    <section className="py-40 px-8 relative">
      {/* connector line (STATIC — no animation) */}
      <div className="absolute z-0 pointer-events-none select-none -top-[8rem] left-[49.5rem] w-[14rem] h-65">
        <img src={vector} alt="vector" className="block w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT: Image Card (fixed) */}
          <div className="relative order-2 md:order-1">
            <Card img={img1} />
          </div>

          {/* RIGHT: Text + Features (fixed) */}
          <div className="order-1 md:order-2">
            <AnimatedSection
              heading={[
                [
                  { text: "Memories" },
                  { text: "slip away.", highlight: true },
                ],
                [
                  { text: "Photos gather" },
                  { text: "dust", highlight: true },
                ],
                [
                  { text: "Videos remain" },
                  { text: "unwatched.", highlight: true },
                ],
              ]}
              description="ForeverYOU ensures your parents’ and grandparents’ voices, wisdom, and stories are preserved in a way your family will regularly engage with."
              headingClass="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6"
              descriptionClass=" text-gray-700 mb-10 leading-relaxed"
            />


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              <div className="flex items-start gap- flex-col gap-4">
                <div className=" bg-white  border-gray-200 flex-shrink-0">
                  <RiBookShelfLine className="w-7 h-7 text-gray-600" />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Interactive conversations happen every day
                </p>
              </div>

              <div className="flex items-start flex-col gap-4">
                <div className=" bg-white border-gray-200 flex-shrink-0">
                  <PiYoutubeLogo className="w-7 h-7 text-gray-900" />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Hours of video recordings never get watched
                </p>
              </div>

              <div className="flex items-start flex-col gap-4">
                <div className=" bg-white border-gray-200 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gray-900" />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Interactive conversations happen every day
                </p>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}
